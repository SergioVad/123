import { Link } from 'react-router-dom';
import { constApi } from '@/shared/const/constApi';
import cls from './catalog.module.css';
import { handlerScrollUp } from '@/shared/utils/handlerScrollUp';
import { useMediaQuery } from 'react-responsive';
import { catalog } from '@/shared/const/links';

export const CatalogMainMenu = () => {
    const arrCatalog = Object.entries(catalog);
    const isSmalldevice = useMediaQuery({
        query: '(max-width: 768px)',
    });
    let content;
    if (isSmalldevice) {
        content = (
            <>
                <h2>Наш Каталог</h2>
                <div className={cls.small_catalog}>
                    {arrCatalog.map(([key, value], index) => (
                        <div key={index} className={cls.small_block_catalog}>
                            <Link
                                to={`/catalog/${key}`}
                                onClick={handlerScrollUp}
                            >
                                <img
                                    src={
                                        constApi.imgSource +
                                        `catalog/${key}.jpg`
                                    }
                                    alt={key}
                                    className={cls.img}
                                />
                                <div className={cls.small_header}>
                                    {typeof value === 'string'
                                        ? value
                                        : Object.keys(value)[0]}
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </>
        );
    } else
        content = (
            <>
                <h2>Наш Каталог</h2>
                <div className={cls.catalog}>
                    {arrCatalog.map(([key, value], index) => (
                        <div key={index} className={cls.block_catalog}>
                            <Link
                                to={`/catalog/${key}`}
                                onClick={handlerScrollUp}
                            >
                                <img
                                    src={
                                        constApi.imgSource +
                                        `catalog/${key}.jpg`
                                    }
                                    alt={key}
                                    className={cls.img}
                                />
                                <div className={cls.header}>
                                    {typeof value === 'string'
                                        ? value
                                        : Object.keys(value)[0]}
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </>
        );
    return content;
};
