import { Link } from 'react-router-dom';
import cls from './footer.module.css';

export const Footer = () => {
    return (
        <div style={{ marginTop: '50px' }}>
            <hr className={cls.hr} />
            <div className={cls.Footer}>
                <div className={cls.block}>
                    <div className={cls.header}>Компания</div>
                    <Link to="#">Контакты</Link>
                    <Link to="#">Реквизиты</Link>
                </div>
                <div className={cls.block}>
                    <div className={cls.header}>Оплата</div>
                    <Link to="#">Способы оплаты</Link>
                </div>
                <div className={cls.block}>
                    <div className={cls.header}>Сервис</div>
                    <Link to="#">Доставка</Link>
                    <Link to="#">Возврат товаров</Link>
                </div>
                <div className={cls.block}>
                    <div className={cls.header}>Каталог</div>
                    <Link to="#">Все акции</Link>
                    <Link to="#">Товары</Link>
                </div>
                <div className={cls.number}>
                    <a href="tel:+79640421485">+7(964) 042-14-85</a>
                    <br /> <span>Режим работы: с 09:00 до 20:00 (МСК)</span>
                    <br />
                    <Link
                        aria-current="page"
                        to="/login"
                        className="title-link"
                        style={{
                            color: 'rgb(22, 22, 22)',
                        }}
                    >
                        <div style={{ width: '50px', height: '50px' }}></div>
                    </Link>
                </div>
            </div>
        </div>
    );
};
