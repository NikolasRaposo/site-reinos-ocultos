//REACT
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//COMPONENTS
import Navbar from "./components/00_LAYOUT/01_Navbar/index";
import Footer from "./components/00_LAYOUT/02_Footer/index";

//PAGES
import Home       from "./pages/01_HOME/index";
import Blog       from "./pages/02_BLOG/index";
import Campanhas  from "./pages/03_CAMPAIGNS/index";
import Aventuras    from "./pages/04_ADVENTURES/index";
import Shop       from "./pages/06_SHOP/index";

export default function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route exact path="/"     element={<Home />} />
          <Route path="/blog"       element={<Blog />} />
          <Route path="/campanhas"  element={<Campanhas />} />
          <Route path="/aventuras"  element={<Aventuras />} />
          <Route path="/loja"       element={<Shop />} />
        </Routes>
      <Footer />
    </Router>
  );
}