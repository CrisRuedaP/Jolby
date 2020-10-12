import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import Search from "./components/search";
import CardsJolby from "./components/cards";
import Footer from "./components/footer";
import Context from "./context";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="App">
      <Context.Provider>
        <Header />
        <Main />
        <Search />
        <Container fluid="md">
          <CardsJolby />
        </Container>
        <Footer />
      </Context.Provider>
    </div>
  );
}

export default App;
