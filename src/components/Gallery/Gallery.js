import React from "react";
import {contents} from "./config";
import { Content } from "../Content";
import classNames from "classnames";

import "./Gallery.css";

export const Gallery = (className) => (
  <div className={classNames("homes--gallery", className)}>
      {contents.map((data) => (
          <Content key={data.id} {...data} />
      ))}
  </div>
);


console.log(contents)