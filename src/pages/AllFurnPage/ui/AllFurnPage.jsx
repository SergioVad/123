import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getFurniture } from '../../../app/store/furniture';
import { getCurrentUserData } from '../../../app/store/users';
import { constApi } from '@/shared/const/constApi';
import { handlerScrollUp } from '@/shared/utils/handlerScrollUp';

export const AllFurnPage = () => {
    const navigate = useNavigate();
    const user = useSelector(getCurrentUserData());
    const furniture = useSelector(getFurniture());
    if (user && user.type === 'admin') {
        return (
            <div className="d-flex flex-wrap justify-content-around mt-4 offset-2">
                {furniture.map((item) => (
                    <div
                        key={item._id}
                        className="card mb-4"
                        style={{ width: '200px', height: '250px' }}
                    >
                        <Link
                            style={{
                                textDecoration: 'none',
                                color: 'inherit',
                            }}
                            to={`/catalog/${item.category_product}/${item.product_name}`}
                            onClick={handlerScrollUp}
                        >
                            <img
                                src={constApi.imgSource + item.product_image}
                                style={{ width: '100%', height: '150px' }}
                            />
                            <div className="card-body d-flex flex-column align-items-center justify-content-center">
                                <h5 className="card-title text-center">
                                    {item.product_name}
                                </h5>
                                <Link
                                    to={`/catalog/${item.category_product}/${item.product_name}/editElem`}
                                >
                                    <button
                                        className="btn btn-warning mx-3"
                                        style={{ height: '50px' }}
                                    >
                                        Изменить
                                    </button>
                                </Link>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        );
    } else {
        navigate('/');
    }
};
