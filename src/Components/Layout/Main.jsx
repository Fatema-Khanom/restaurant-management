
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const Main = () => {
    return (
        <div>
            <div className="max-w-6xl m-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;