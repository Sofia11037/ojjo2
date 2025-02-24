import "./app.scss";
import Header from "../components/Header/Header";
import MainHome from "../pages/Main/MainHome";
import MainFilter from "../pages/MainFilter/MainFilter";
import Product from "../pages/Product/Product";
import Select from "../pages/Select/Select";
import Footer from "../components/Footer/Footer";
import Contacts from "../pages/Contacts/Contacts";
import {Route, Routes} from "react-router-dom"


function App() {
  return (
    <div className="container_app">
      <header>
        <Header />
      </header> 
      <main>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/catalog" element={<MainFilter />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/select" element={<Select />} />
      </Routes>
      </main>
      <footer>
        <Footer />  
      </footer>
    </div>
  );
}

export default App;
