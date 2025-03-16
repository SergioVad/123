import { useSelector } from 'react-redux';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { PageLoader } from '@/pages/PageLoader/ui/pageLoader';
import { useCurrentCategoryQuery } from '../api/currentCategoryApi';
import cls from './currentCategory.module.css';
import RangeSlider from 'react-range-slider-input';
import { useState } from 'react';
import ArrTop from '../assets/img/arrow/arrow_top.svg';
import { Card } from '@/shared/ui/card/Card';
import { catalog } from '@/shared/const/links';
import { Breadcrumb } from '@/shared/ui/breadCrumb/breadCrumb';
import { getCurrentUserData } from '@/app/store/users';

const CurrentCategory = ({ value }) => {
    console.log(value);
    const { currentCategory } = useParams();
    let [searchParams] = useSearchParams();
    const user = useSelector(getCurrentUserData());
    const [width, setWidth] = useState([0, 100]);
    const [depth, setDepth] = useState([0, 100]);
    const [height, setHeight] = useState([0, 100]);
    const [price, setPrice] = useState([0, 100]);
    const [iconPrice, setIconPrice] = useState('rotate(0deg)');
    const [iconDimensions, setIconDimensions] = useState('rotate(0deg)');
    const [iconOffer, setIconOffer] = useState('rotate(0deg)');
    const styleIconPrice = {
        transform: iconPrice,
        transition: 'all 0.2s',
        marginRight: '10px',
        width: '12px',
    };
    const styleIconDimensions = {
        transform: iconDimensions,
        transition: 'all 0.2s',
        marginRight: '10px',
        width: '12px',
    };
    const styleIconOffer = {
        transform: iconOffer,
        transition: 'all 0.2s',
        marginRight: '10px',
        width: '12px',
    };
    const name = searchParams.get('name');
    const category_product_rus =
        typeof catalog[value] === 'string'
            ? catalog[value]
            : value !== 'search'
              ? Object.values(catalog[currentCategory])[0][value]
              : undefined;
    const {
        isError,
        isLoading,
        data: category,
    } = useCurrentCategoryQuery({ value, name });
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
    return (
        <div className={cls.CurrentCategory}>
            <Breadcrumb
                search={name}
                firstElement={currentCategory}
                secondElement={
                    typeof catalog[currentCategory] === 'object'
                        ? value
                        : undefined
                }
            />

            {user && user.type === 'admin' && (
                <Link to="/product-change">
                    <div className={cls.admin_panel}>
                        <button className="btn btn-primary">Добавить</button>
                    </div>
                </Link>
            )}
            {currentCategory !== 'search' ? (
                <h2 className="me-4">{category_product_rus}</h2>
            ) : (
                <h2 className="me-4">Найденные товары</h2>
            )}
            <div className={cls.blockCurrentCategory}>
                {/* <div className={cls.blockSortAndFilt}>
                    <div className={cls.block}>
                        <div
                            className={cls.header_block}
                            onClick={() => {
                                setIconPrice((prevState) =>
                                    prevState === 'rotate(0deg)'
                                        ? 'rotate(180deg)'
                                        : 'rotate(0deg)',
                                );
                            }}
                        >
                            <ArrTop style={styleIconPrice} />
                            <b>Цена</b>
                        </div>
                        {iconPrice === 'rotate(0deg)' && (
                            <div className={cls.content_block}>
                                <div className={cls.range}>
                                    <div className={cls.wrapper_value_range}>
                                        <div className={cls.value_range}>
                                            от {price[0]}
                                        </div>
                                        <div className={cls.value_range}>
                                            до {price[1]}
                                        </div>
                                    </div>
                                    <RangeSlider
                                        value={price}
                                        onInput={setPrice}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={cls.block}>
                        <div
                            className={cls.header_block}
                            onClick={() =>
                                setIconDimensions((prevState) =>
                                    prevState === 'rotate(0deg)'
                                        ? 'rotate(180deg)'
                                        : 'rotate(0deg)',
                                )
                            }
                        >
                            <div className={cls.header_block}>
                                <ArrTop style={styleIconDimensions} />
                                <b>Размер</b>
                            </div>
                        </div>
                        {iconDimensions === 'rotate(0deg)' && (
                            <div className={cls.content_block}>
                                <div className={cls.subBlock}>
                                    <div className={cls.headerSubBlock}>
                                        Ширина, см
                                    </div>
                                    <div className={cls.range}>
                                        <div
                                            className={cls.wrapper_value_range}
                                        >
                                            <div className={cls.value_range}>
                                                от {width[0]}
                                            </div>
                                            <div className={cls.value_range}>
                                                до {width[1]}
                                            </div>
                                        </div>
                                        <RangeSlider
                                            value={width}
                                            onInput={setWidth}
                                        />
                                    </div>
                                </div>

                                <div className={cls.subBlock}>
                                    <div className={cls.headerSubBlock}>
                                        Глубина, см
                                    </div>
                                    <div className={cls.range}>
                                        <div
                                            className={cls.wrapper_value_range}
                                        >
                                            <div className={cls.value_range}>
                                                от {depth[0]}
                                            </div>
                                            <div className={cls.value_range}>
                                                до {depth[1]}
                                            </div>
                                        </div>
                                        <RangeSlider
                                            value={depth}
                                            onInput={setDepth}
                                        />
                                    </div>
                                </div>

                                <div className={cls.subBlock}>
                                    <div className={cls.headerSubBlock}>
                                        Высота, см
                                    </div>
                                    <div className={cls.range}>
                                        <div
                                            className={cls.wrapper_value_range}
                                        >
                                            <div className={cls.value_range}>
                                                от {height[0]}
                                            </div>
                                            <div className={cls.value_range}>
                                                до {height[1]}
                                            </div>
                                        </div>
                                        <RangeSlider
                                            value={height}
                                            onInput={setHeight}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={cls.block}>
                        <div
                            className={cls.header_block}
                            onClick={() =>
                                setIconOffer((prevState) =>
                                    prevState === 'rotate(0deg)'
                                        ? 'rotate(180deg)'
                                        : 'rotate(0deg)',
                                )
                            }
                        >
                            <div className={cls.header_block}>
                                <ArrTop style={styleIconOffer} />
                                <b>Предложения</b>
                            </div>
                        </div>
                        {iconOffer === 'rotate(180deg)' && (
                            <div className={cls.content_block}>
                                <div>Популярное</div>
                                <div>Распродажа</div>
                            </div>
                        )}
                    </div>
                </div> */}
                <div className={cls.catalog}>
                    {category.map((item) => (
                        <Card key={item._id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CurrentCategory;
