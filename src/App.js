import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import Search from "./components/search";
import Cards from "./components/cards";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Search />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
