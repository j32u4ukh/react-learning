import { Outlet } from "react-router-dom";
import BasicLayout from "./BasicLayout";

export default function MainLayout(){
    return (
        <BasicLayout>
            <Outlet/>
        </BasicLayout>
    )
}