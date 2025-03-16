import { Link } from 'react-router-dom';
import { constApi } from '@/shared/const/constApi';
import { handlerScrollUp } from '@/shared/utils/handlerScrollUp';
import { catalog } from '@/shared/const/links';
import { Breadcrumb } from '@/shared/ui/breadCrumb/breadCrumb';
import cls from './catalog.module.css';

export const Catalog = ({ currentCategory }) => {
    const arrCatalog = Object.entries(catalog);
    if (currentCategory) {
        const currentCatalog = Object.entries(
            Object.values(catalog[currentCategory])[0],
        );
        return (
            <>
                <Breadcrumb firstElement={currentCategory} />
                <h2>{Object.keys(catalog[currentCategory])[0]}</h2>
                <div className={cls.catalog}>
                    {currentCatalog.map(([key, value]) => (
                        <div key={key} className={cls.block_catalog}>
                            <Link
                                to={`/catalog/${currentCategory}/${key}`}
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
    }

    return (
        <>
            <Breadcrumb />
            <h2>Каталог</h2>
            <div className={cls.catalog}>
                {arrCatalog.map(([key, value], index) => (
                    <div key={index} className={cls.block_catalog}>
                        <Link to={`/catalog/${key}`} onClick={handlerScrollUp}>
                            <img
                                src={constApi.imgSource + `catalog/${key}.jpg`}
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
};
