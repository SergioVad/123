import { Navbar } from '../widgets/Navbar';
import { Footer } from '../widgets/Footer';
import { AppRoutes } from './providers/RoutesProvider';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoggedIn, loadUsersList } from './store/users';
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

function App() {
    // const isSmalldevice = useMediaQuery({
    //     query: '(max-width: 768px)',
    // });
    const isMiddleldevice = useMediaQuery({
        query: '(max-width: 1199px)',
    });
    const isLoggedIn = useSelector(getIsLoggedIn());
    const dispatch = useDispatch();

    useEffect(() => {
        if (isLoggedIn) {
            dispatch(loadUsersList());
        }
    }, [isLoggedIn]);
    let content;
    if (isMiddleldevice) {
        content = (
            <div className="d-flex flex-column" style={{ margin: '0 20px' }}>
                <Navbar />
                <AppRoutes />
                <Footer />
            </div>
        );
    } else
        content = (
            <div className="App">
                <Navbar />
                <AppRoutes />
                <Footer />
            </div>
        );
    return content;
}

export default App;
