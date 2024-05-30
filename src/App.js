import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./Routing/Components/Header";
import Footer from "./Routing/Components/Footer";
import HomeUs from "./Routing/Pages/HomeUs";
import AboutUs from "./Routing/Pages/AboutUs";
import ContactUs from "./Routing/Pages/ContactUs";
import PNF from "./Routing/Pages/PNF";



function App() {
  return (
    <>
      <BrowserRouter>
       <Routes>
         <Route path="/" element={<><Header/><HomeUs/><Footer/></>}></Route>
         <Route path="/aboutus" element={<><Header/><AboutUs/><Footer/></>}></Route>
         <Route path="/contactus" element={<><Header/><ContactUs/><Footer/></>}></Route>
         <Route path="*" element={<><Header/><PNF/><Footer/></>}></Route>
       </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
