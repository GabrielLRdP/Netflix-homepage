import { useState } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import filmsData from "./assets/datas.json";
import image from "./assets/BrandAssets_Logos_01-Wordmark.jpg";

import "./App.css";

function App() {
  let categoryTab = [];

  categoryTab = filmsData.map((element, index) => {
    return <Section title={filmsData[index].category} categoryIndex={index} />;
  });

  return (
    <>
      <div className="container">
        <Header
          src=image
          alt="Logo Netflix"
        />
        {categoryTab}
      </div>
    </>
  );
}

export default App;
