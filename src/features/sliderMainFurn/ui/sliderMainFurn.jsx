import cls from './sliderMainFurn.module.css';
import Next from '../assets/arrow/next.svg';
import Prev from '../assets/arrow/prev.svg';
import { useEffect, useState } from 'react';
import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider2.jpg';
import slider3 from '../assets/slider3.jpg';

export const SliderMailFurn = () => {
    const [count, setCount] = useState(0);

    const style = {
        marginLeft: count === 0 ? '0' : `${count * 100}%`,
    };
    useEffect(() => {
        if (count === -3) {
            setCount(0);
        }
        if (count === 1) {
            setCount(-2);
        }
    }, [count]);
    return (
        <>
            <div className={cls.SliderMailFurn}>
                <div className={cls.shadow}></div>
                <div className={cls.lineImages} style={style}>
                    <div className={cls.blockSlider}>
                        <img src={slider1} alt="slider1" className={cls.img} />
                        <div className={cls.textInImage_1}>
                            Только качественная мебель от проверенных
                            производителей
                        </div>
                    </div>
                    <div className={cls.blockSlider}>
                        <img src={slider2} alt="slider2" className={cls.img} />
                        <div className={cls.textInImage_2}>
                            Большие скидки на определенные товары
                        </div>
                    </div>
                    <div className={cls.blockSlider}>
                        <img src={slider3} alt="slider3" className={cls.img} />
                        <div className={cls.textInImage_3}>
                            Широкий ассортимент фурнитуры
                        </div>
                    </div>
                </div>
                <div className={cls.btns}>
                    <button
                        className={cls.btn}
                        onClick={() => setCount((prevState) => prevState + 1)}
                    >
                        <Prev className={cls.icon} />
                    </button>
                    <button
                        className={cls.btn}
                        onClick={() => setCount((prevState) => prevState - 1)}
                    >
                        <Next className={cls.icon} />
                    </button>
                </div>
                <div className={cls.blockNavImg}>
                    <div
                        className={cls.wrapperNavImg}
                        onClick={() => setCount(0)}
                    >
                        <div
                            style={{ opacity: count === 0 ? '1' : 0.5 }}
                            className={cls.navImg}
                        />
                    </div>

                    <div
                        onClick={() => setCount(-1)}
                        className={cls.wrapperNavImg}
                    >
                        <div
                            style={{ opacity: count === -1 ? '1' : 0.5 }}
                            className={cls.navImg}
                        />
                    </div>

                    <div
                        onClick={() => setCount(-2)}
                        className={cls.wrapperNavImg}
                    >
                        <div
                            style={{ opacity: count === -2 ? '1' : 0.5 }}
                            className={cls.navImg}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
