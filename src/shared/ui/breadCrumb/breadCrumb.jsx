import { Link } from 'react-router-dom';
import { catalog } from '@/shared/const/links';
import cls from './breadCrumb.module.css';

export const Breadcrumb = ({
    firstElement,
    secondElement,
    thirdElement,
    search,
}) => {
    const main = <Link to={`/`}>Главная страница</Link>;
    const catalogLink = <Link to={'/catalog'}>Каталог</Link>;
    if (typeof catalog[firstElement] === 'object') {
        const rusFirstElement = (
            <Link to={`/catalog/${firstElement}`}>
                {Object.keys(catalog[firstElement])[0]}
            </Link>
        );
        const rusSecondElement = (
            <Link to={`/catalog/${firstElement}/${secondElement}`}>
                {Object.values(catalog[firstElement])[0][secondElement]}
            </Link>
        );
        const content = thirdElement ? (
            <div className={cls.font_size}>
                <span className={cls.link}>{main}</span>&nbsp; &gt; &nbsp;
                <span className={cls.link}>{catalogLink}</span>&nbsp; &gt;
                &nbsp;<span className={cls.link}>{rusFirstElement}</span>&nbsp;
                &gt; &nbsp;<span className={cls.link}>{rusSecondElement}</span>
                &nbsp; &gt; &nbsp;
                <span className={cls.currentElement}>{thirdElement}</span>
            </div>
        ) : secondElement ? (
            <div className={cls.font_size}>
                <span className={cls.link}>{main}</span>&nbsp; &gt; &nbsp;
                <span className={cls.link}>{catalogLink}</span>&nbsp; &gt;
                &nbsp;<span className={cls.link}>{rusFirstElement}</span>&nbsp;
                &gt; &nbsp;
                <span className={cls.currentElement}>
                    {Object.values(catalog[firstElement])[0][secondElement]}
                </span>
            </div>
        ) : (
            <div className={cls.font_size}>
                <span className={cls.link}>{main}</span>&nbsp; &gt; &nbsp;
                <span className={cls.link}>{catalogLink}</span>&nbsp; &gt;
                &nbsp;
                <span className={cls.currentElement}>
                    {Object.keys(catalog[firstElement])[0]}
                </span>
            </div>
        );
        return content;
    }
    const rusFirstElement = (
        <Link to={`/catalog/${firstElement}`}>{catalog[firstElement]}</Link>
    );
    const content = secondElement ? (
        <div className={cls.font_size}>
            <span className={cls.link}>{main}</span>&nbsp; &gt; &nbsp;
            <span className={cls.link}>{catalogLink}</span>&nbsp; &gt; &nbsp;
            <span className={cls.link}>{rusFirstElement}</span>
            &nbsp; &gt; &nbsp;
            <span className={cls.currentElement}>{secondElement}</span>
        </div>
    ) : firstElement ? (
        <div className={cls.font_size}>
            <span className={cls.link}>{main}</span>&nbsp; &gt; &nbsp;
            <span className={cls.link}>{catalogLink}</span>&nbsp; &gt; &nbsp;
            {search ? (
                <span className={cls.currentElement}>Найденные элементы</span>
            ) : (
                <span className={cls.currentElement}>
                    {catalog[firstElement]}
                </span>
            )}
        </div>
    ) : (
        <div className={cls.font_size}>
            <span className={cls.link}>{main}</span>&nbsp; &gt; &nbsp;
            <span className={cls.currentElement}>{catalogLink}</span>
        </div>
    );
    return content;
};
