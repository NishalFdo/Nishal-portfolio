import { Home } from "./pages/Home";

import { NotFound } from "./pages/NotFound";

import { BrowserRouter, Route, Routes } from "react-router-dom";





import { useEffect } from "react";

import AOS from "aos";

import "aos/dist/aos.css";



function App() {

  useEffect(() => {

    AOS.init({ duration: 800, once: false, mirror: true, });

  }, []);



  return (

    <>

      <BrowserRouter>

        <Routes>

          <Route index element={<Home />} />

          <Route path="*" element={<NotFound />} />

        </Routes>

      </BrowserRouter>

    </>

  );

}



export default App;