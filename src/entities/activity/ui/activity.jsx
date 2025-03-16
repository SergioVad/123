import { constApi } from '@/shared/const/constApi';
import cls from './activity.module.css';
import { useMediaQuery } from 'react-responsive';

export const Activity = () => {
    const isSmalldevice = useMediaQuery({
        query: '(max-width: 768px)',
    });
    let content;
    if (isSmalldevice) {
        content = (
            <div className={cls.small_Activity}>
                <div className={cls.small_block}>
                    <img
                        src={constApi.imgSource + 'bg/serial_furn.jpg'}
                        alt="serial_furn"
                        className={cls.img}
                    />
                    <div className={cls.dark_background}></div>
                    <div className={cls.small_header_1}>Серийная мебель</div>
                </div>
                <div className={cls.small_block}>
                    <img
                        src={constApi.imgSource + 'bg/custom-made_furn.jpg'}
                        alt="custom-made_furn"
                        className={cls.img}
                    />
                    <div className={cls.dark_background}></div>
                    <div className={cls.small_header_2}>Мебель на заказ</div>
                </div>
            </div>
        );
    } else
        content = (
            <div className={cls.Activity}>
                <div className={cls.block}>
                    <img
                        src={constApi.imgSource + 'bg/serial_furn.jpg'}
                        alt="serial_furn"
                        className={cls.img}
                    />
                    <div className={cls.dark_background}></div>
                    <div className={cls.header_1}>Серийная мебель</div>
                </div>
                <div className={cls.block}>
                    <img
                        src={constApi.imgSource + 'bg/custom-made_furn.jpg'}
                        alt="custom-made_furn"
                        className={cls.img}
                    />
                    <div className={cls.dark_background}></div>
                    <div className={cls.header_2}>Мебель на заказ</div>
                </div>
            </div>
        );
    return content;
};
