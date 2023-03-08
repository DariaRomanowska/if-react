import React from "react";
import classNames from "classnames";

import './InputBlock.css'

export const InputBlock = ({ children, className }) => (
    <div className={classNames('_input-block','row', className)}>{ children }</div>
)