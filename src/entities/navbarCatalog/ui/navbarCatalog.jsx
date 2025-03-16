import { useState } from 'react';
import cls from './navbarCatalog.module.css';
import { catalog } from '@/shared/const/links';
import { useMediaQuery } from 'react-responsive';

export const NavbarCatalog = () => {
    const arrCatalog = Object.entries(catalog);
    const [style, setStyle] = useState('');
    const isSmalldevice = useMediaQuery({
        query: '(max-width: 768px)',
    });
    let content;
    const handleMouseEnter = (value) => () => {
        setStyle(value);
    };
    if (isSmalldevice) {
        content = (
            <div className={cls.small_allProducts_category}>
                {arrCatalog.map(([key, value], index) => {
                    return (
                        <a
                            onMouseEnter={handleMouseEnter(key)}
                            key={index}
                            href={`/catalog/${key}`}
                            className={cls.link}
                            style={
                                style === key
                                    ? {
                                          backgroundColor: '#756c00',
                                          color: 'white',
                                      }
                                    : {}
                            }
                        >
                            <p>
                                {typeof value === 'string'
                                    ? value
                                    : Object.keys(value)[0]}
                            </p>
                        </a>
                    );
                })}
            </div>
        );
    } else
        content = (
            <>
                <div className={cls.allProducts_category}>
                    {arrCatalog.map(([key, value], index) => {
                        return (
                            <a
                                onMouseEnter={handleMouseEnter(key)}
                                key={index}
                                href={`/catalog/${key}`}
                                className={cls.link}
                                style={
                                    style === key
                                        ? {
                                              backgroundColor: '#756c00',
                                              color: 'white',
                                          }
                                        : {}
                                }
                            >
                                <p>
                                    {typeof value === 'string'
                                        ? value
                                        : Object.keys(value)[0]}
                                </p>
                            </a>
                        );
                    })}
                </div>
                <hr className={cls.hr} />
                {arrCatalog.map(([keyCatalog, value], index) => {
                    return (
                        <div
                            key={index}
                            style={
                                style === keyCatalog
                                    ? {
                                          width: '1100px',
                                          display: 'block',
                                          marginTop: '12px',
                                          padding: '0 30px',
                                      }
                                    : { display: 'none' }
                            }
                        >
                            {typeof value === 'string' ? (
                                <a
                                    href={`/catalog/${keyCatalog}`}
                                    className={cls.headerSubCatalog}
                                >
                                    {value}
                                </a>
                            ) : (
                                Object.entries(value).map(([key, value]) => (
                                    <div
                                        key={keyCatalog}
                                        className={cls.subCatalog}
                                    >
                                        <a
                                            className={cls.headerSubCatalog}
                                            href={`/catalog/${keyCatalog}`}
                                        >
                                            {key}
                                        </a>
                                        {Object.entries(value).map((item) => (
                                            <a
                                                key={item[0]}
                                                href={`/catalog/${keyCatalog}/${item[0]}`}
                                            >
                                                {item[1]}
                                            </a>
                                        ))}
                                    </div>
                                ))
                            )}
                        </div>
                    );
                })}
            </>
        );
    return content;
};
