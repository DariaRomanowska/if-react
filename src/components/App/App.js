import React from "react";
import { Container } from "../Container";
import {Gallery} from "../Gallery";


import "./App.css";

export const App = () => {
  return (
    <>
      <section className="background-homes">
        <Container className="homes">
       <h2>Homes guests love</h2>
        <Gallery></Gallery>
        </Container>
      </section>
    </>
  );
};

