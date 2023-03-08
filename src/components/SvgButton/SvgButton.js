import React from "react";
import { Button } from "../Button";
import { Login, Mode } from "../icons";

export const SvgButton = () => (
  <div>
    <Button className={"navigation--mode"} type={"button"}>
      <Mode />
    </Button>
    <Button className={"navigation--login"} type={"button"}>
      <Login />
    </Button>
  </div>
);
