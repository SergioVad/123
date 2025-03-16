import { Link } from 'react-router-dom';
import { constApi } from '@/shared/const/constApi';
import cls from './Card.module.css';
import { AddRuble } from '../addRuble/AddRuble';
import { catalog } from '@/shared/const/links';

export const Card = ({ item }) => {
    const link =
        typeof catalog[item.category_product] === 'string'
            ? `/catalog/${item.category_product}/${item.product_name}`
            : `/catalog/${item.main_category_product}/${item.category_product}/${item.product_name}`;
    return (
        <div className={cls.Card}>
            <Link className={cls.link} to={link}>
                <div className={cls.wrapper_img}>
                    <img
                        className={cls.img}
                        src={
                            constApi.imgSource +
                            'furniture/' +
                            item.category_product +
                            '/' +
                            item.product_image[0]
                        }
                    />
                </div>
            </Link>
            <hr />
            <Link className={cls.link_header} to={link}>
                <div className={cls.block_name}>{item.product_name_rus}</div>
            </Link>
            <div className={cls.proportions}>
                <span>Габариты (ШхГхВ):</span> 2600x600x2100 <br />
                <span>Цвет:</span> Белый глянец <br />
                <span>Материал:</span> МДФ, ХДФ, ЛДСП
            </div>
            <div className={cls.bottom_wrapper}>
                <div className={cls.price_wrapper}>
                    {item.past_price && (
                        <div className={cls.past_price}>
                            <div className={cls.num_past_price}>
                                <AddRuble val={item.past_price} />
                            </div>
                            <div className={cls.discount}>-30%</div>
                        </div>
                    )}
                    <div className={cls.present_price}>
                        <AddRuble val={item.present_price} />
                    </div>
                </div>
                {/* <Link className={cls.link_button} to={link}>
                    Подробнее
                </Link> */}
            </div>
            <Link className={cls.link_button} to={link}>
                Подробнее
            </Link>
        </div>
    );
};
