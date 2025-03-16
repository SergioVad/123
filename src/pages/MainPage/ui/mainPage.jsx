import { Activity } from '@/entities/activity';
import { CatalogMainMenu } from '@/entities/catalog/ui/catalogMainMenu';
import { SliderMailFurn } from '@/features/sliderMainFurn/ui/sliderMainFurn';
// import { DiscountFurn } from '@/todo/listFurn/discountFurn';
// import { PopularFurn } from '@/todo/listFurn/popularFurn';
import { Services } from '@/entities/services/ui/services';
import cls from './mainPage.module.css';
import { useMediaQuery } from 'react-responsive';

export const MainPage = () => {
    const isSmalldevice = useMediaQuery({
        query: '(max-width: 768px)',
    });
    let slider_block;
    if (isSmalldevice) {
        slider_block = (
            <div className={cls.small_slider_block}>
                <SliderMailFurn />
                <Activity />
            </div>
        );
    } else
        slider_block = (
            <div className={cls.slider_block}>
                <Activity />
                <SliderMailFurn />
            </div>
        );
    // const discountFurn = furniture.filter((u) => u.type === 'discount');
    // const popularFurn = furniture.filter((u) => u.type === 'popular');
    return (
        // discountFurn &&
        // popularFurn && (
        // <div className="d-flex flex-column offset-2 p-3">
        <div>
            {slider_block}
            <CatalogMainMenu />
            {/* <DiscountFurn value={discountFurn} /> 
                     <PopularFurn value={popularFurn} />  */}
            <Services />
        </div>
        // )
    );
};
