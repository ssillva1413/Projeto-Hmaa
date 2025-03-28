import HeaderInfo from "../../components/HeaderInfo"
import Header from "../../components/Header"
import Container from "../../components/Container"
import Footer from "../../components/Footer"
import { Outlet } from "react-router-dom"

function PageBase (){
    return (
        <>
            <HeaderInfo />
            <Header />
            <Container>
                <Outlet/>
            </Container>
            <Footer />
        </>
    )
}
export default PageBase