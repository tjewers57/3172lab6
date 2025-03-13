import Navigation from "./components/navigation";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";

export function Format() {
    return (
        <>
            <Navigation/>
            <main style={{minHeight: '90vh'}}>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
}