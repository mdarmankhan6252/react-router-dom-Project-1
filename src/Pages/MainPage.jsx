import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";

const MainPage = () => {
    const navigation = useNavigation();
    return (
        <div className="container mx-auto max-w-7xl">
            <Nav></Nav>
            {
                navigation.state === 'loading' ?
                <div className="w-full h-screen flex items-center justify-center"><div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-double border-4 border-r-0 border-l-0 border-b-sky-400 border-t-sky-700"></div></div>:
                <Outlet></Outlet>
            }
            
            <Footer></Footer>
        </div>
    );
};

export default MainPage;