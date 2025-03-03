import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Especialidades from "./pages/Especialidades"
import Sobre from "./pages/Sobre"
import Projeto from "./pages/Projeto"
import Cartao from "./pages/Cartao"


function AppRoutes () {
    return(
       <BrowserRouter>
            <Routes>
                <Route path="/" element ={<Home />}></Route>
                <Route path="/sobre" element ={<Sobre />}></Route>
                <Route path="/especialidades" element ={<Especialidades />}></Route>
                <Route path="/projetos" element ={<Projeto />}></Route>
                <Route path="/cartão" element ={<Cartao />}></Route>
            </Routes>

       </BrowserRouter>
    )
}

export default AppRoutes