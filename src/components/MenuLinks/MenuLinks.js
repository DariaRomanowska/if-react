import React from "react";

import './MenuLinks.css'
import {Button} from "../Button";

export const MenuLinks = () => (
    <div className={'navigation--links'}>
        <Button href={"#"}>Stays</Button>
        <Button href={"#"}>Attractions</Button>
    </div>
)
