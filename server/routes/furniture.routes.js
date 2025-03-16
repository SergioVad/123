const express = require('express');
const Furniture = require('../models/Furniture');
const router = express.Router({ mergeParams: true });
const path = require('path');
const uuid = require('uuid');
const fs = require('fs');

// Получение всей фурнитуры
// router.get('/', async (req, res) => {
//     try {
//         const furniture = await Furniture.find();
//         res.status(200).send(furniture);
//     } catch (error) {
//         res.status(500).json({
//             message: 'На сервере произошла ошибка. Попробуйте позже',
//         });
//     }
// });

// Получение конкретной категории
router.get('/:category', async (req, res) => {
    try {
        const { category } = req.params;
        const name = req.query.name;
        let furniture;
        if (name) {
            const allFurniture = await Furniture.find();
            furniture = allFurniture.filter(
                (p) =>
                    p.product_name_rus
                        .toLowerCase()
                        .indexOf(name.toLowerCase()) > -1,
            );
        } else {
            furniture = await Furniture.find({ category_product: category });
        }
        res.status(200).send(furniture);
    } catch (error) {
        res.status(500).json({
            message: 'На сервере произошла ошибка. Попробуйте позже',
        });
    }
});

// Получение конкретного элемента
router.get('/category/:name', async (req, res) => {
    try {
        const { name } = req.params;
        const furniture = await Furniture.find();
        const furnitureByName = furniture.find(
            (item) => item.product_name === name,
        );
        res.status(200).send(furnitureByName);
    } catch (error) {
        res.status(500).json({
            message: 'На сервере произошла ошибка. Попробуйте позже',
        });
    }
});

// Удаление элемента
router.delete('/category/:unitId', async (req, res) => {
    try {
        const { unitId } = req.params;
        const removedUnit = await Furniture.findById(unitId);
        for (let i = 0; i < removedUnit.product_image.length; i++) {
            const pathToImage = path.resolve(
                __dirname,
                '..',
                'static',
                'furniture',
                removedUnit.category_product,
                removedUnit.product_image[i],
            );
            const universalPathToImage = path.toNamespacedPath(pathToImage);
            fs.unlinkSync(universalPathToImage);
        }
        await removedUnit.remove();
        res.send(null);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Ошибка удаления элемента',
        });
    }
});

// Создание элемента
router.post('/product-change', async (req, res) => {
    try {
        const {
            category_product,
            product_name,
            product_name_rus,
            present_price,
            past_price,
            product_image_1_descr,
            product_image_2_descr,
            product_image_3_descr,
            product_image_4_descr,
            product_image_5_descr,
            product_image_6_descr,
            product_image_7_descr,
            product_image_8_descr,
            product_image_9_descr,
            product_image_10_descr,
        } = req.body;
        const { product_image } = req.files;
        const furniture = await Furniture.find();
        const universalName = furniture.find(
            (item) =>
                item.product_name === product_name ||
                item.product_name_rus === product_name_rus,
        );
        if (universalName)
            return res.status(500).send({
                error: 'Данное имя уже существует',
            });
        const arrDescrImage = [];
        if (product_image_1_descr !== '') {
            arrDescrImage.push(product_image_1_descr.split('.'));
        }
        if (product_image_2_descr !== '') {
            arrDescrImage.push(product_image_2_descr.split('.'));
        }
        if (product_image_3_descr !== '') {
            arrDescrImage.push(product_image_3_descr.split('.'));
        }
        if (product_image_4_descr !== '') {
            arrDescrImage.push(product_image_4_descr.split('.'));
        }
        if (product_image_5_descr !== '') {
            arrDescrImage.push(product_image_5_descr.split('.'));
        }
        if (product_image_6_descr !== '') {
            arrDescrImage.push(product_image_6_descr.split('.'));
        }
        if (product_image_7_descr !== '') {
            arrDescrImage.push(product_image_7_descr.split('.'));
        }
        if (product_image_8_descr !== '') {
            arrDescrImage.push(product_image_8_descr.split('.'));
        }
        if (product_image_9_descr !== '') {
            arrDescrImage.push(product_image_9_descr.split('.'));
        }
        if (product_image_10_descr !== '') {
            arrDescrImage.push(product_image_10_descr.split('.'));
        }

        // Проверка на то что картинка только одна
        if (!product_image.length) {
            let fileName = uuid.v4() + '.jpg';
            product_image.mv(
                path.resolve(
                    __dirname,
                    '..',
                    'static',
                    'furniture',
                    category_product,
                    fileName,
                ),
            );
            const newItem = await Furniture.create({
                category_product,
                product_name,
                product_name_rus,
                present_price,
                past_price,
                arrDescrImage,
                product_image: fileName,
            });
            return res.status(201).send(newItem);
        } else {
            const arrImage = [];
            for (let i = 0; i < product_image.length; i++) {
                let fileName = uuid.v4() + '.jpg';
                arrImage.push(fileName);
                product_image[i].mv(
                    path.resolve(
                        __dirname,
                        '..',
                        'static',
                        'furniture',
                        category_product,
                        fileName,
                    ),
                );
            }
            const newItem = await Furniture.create({
                category_product,
                product_name,
                product_name_rus,
                present_price,
                past_price,
                arrDescrImage,
                product_image: arrImage,
            });
            res.status(201).send(newItem);
        }
    } catch (error) {
        console.log('error', error);
        res.status(500).json({
            message: 'На сервере произошла ошибка. Попробуйте позже',
        });
    }
});

// Изменение элемента
router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { product_name_rus, present_price, past_price } = req.body;
        const { product_image } = req.files;
        let fileName = uuid.v4() + '.jpg';
        product_image.mv(
            path.resolve(
                __dirname,
                '..',
                'static',
                'furniture',
                category_product,
                fileName,
            ),
        );
        const updatedElem = await Furniture.findByIdAndUpdate(
            id,
            {
                product_name_rus,
                present_price,
                past_price,
                product_image: fileName,
            },
            {
                new: true,
            },
        );
        res.status(201).send(updatedElem);
    } catch (error) {
        res.status(500).json({
            message: 'На сервере произошла ошибка. Попробуйте позже',
        });
    }
});

module.exports = router;
