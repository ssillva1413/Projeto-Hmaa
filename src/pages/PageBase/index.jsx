import HeaderInfo from "../../components/HeaderInfo"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Outlet } from "react-router-dom"
import styles from "./PageBase.module.css"

function PageBase (){
    return (
        <>
            <HeaderInfo />
            <Header />
            
                <Outlet/>
           
                
            <Footer />
        </>
    )
}
export default PageBase