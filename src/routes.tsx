import Footer from 'components/Footer/Footer'
import Menu from 'components/Menu/Menu'
import PaginaPadrao from 'components/PaginaPadrao/paginaPadrao'
import Cardapio from 'pages/Cardapio/cardapio'
import Inicio from 'pages/Inicio/inicio'
import NotFound from 'pages/NotFound'
import Pratos from 'pages/Pratos/pratos'
import Sobre from 'pages/Sobre/sobre'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function AppRouter() {
  return (
    <main className="container">
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route index element={<Inicio />} />
            <Route path="cardapio" element={<Cardapio />} />
            <Route path="sobre" element={<Sobre />} />
          </Route>
          <Route path="/prato/:id" element={<Pratos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  )
}
