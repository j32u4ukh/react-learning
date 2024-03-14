import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function MainLayout(){
    return (
        <div>
            <Header/>
            <div style={{height: '75vh'}}>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
}