import React, { useState } from "react";
import CarouselMenu from "./CaruselMenu";
import { ToastContainer, toast } from "react-toastify";
import { translations } from './translate';

const App = () => {
  let [abubarkaytganuser, setAbubarkaytganuser] = React.useState("Azamjon");
  const notify = () => toast.dark(abubarkaytganuser + " sizni kutib qoladi!");

  const [lang,setLang] = useState("en");

  const t = (key)=>{
    return translations[lang][key] || key;
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">My Carousel Menu</h1>
      <CarouselMenu />

      <button onClick={notify}>Notify!</button>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        icon={true}
        limit={3}
        role="alert"
      />
 
      <h2>{t("hello")}</h2>
      <p>{t("welcome")}</p>

      <button onClick={() => setLang("en")}>English</button>
      <button onClick={() => setLang("uz")}>Uzbek</button>
      <button onClick={() => setLang("ru")}>Russian</button>
    </div>
  );
};

export default App;
