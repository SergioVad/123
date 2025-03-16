import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentUserData, getIsLoggedIn } from '../../../app/store/users';
import { useNavigate } from 'react-router-dom';
import cls from './Navbar.module.css';
import { useState } from 'react';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { constApi } from '@/shared/const/constApi';
import IconPresent from '../icons/present.svg';
import IconStar from '../icons/star.svg';
import { useMediaQuery } from 'react-responsive';
import Cross from '../icons/krestik.svg';
import Geo from '../icons/geo.svg';
import { NavbarCatalog } from '@/entities/navbarCatalog';

export const Navbar = () => {
    const isSmalldevice = useMediaQuery({
        query: '(max-width: 768px)',
    });

    const navigate = useNavigate();
    const [value, setValue] = useState('');
    const [modal, setModal] = useState({
        opacity: '0',
        pointerEvents: 'none',
    });
    const [styleButton_all_products, setStyleButton_all_products] = useState(
        {},
    );
    const handleSubmit = () => {
        let trueValue;
        if (value) {
            for (let i = 0; i < value.length; i++) {
                if (value[i] === ' ') {
                    value[i + 1] = value[i + 1].toUpperCase();
                }
            }
            trueValue = value[0].toUpperCase() + value.slice(1).toLowerCase();
            navigate(`/catalog/search?name=${trueValue}`);
            setValue('');
        }
    };
    const findElement = useDebounce(handleSubmit, 2000);
    const onChange = (el) => {
        setValue(el.target.value);
        findElement();
    };
    const currentUser = useSelector(getCurrentUserData());
    const isLoggedIn = useSelector(getIsLoggedIn());
    let content;
    if (isSmalldevice) {
        content = (
            <>
                {/* Первый навбар */}
                <div className={cls.small_Navbar_One}>
                    <p className={cls.small_text_town}>Черкесск</p>
                    <div className={cls.small_wrapperLink}>
                        <Link className={cls.link_nav} to="#">
                            <p className={cls.small_text}>Доставка</p>
                        </Link>
                        <Link className={cls.link_nav} to="№">
                            <p className={cls.small_text}>Сборка</p>
                        </Link>
                        <Link className={cls.link_nav} to="№">
                            <p className={cls.small_text}>Оплата</p>
                        </Link>
                        <Link className={cls.link_nav} to="№">
                            <p className={cls.small_text}>Контакты</p>
                        </Link>
                    </div>
                    <p className={cls.small_text_town}>8-964-042-14-85</p>
                </div>

                {/* Второй навбар */}
                <div className={cls.small_Navbar_Two}>
                    <a href="/">
                        <img
                            className={cls.small_logo}
                            src={constApi.imgSource + 'logo/1.png'}
                            alt="1"
                        />
                    </a>
                    <input
                        className={cls.small_input}
                        type="search"
                        aria-label="Search"
                        value={value}
                        onChange={onChange}
                        placeholder="Поиск по товарам"
                    />
                    <button
                        className={cls.small_button_all_products}
                        style={styleButton_all_products}
                        onClick={() => {
                            if (modal.opacity === '0') {
                                setModal({
                                    opacity: '1',
                                    cursor: 'auto',
                                    pointerEvents: 'all',
                                });
                            } else {
                                setModal({
                                    opacity: '0',
                                    cursor: 'none',
                                    pointerEvents: 'none',
                                });
                                setStyleButton_all_products({});
                            }
                        }}
                    >
                        {modal.opacity === '0' ? (
                            <div className={cls.small_burger}>
                                <div className={cls.small_burger__line}></div>
                                <div className={cls.small_burger__line}></div>
                                <div className={cls.small_burger__line}></div>
                            </div>
                        ) : (
                            <Cross className={cls.small_cross} />
                        )}
                    </button>
                    <div className={cls.small_allProducts} style={modal}>
                        <NavbarCatalog />
                    </div>
                </div>
            </>
        );
    } else
        content = (
            <>
                {/* Первый навбар */}
                <div className={cls.Navbar_One}>
                    <div className={cls.town}>
                        <Geo className={cls.geo} />
                        <p className={cls.text}>Черкесск</p>
                    </div>
                    <div className={cls.wrapperLink}>
                        <Link className={cls.link_nav} to="#">
                            Доставка
                        </Link>
                        <Link className={cls.link_nav} to="№">
                            Сборка
                        </Link>
                        <Link className={cls.link_nav} to="№">
                            Оплата
                        </Link>
                        <Link className={cls.link_nav} to="№">
                            Контакты
                        </Link>
                    </div>
                    <p className={cls.text}>
                        <span className={cls.span} style={{ opacity: '0.6' }}>
                            Поддержка клиентов &nbsp;
                        </span>
                        <a href="tel:+79640421485">+7(964) 042-14-85</a>
                    </p>
                </div>

                <hr style={{ margin: '0 0' }} />

                {/* Второй навбар */}
                <div className={cls.Navbar_Two}>
                    <a href="/">
                        <img
                            className={cls.logo}
                            src={constApi.imgSource + 'logo/4.png'}
                            alt="1"
                        />
                    </a>
                    <button
                        className={cls.button_all_products}
                        style={styleButton_all_products}
                        onClick={() => {
                            if (modal.opacity === '0') {
                                setModal({
                                    opacity: '1',
                                    cursor: 'auto',
                                    pointerEvents: 'all',
                                });
                                setStyleButton_all_products({
                                    color: 'black',
                                    backgroundColor: 'rgb(218, 218, 218)',
                                });
                            } else {
                                setModal({
                                    opacity: '0',
                                    cursor: 'none',
                                    pointerEvents: 'none',
                                });
                                setStyleButton_all_products({});
                            }
                        }}
                    >
                        {modal.opacity === '0' ? (
                            <div className={cls.burger}>
                                <div className={cls.burger__line}></div>
                                <div className={cls.burger__line}></div>
                                <div className={cls.burger__line}></div>
                            </div>
                        ) : (
                            <Cross className={cls.cross} />
                        )}
                        Все товары
                    </button>
                    <div className={cls.allProducts} style={modal}>
                        <NavbarCatalog />
                    </div>
                    <input
                        className={cls.input}
                        type="search"
                        aria-label="Search"
                        value={value}
                        onChange={onChange}
                        placeholder="Поиск по товарам"
                    />
                    <button className={cls.button_blue} to="#">
                        <IconStar className={cls.icon_blue} width={20} />
                        Популярное
                    </button>
                    <button className={cls.button_red} to="#">
                        <IconPresent className={cls.icon_red} width={20} />
                        Распродажа
                    </button>
                    {/* {currentUser && currentUser.type === 'admin' && (
                        <Link
                            to="/edit"
                            style={{
                                color: 'black',
                                fontSize: '100%',
                                textDecoration: 'none',
                            }}
                        >
                            Редактировать
                        </Link>
                    )} */}
                </div>
            </>
        );
    return content;
};
