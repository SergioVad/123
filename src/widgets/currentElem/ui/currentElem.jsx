import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentUserData } from '../../../app/store/users';
import { constApi } from '@/shared/const/constApi';
// import { addRuble } from '@/shared/ui/addRuble/AddRuble';
// import CategoryUnderItem from '@/todo/listFurn/categoryUnderItem';
import { PageLoader } from '@/pages/PageLoader';
import {
    useDeleteCurrentElemMutation,
    useGetCurrentElemQuery,
} from '../api/currentElemApi';
import { Breadcrumb } from '@/shared/ui/breadCrumb/breadCrumb';
import { catalog } from '@/shared/const/links';
import cls from './currentElem.module.css';
import Next from '../assets/arrow/next.svg';
import Prev from '../assets/arrow/prev.svg';
import Next_2 from '../assets/arrow/next_2.svg';
import Whatsapp from '../assets/whatsapp.svg';
import Phone from '../assets/phone.svg';
import { AddRuble } from '@/shared/ui/addRuble/AddRuble';
import { useEffect, useRef, useState } from 'react';
import contacts from '../assets/contacts.png';
import { useMediaQuery } from 'react-responsive';
import Cross from '../assets/krestik.svg';

export const CurrentElem = ({
    currentCategory,
    currentSubCategory_or_currentElement,
    currentSubElement,
}) => {
    const isSmalldevice = useMediaQuery({ minWidth: 320, maxWidth: 991 });
    const [styleSlider, setStyleSlider] = useState(0);

    let content;
    let handleStyleSlider;
    let gapValue;
    const user = useSelector(getCurrentUserData());
    const { data, isError, isLoading } = useGetCurrentElemQuery(
        currentSubElement
            ? currentSubElement
            : currentSubCategory_or_currentElement,
    );
    const device_1330_1550 = useMediaQuery({ minWidth: 1350, maxWidth: 1550 });
    const device_1200_1349 = useMediaQuery({ minWidth: 1200, maxWidth: 1349 });
    const device_992_1199 = useMediaQuery({ minWidth: 992, maxWidth: 1199 });
    const device_769_991 = useMediaQuery({ minWidth: 769, maxWidth: 991 });
    const device_576_768 = useMediaQuery({ minWidth: 576, maxWidth: 768 });
    const device_410_575 = useMediaQuery({ minWidth: 410, maxWidth: 575 });
    const device_320_409 = useMediaQuery({ minWidth: 320, maxWidth: 409 });
    switch (true) {
        case device_320_409: {
            gapValue = '5px';
            handleStyleSlider = (value) => () => {
                setStyleSlider((prevState) => {
                    if (data.product_image.length < 3) {
                        return prevState;
                    }
                    if (prevState == 0 && value === 1) {
                        return prevState;
                    }
                    if (
                        prevState / (80 + 5) - 3 ===
                            data.product_image.length * -1 &&
                        value === -1
                    ) {
                        return prevState;
                    }
                    return prevState + value * 80 + (value * 10) / 2;
                });
            };
            break;
        }
        case device_410_575: {
            gapValue = '10px';
            handleStyleSlider = (value) => () => {
                setStyleSlider((prevState) => {
                    if (data.product_image.length < 4) {
                        return prevState;
                    }
                    if (prevState == 0 && value === 1) {
                        return prevState;
                    }
                    if (
                        prevState / (82 + 10) - 4 ===
                            data.product_image.length * -1 &&
                        value === -1
                    ) {
                        return prevState;
                    }
                    return prevState + value * 82 + (value * 30) / 3;
                });
            };
            break;
        }
        case device_576_768: {
            gapValue = '10px';
            handleStyleSlider = (value) => () => {
                setStyleSlider((prevState) => {
                    if (data.product_image.length < 4) {
                        return prevState;
                    }
                    if (prevState == 0 && value === 1) {
                        return prevState;
                    }
                    if (
                        prevState / (105 + 10) - 4 ===
                            data.product_image.length * -1 &&
                        value === -1
                    ) {
                        return prevState;
                    }
                    return prevState + value * 105 + (value * 30) / 3;
                });
            };
            break;
        }
        case device_769_991: {
            gapValue = '20px';
            handleStyleSlider = (value) => () => {
                setStyleSlider((prevState) => {
                    if (data.product_image.length < 4) {
                        return prevState;
                    }
                    if (prevState == 0 && value === 1) {
                        return prevState;
                    }
                    if (
                        prevState / (135 + 20) - 4 ===
                            data.product_image.length * -1 &&
                        value === -1
                    ) {
                        return prevState;
                    }
                    return prevState + value * 135 + (value * 60) / 3;
                });
            };
            break;
        }
        case device_992_1199: {
            gapValue = '20px';
            handleStyleSlider = (value) => () => {
                setStyleSlider((prevState) => {
                    if (data.product_image.length < 4) {
                        return prevState;
                    }
                    if (prevState == 0 && value === 1) {
                        return prevState;
                    }
                    if (
                        prevState / (120 + 20) - 4 ===
                            data.product_image.length * -1 &&
                        value === -1
                    ) {
                        return prevState;
                    }
                    return prevState + value * 120 + (value * 60) / 3;
                });
            };
            break;
        }
        case device_1330_1550: {
            gapValue = '30px';
            handleStyleSlider = (value) => () => {
                setStyleSlider((prevState) => {
                    if (data.product_image.length < 4) {
                        return prevState;
                    }
                    if (prevState == 0 && value === 1) {
                        return prevState;
                    }
                    if (
                        prevState / (170 + 30) - 4 ===
                            data.product_image.length * -1 &&
                        value === -1
                    ) {
                        return prevState;
                    }
                    return prevState + value * 170 + (value * 90) / 3;
                });
            };
            break;
        }
        case device_1200_1349: {
            gapValue = '20px';
            handleStyleSlider = (value) => () => {
                setStyleSlider((prevState) => {
                    if (data.product_image.length < 4) {
                        return prevState;
                    }
                    if (data.product_image.length < 4) {
                        return prevState;
                    }
                    if (prevState == 0 && value === 1) {
                        return prevState;
                    }
                    if (
                        prevState / (140 + 20) - 4 ===
                            data.product_image.length * -1 &&
                        value === -1
                    ) {
                        return prevState;
                    }
                    return prevState + value * 140 + (value * 60) / 3;
                });
            };
            break;
        }
        default: {
            gapValue = '30px';
            handleStyleSlider = (value) => () => {
                setStyleSlider((prevState) => {
                    if (data.product_image.length < 4) {
                        return prevState;
                    }
                    if (prevState == 0 && value === 1) {
                        return prevState;
                    }
                    if (
                        prevState / (207.5 + 30) - 4 ===
                            data.product_image.length * -1 &&
                        value === -1
                    ) {
                        return prevState;
                    }
                    return prevState + value * 207.5 + (value * 90) / 3;
                });
            };
            break;
        }
    }

    const [style_for_block_info_product, setStyle_for_block_info_product] =
        useState(0);
    const [removeFurn] = useDeleteCurrentElemMutation();
    const handleDelete = (userId) => () => {
        removeFurn(userId);
    };
    const [modal, setModal] = useState({});
    const [contentModal, setContentModal] = useState({});
    const handleModal = () => {
        setModal({
            opacity: '1',
            pointerEvents: 'all',
            zIndex: '1000000',
        });
        setContentModal({
            opacity: '1',
            scale: '1',
        });
        document.body.style.overflow = 'hidden';
    };
    const throttleRef = useRef(false);
    const timeOut = useRef();

    useEffect(() => {
        return () => {
            clearTimeout(timeOut.current);
        };
    }, []);

    const updateInfoProduct = (value) => () => {
        if (!throttleRef.current) {
            setStyle_for_block_info_product((prevState) => {
                if (
                    prevState >= data.product_image.length - 1 &&
                    value !== -1
                ) {
                    return 0;
                }
                if (prevState == 0 && value !== 1) {
                    return data.product_image.length - 1;
                }
                if (prevState < data.product_image.length) {
                    return prevState + value;
                }
            });
            throttleRef.current = true;
            timeOut.current = setTimeout(() => {
                throttleRef.current = false;
            }, 605);
        }
    };
    const closeModal = () => {
        setTimeout(() => {
            setModal({});
            document.body.style.overflow = 'auto';
        }, 500);
        setContentModal({
            opacity: '0.3',
            scale: '0',
        });
    };
    if (isError) {
        return <div>error...</div>;
    }
    if (isLoading) {
        return (
            <div className="offset-2 h3 d-flex justify-content-center my-5">
                <PageLoader />
            </div>
        );
    }
    if (isSmalldevice) {
        content = (
            <div className={cls.Small_CurrentElem}>
                <div className="d-flex align-items-center">
                    {user && user.type === 'admin' && (
                        <div>
                            {/* <a href={`/catalog/${currentCategory}`}> */}
                            <button
                                onClick={handleDelete(data._id)}
                                className="btn btn-danger"
                                style={{ height: '50px' }}
                            >
                                Удалить
                            </button>
                            {/* </a> */}
                            <Link
                                to={`/catalog/${currentCategory}/${data.product_name}/editElem`}
                            >
                                <button
                                    className="btn btn-warning mx-3"
                                    style={{ height: '50px' }}
                                >
                                    Изменить
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
                <Breadcrumb
                    firstElement={currentCategory}
                    secondElement={
                        currentSubElement
                            ? currentSubCategory_or_currentElement
                            : data.product_name_rus
                    }
                    thirdElement={data.product_name_rus}
                />
                <hr />
                <div className={cls.modal} style={modal}>
                    <div className={cls.blackout} onClick={closeModal}></div>
                    <div
                        className={cls.small_modal_content}
                        style={contentModal}
                    >
                        <img
                            src={contacts}
                            alt="contacts"
                            className={cls.small_modal_img}
                        />
                        <div className={cls.small_modal_text}>
                            Воспользуйтесь кнопкой «WhatsApp» или позвоните по
                            телефонному номеру для связи с магазином. Менеджеры
                            магазина проконсультируют Вас по всем интересующим
                            вопросам и оформят заказ.
                        </div>
                        <button className={cls.cross} onClick={closeModal}>
                            <Cross />
                        </button>
                    </div>
                </div>
                <h2>{data.product_name_rus}</h2>
                <div className={cls.small_slider}>
                    <div
                        id="carouselExampleIndicators"
                        className="carousel slide"
                    >
                        <div className="carousel-inner">
                            {data.product_image.map((item, index) => (
                                <div
                                    key={index}
                                    className={`carousel-item${index === 0 ? ' active' : ''}`}
                                >
                                    <div className={cls.small_wrapper_image}>
                                        <img
                                            style={{
                                                maxHeight: '100%',
                                                maxWidth: '100%',
                                            }}
                                            src={`${constApi.imgSource}furniture/${
                                                typeof catalog[
                                                    currentCategory
                                                ] === 'string'
                                                    ? currentCategory
                                                    : currentSubCategory_or_currentElement
                                            }/${item}`}
                                            alt={`Фото ${index}`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div
                            className={cls.small_wrapper_icon_prev}
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev"
                        >
                            <Prev />
                        </div>
                        <div
                            className={cls.small_wrapper_icon_next}
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next"
                        >
                            <Next />
                        </div>
                    </div>
                </div>

                <div className={cls.small_second_slider}>
                    <div
                        className={cls.small_slider_wrapper_items_current_elem}
                    >
                        <div
                            className={cls.wrapper_items_current_elem}
                            style={{
                                marginLeft: styleSlider + 'px',
                                gap: gapValue,
                            }}
                        >
                            <div
                                className={cls.wrapper_icon_prev_2}
                                onClick={handleStyleSlider(1)}
                            >
                                <Next_2 className={cls.icon_prev_2} />
                            </div>
                            <div
                                className={cls.wrapper_icon_next_2}
                                onClick={handleStyleSlider(-1)}
                            >
                                <Next_2 className={cls.icon_next_2} />
                            </div>
                            {data.product_image.map((item, index) => (
                                <div
                                    key={index}
                                    className={cls.item_current_elem}
                                >
                                    <div
                                        className={cls.small_wrapper_image_elem}
                                    >
                                        <img
                                            src={`${constApi.imgSource}furniture/${
                                                typeof catalog[
                                                    currentCategory
                                                ] === 'string'
                                                    ? currentCategory
                                                    : currentSubCategory_or_currentElement
                                            }/${item}`}
                                            className={cls.item_img}
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to={index}
                                            aria-current="true"
                                            aria-label={`Slide ${index + 1}`}
                                            onClick={(e) => {
                                                const value =
                                                    e.target.dataset.bsSlideTo;
                                                setStyle_for_block_info_product(
                                                    Number(value),
                                                );
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={cls.small_block_price}>
                    <div className={cls.small_price}>
                        <div className={cls.small_h2_price}>
                            <AddRuble val={data.present_price} />
                        </div>
                        <button
                            onClick={handleModal}
                            className={cls.small_button_buy}
                        >
                            Как купить?
                        </button>
                    </div>
                    {/* <span>
                            Пожалуйста, уточняйте, что нашли товар на сайте
                            mebeluxury
                        </span> */}
                    <div className={cls.small_contacts}>
                        <a
                            target="_blank"
                            href={`https://chatapp.online/wa-redirect/?phone=79640421485&text=Здравствуйте! Интересует следующий товар: ${window.location.href} - ${data.product_name_rus}`}
                            rel="noreferrer"
                        >
                            <div className={cls.small_wrapperIconWhatsapp}>
                                <Whatsapp
                                    className={cls.small_icon_svg_whatsapp}
                                />
                            </div>
                        </a>
                        <a href="tel:+79640421485">
                            <div className={cls.small_number}>
                                <Phone className={cls.small_icon_svg_phone} />
                                +7(964) 042-14-85
                            </div>
                        </a>
                    </div>
                </div>

                <div className={cls.small_full_descr}>
                    <div className={cls.small_descr_1}>
                        <div className={cls.info_product}>
                            <div className={cls.second_header}>О товаре</div>
                            <div className={cls.small_descr}>
                                <div className={cls.desrc_flex}>
                                    <div> Страна производитель:</div>
                                    <div>Россия</div>
                                </div>
                                <div className={cls.desrc_flex}>
                                    <div>Фабрика:</div> <div>Fortuna Home</div>
                                </div>
                                <div className={cls.desrc_flex}>
                                    <div>Материал:</div>{' '}
                                    <div>МДФ, ХДФ, ЛДСП</div>
                                </div>
                                <div className={cls.desrc_flex}>
                                    <div>Цвет:</div> <div>Белый глянец</div>
                                </div>
                            </div>
                        </div>
                        <div className={cls.demensions}>
                            <div className={cls.second_header}>
                                Габариты(мм)
                            </div>
                            <div className={cls.small_descr_1}>
                                <div className={cls.small_descr}>
                                    <div className={cls.desrc_flex}>
                                        <div>Кровать (180х200):</div>
                                        <div>Ш 2480*Г 2050*В 1500</div>
                                    </div>
                                    <div className={cls.desrc_flex}>
                                        <div>Шкаф 6-и дверный:</div>
                                        <div>Ш 2800*Г 540*В 2150</div>
                                    </div>
                                    <div className={cls.desrc_flex}>
                                        <div>Туалетный столик:</div>
                                        <div>Ш 1400*Г 480*В 880</div>
                                    </div>
                                    <div className={cls.desrc_flex}>
                                        <div>Зеркало:</div>
                                        <div>Ш 770*В 740</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cls.small_descr_2}>
                        <hr />
                        Купить «Спальный гарнитур Ариана» по выгодной цене за
                        137 760 рублей.
                        <div>
                            <div className={cls.b}>Сколько стоит доставка?</div>
                            Стоимость доставки товара «Спальный гарнитур Ариана»
                            от 390 руб. Доставка товара осуществляется прямо до
                            места жительства заказчика. Точная стоимость
                            рассчитывается менеджером индивидуально для каждого
                            заказа. Продавец доставляет товар с помощью
                            собственной службы доставки либо через ТК по тарифам
                            партнеров. Услуги транспортной компании оплачивает
                            получатель. Воспользуйтесь кнопкой «Написать» или
                            «Позвонить», чтобы узнать у менеджера точную
                            стоимость доставки.
                        </div>
                    </div>
                </div>
                <hr />
                {/* <CategoryUnderItem slide={0} /> */}
            </div>
        );
    } else
        content = (
            <div className={cls.CurrentElem}>
                <div className="d-flex align-items-center">
                    {user && user.type === 'admin' && (
                        <div>
                            {/* <a href={`/catalog/${currentCategory}`}> */}
                            <button
                                onClick={handleDelete(data._id)}
                                className="btn btn-danger"
                                style={{ height: '50px' }}
                            >
                                Удалить
                            </button>
                            {/* </a> */}
                            <Link
                                to={`/catalog/${currentCategory}/${data.product_name}/editElem`}
                            >
                                <button
                                    className="btn btn-warning mx-3"
                                    style={{ height: '50px' }}
                                >
                                    Изменить
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
                <Breadcrumb
                    firstElement={currentCategory}
                    secondElement={
                        currentSubElement
                            ? currentSubCategory_or_currentElement
                            : data.product_name_rus
                    }
                    thirdElement={data.product_name_rus}
                />
                <hr />
                <div className={cls.modal} style={modal}>
                    <div className={cls.blackout} onClick={closeModal}></div>
                    <div className={cls.modal_content} style={contentModal}>
                        <img
                            src={contacts}
                            alt="contacts"
                            className={cls.modal_img}
                        />
                        <div className={cls.modal_text}>
                            Воспользуйтесь кнопкой «WhatsApp» или позвоните по
                            телефонному номеру для связи с магазином. Менеджеры
                            магазина проконсультируют Вас по всем интересующим
                            вопросам и оформят заказ.
                        </div>
                        <button onClick={closeModal}>
                            <Cross className={cls.cross} />
                        </button>
                    </div>
                </div>
                <div className={cls.slider_block}>
                    <div className={cls.slider}>
                        <div
                            id="carouselExampleIndicators"
                            className="carousel slide"
                        >
                            <div className="carousel-inner">
                                {data.product_image.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`carousel-item${index === 0 ? ' active' : ''}`}
                                    >
                                        <div className={cls.wrapper_image}>
                                            <img
                                                style={{
                                                    maxHeight: '100%',
                                                    maxWidth: '100%',
                                                }}
                                                src={`${constApi.imgSource}furniture/${
                                                    typeof catalog[
                                                        currentCategory
                                                    ] === 'string'
                                                        ? currentCategory
                                                        : currentSubCategory_or_currentElement
                                                }/${item}`}
                                                alt={`Фото ${index}`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div
                                className={cls.wrapper_icon_prev}
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="prev"
                                onClick={updateInfoProduct(-1)}
                            >
                                <Next_2 className={cls.main_arrow_prev} />
                            </div>
                            <div
                                className={cls.wrapper_icon_next}
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="next"
                                onClick={updateInfoProduct(1)}
                            >
                                <Next_2 className={cls.main_arrow_next} />
                            </div>
                        </div>
                    </div>
                    <div className={cls.info}>
                        <h2>{data.product_name_rus}</h2>
                        <div className={cls.info_block_price}>
                            <div className={cls.h2_price}>
                                <AddRuble val={data.present_price} />
                            </div>
                            <button
                                onClick={handleModal}
                                className={cls.button_buy}
                            >
                                Как купить?
                            </button>
                        </div>

                        <div className={cls.descr}>
                            <div className={cls.desrc_flex}>
                                <div> Страна производитель:</div>
                                <div>Россия</div>
                            </div>
                            <div className={cls.desrc_flex}>
                                <div>Фабрика:</div> <div>Fortuna Home</div>
                            </div>
                            <div className={cls.desrc_flex}>
                                <div>Материал:</div> <div>МДФ, ХДФ, ЛДСП</div>
                            </div>
                            <div className={cls.desrc_flex}>
                                <div>Цвет:</div> <div>Белый глянец</div>
                            </div>
                        </div>
                        <div className={cls.contacts_block}>
                            <span>
                                Пожалуйста, уточняйте, что нашли товар на сайте
                                mebeluxury
                            </span>
                            <div className={cls.contacts}>
                                <a
                                    target="_blank"
                                    href={`https://chatapp.online/wa-redirect/?phone=79640421485&text=Здравствуйте! Интересует следующий товар: ${window.location.href} - ${data.product_name_rus}`}
                                    rel="noreferrer"
                                >
                                    <div className={cls.wrapperIconWhatsapp}>
                                        <Whatsapp
                                            className={cls.icon_svg_whatsapp}
                                        />
                                    </div>
                                </a>
                                <a href="tel:+79640421485">
                                    <div className={cls.number}>
                                        <Phone className={cls.icon_svg_phone} />
                                        +7(964) 042-14-85
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cls.secondSlider_block}>
                    <div className={cls.second_slider}>
                        <div className={cls.slider_wrapper_items_current_elem}>
                            <div
                                className={cls.wrapper_items_current_elem}
                                style={{
                                    marginLeft: styleSlider + 'px',
                                    gap: gapValue,
                                }}
                            >
                                <div
                                    className={cls.wrapper_icon_prev_2}
                                    onClick={handleStyleSlider(1)}
                                >
                                    <Next_2 className={cls.icon_prev_2} />
                                </div>
                                <div
                                    className={cls.wrapper_icon_next_2}
                                    onClick={handleStyleSlider(-1)}
                                >
                                    <Next_2 className={cls.icon_next_2} />
                                </div>
                                {data.product_image.map((item, index) => (
                                    <div
                                        key={index}
                                        className={cls.item_current_elem}
                                    >
                                        <div className={cls.wrapper_image_elem}>
                                            <img
                                                src={`${constApi.imgSource}furniture/${
                                                    typeof catalog[
                                                        currentCategory
                                                    ] === 'string'
                                                        ? currentCategory
                                                        : currentSubCategory_or_currentElement
                                                }/${item}`}
                                                className={cls.item_img}
                                                type="button"
                                                data-bs-target="#carouselExampleIndicators"
                                                data-bs-slide-to={index}
                                                aria-current="true"
                                                aria-label={`Slide ${index + 1}`}
                                                onClick={(e) => {
                                                    const value =
                                                        e.target.dataset
                                                            .bsSlideTo;
                                                    setStyle_for_block_info_product(
                                                        Number(value),
                                                    );
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={cls.descr_item}>
                        {data.product_image.map((item, index) => (
                            <div
                                key={index}
                                className={cls.block_info_product}
                                style={
                                    style_for_block_info_product == index
                                        ? {
                                              opacity: '1',
                                              pointerEvents: 'all',
                                              animationName: 'name',
                                              animationDuration: '.3s',
                                          }
                                        : {}
                                }
                            >
                                <div style={{ margin: '0' }}>
                                    {data.arrDescrImage[index][0]}
                                </div>
                                {data.arrDescrImage[index][2] && (
                                    <div style={{ margin: '0' }}>
                                        {data.arrDescrImage[index][2]}
                                    </div>
                                )}
                                {data.arrDescrImage[index][1] && (
                                    <div style={{ margin: '0' }}>
                                        <AddRuble
                                            val={data.arrDescrImage[index][1]}
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className={cls.full_descr}>
                    <div className={cls.wrapper_full_descr}>
                        <div className={cls.first_half}>
                            <div className={cls.descr}>
                                <h2>О товаре</h2>
                                <div className={cls.desrc_flex}>
                                    <div> Страна производитель:</div>
                                    <div>Россия</div>
                                </div>
                                <div className={cls.desrc_flex}>
                                    <div>Фабрика:</div> <div>Fortuna Home</div>
                                </div>
                                <div className={cls.desrc_flex}>
                                    <div>Материал:</div>{' '}
                                    <div>МДФ, ХДФ, ЛДСП</div>
                                </div>
                                <div className={cls.desrc_flex}>
                                    <div>Цвет:</div> <div>Белый глянец</div>
                                </div>
                            </div>
                            <div className={cls.descr}>
                                <h2>Габариты(мм)</h2>
                                <div className={cls.desrc_flex}>
                                    <div>Кровать (180х200):</div>
                                    <div>Ш 2480*Г 2050*В 1500</div>
                                </div>
                                <div className={cls.desrc_flex}>
                                    <div>Шкаф 6-и дверный:</div>
                                    <div>Ш 2800*Г 540*В 2150</div>
                                </div>
                                <div className={cls.desrc_flex}>
                                    <div>Туалетный столик:</div>
                                    <div>Ш 1400*Г 480*В 880</div>
                                </div>
                                <div className={cls.desrc_flex}>
                                    <div>Зеркало:</div>
                                    <div>Ш 770*В 740</div>
                                </div>
                            </div>
                        </div>
                        <div className={cls.second_half}>
                            Купить «Спальный гарнитур Ариана» по выгодной цене
                            за 137 760 рублей.
                            <div>
                                <div className={cls.b}>
                                    Сколько стоит доставка?
                                </div>
                                Стоимость доставки товара «Спальный гарнитур
                                Ариана» от 390 руб. Доставка товара
                                осуществляется прямо до места жительства
                                заказчика. Точная стоимость рассчитывается
                                менеджером индивидуально для каждого заказа.
                                Продавец доставляет товар с помощью собственной
                                службы доставки либо через ТК по тарифам
                                партнеров. Услуги транспортной компании
                                оплачивает получатель. Воспользуйтесь кнопкой
                                «Написать» или «Позвонить», чтобы узнать у
                                менеджера точную стоимость доставки.
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                {/* <CategoryUnderItem slide={0} /> */}
            </div>
        );
    return data && content;
};
