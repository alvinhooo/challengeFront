import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Sobre from "../../pages/Sobre";
import FAQ from "../../pages/Faq";
import ContatoForm from "../../pages/ContatoForm"
import Integrantes from "../../pages/Integrantes";
import IntegranteDetail from "../../pages/IntegranteDetail";
import Solucao from "../../pages/Solucao";
import Assistente from "../../pages/Assistente";

export default function AppRoutes(){

  return(
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sobre" element={<Sobre />} />
    <Route path="/faq" element={<FAQ />} />
    <Route path="/contato" element={<ContatoForm />} />
    <Route path="/integrantes" element={<Integrantes />} />
    <Route path="/integrantes/:rm" element={<IntegranteDetail />} />
    <Route path="/solucao" element={<Solucao />} />
    <Route path="/assistente" element={<Assistente />} />
    <Route path="*" element={<Home />} />
  </Routes>
  )
}


