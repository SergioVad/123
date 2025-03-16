import { constApi } from '@/shared/const/constApi';
import cls from './services.module.css';
import { useMediaQuery } from 'react-responsive';

export const Services = () => {
    const isSmalldevice = useMediaQuery({
        query: '(max-width: 768px)',
    });
    let content;
    if (isSmalldevice) {
        content = (
            <>
                <h2>Услуги</h2>
                <div className={cls.small_services}>
                    <div className={cls.small_servicesBlock}>
                        <img
                            src={constApi.imgSource + 'services/delivery.png'}
                            alt="delivery"
                            className={cls.small_servicesRound}
                        />
                        <div className={cls.small_servicesDescr}>
                            <h3>Доставка</h3>
                            <h4>Доставка до подъезда по КЧР</h4>
                        </div>
                    </div>
                    <div className={cls.small_servicesBlock}>
                        <img
                            src={constApi.imgSource + 'services/assembly.png'}
                            alt="assembly"
                            className={cls.small_servicesRound}
                        />
                        <div className={cls.small_servicesDescr}>
                            <h3>Сборка</h3>
                            <h4>
                                За дополнительную плату вы можете
                                воспользоваться нашими услугами
                            </h4>
                        </div>
                    </div>
                    <div className={cls.small_servicesBlock}>
                        <img
                            src={constApi.imgSource + 'services/lifting.jpeg'}
                            alt="lifting"
                            className={cls.small_servicesRound}
                        />
                        <div className={cls.small_servicesDescr}>
                            <h3>Подъем</h3>
                            <h4>
                                Также вы можете заказать подъем на этаж,
                                предварительно
                            </h4>
                        </div>
                    </div>
                </div>
            </>
        );
    } else
        content = (
            <>
                <h2>Услуги</h2>
                <div className={cls.services}>
                    <div className={cls.servicesBlock}>
                        <img
                            src={constApi.imgSource + 'services/delivery.png'}
                            alt="delivery"
                            className={cls.servicesRound}
                        />
                        <div className={cls.servicesDescr}>
                            <h3>Доставка</h3>
                            <h4>Доставка до подъезда по КЧР</h4>
                        </div>
                    </div>
                    <div className={cls.servicesBlock}>
                        <img
                            src={constApi.imgSource + 'services/assembly.png'}
                            alt="assembly"
                            className={cls.servicesRound}
                        />
                        <div className={cls.servicesDescr}>
                            <h3>Сборка</h3>
                            <h4>
                                За дополнительную плату вы можете
                                воспользоваться нашими услугами
                            </h4>
                        </div>
                    </div>
                    <div className={cls.servicesBlock}>
                        <img
                            src={constApi.imgSource + 'services/lifting.jpeg'}
                            alt="lifting"
                            className={cls.servicesRound}
                        />
                        <div className={cls.servicesDescr}>
                            <h3>Подъем</h3>
                            <h4>
                                Также вы можете заказать подъем на этаж,
                                предварительно
                            </h4>
                        </div>
                    </div>
                </div>
            </>
        );
    return content;
};
