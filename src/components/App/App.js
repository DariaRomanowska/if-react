import React from "react";
import { Sprite } from "../Sprite";

import { Container } from "../Container";
import { Gallery } from "../Gallery";
import { Header } from "../Header";

import "./App.css";

export const App = () => {
  return (
    <>
      <Sprite />
      <Header />
      <section className="background-homes">
        <Container className="homes">
          <h2>Homes guests love</h2>
          <Gallery />
        </Container>
      </section>
    </>
  );
};
