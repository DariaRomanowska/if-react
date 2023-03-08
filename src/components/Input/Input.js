import React from "react";
import classNames from "classnames";

import './Input.css'

export const Input = ({className, children}) => (
    <div className={classNames('column', '_placeholder', className)}>
        {children}
    </div>
)