import React, { useState } from "react";

import "./Header.css";
import { Container } from "../Container";
import { Navigation } from "../Navigation";
import { Form } from "../Form";
import { Hotels } from "../Hotels";
import { AppStore } from "../AppStore";

export const Header = () => {
  const [formData, setFormData] = useState("");
  const handleSubmit = (val) => {
    setFormData(val);
    console.log(val)
    console.log(formData)
  };

  return (
    <header>
      <div className={"main"}>
        <Container className="header">
          <Navigation />
          <h1 className="main-title">
            Discover stays <br />
            to live, work or just relax
          </h1>
          <Form onSubmit={handleSubmit} />
          <AppStore />
        </Container>
      </div>
      <Hotels className={"container homes"} formData={formData} />
    </header>
  );
};
