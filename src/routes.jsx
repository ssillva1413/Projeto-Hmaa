import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Especialidades from "./pages/Especialidades"
import Sobre from "./pages/Sobre"
import Projeto from "./pages/Projeto"
import Cartao from "./pages/Cartao"
import Noticias from "./pages/Noticias"
import Page404 from "./pages/Page404"
import PageBase from "./pages/PageBase"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import NoticiasDetalhes from "./pages/NoticiasDetalhes";
import WhatsAppButton from "./components/WhatsAppButton"; 
import Ouvidoria from "./pages/Ouvidoria";

function AppRoutes () {
    return(
       <BrowserRouter>
           
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<PageBase />}>
                        <Route index element ={<Home />}></Route>
                        <Route path="/noticias" element ={<Noticias />}></Route>
                        <Route path="/sobre" element ={<Sobre />}></Route>
                        <Route path="/especialidades" element ={<Especialidades />}></Route>
                        <Route path="/projetos" element ={<Projeto />}></Route>
                        <Route path="/cartão" element ={<Cartao />}></Route>
                        <Route path="/*" element ={<Page404 />}></Route>

                        <Route path="/noticias/:id" element={<NoticiasDetalhes />} /> 

                         <Route path="/ouvidoria" element={<Ouvidoria />} />


                    </Route>
                    
                </Routes>
                 <WhatsAppButton />
            
           

       </BrowserRouter>
    )
}

export default AppRoutes