import * as React from "react";
import classNames from "classnames";

import "./Form.css";

import { Input } from "../Input";
import { InputBlock } from "../InputBlock";

import { Button } from "../Button";
import { useState } from "react";

export const Form = (props, { className }) => {
  let [formState, setFormState] = useState('');

  // function handleValue(event) {
  //   setValue(event.target.value);
  //   console.log(value)
  // }
  function handleChange(event) {
    setFormState(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onSubmit(formState);

    setFormState('')
  }

  return (
    <form className={classNames("search", className)} onSubmit={handleSubmit}>
      <InputBlock className={"search--place"}>
        <Input className="label-left">
          <label htmlFor="hotel">Your destination or hotel name</label>
          <input
            className={classNames("search--name")}
            id="hotel"
            name="place"
            type="text"
            placeholder="New York"
            value={formState}
            onChange={handleChange}
          />
        </Input>
      </InputBlock>
      <InputBlock className={"search--date"}>
        <Input className="label-left">
          <label htmlFor="date-left">Check-in &mdash;</label>
          <input
            type="text"
            placeholder="Tue 15 Sept"
            name="date"
            id="date-left"
          />
        </Input>
        <Input className="label-right">
          <label htmlFor="date-right">Check-out</label>
          <input
            type="text"
            placeholder="Sat 19 Sept"
            name="date"
            id="date-right"
          />
        </Input>
      </InputBlock>
      <InputBlock className={"search--rooms"}>
        <Input className={"label-center adult_after"}>
          <label className="rooms--label" htmlFor="adult">
            Adults
          </label>
          <input placeholder="2" name="adults" id="adult" />
        </Input>
        <Input className={"label-center"}>
          <label className="rooms--label " htmlFor="child">
            Children
          </label>
          <input placeholder="0" name="children" id="child" />
        </Input>
        <Input className={"label-center adult_after"}>
          <label className="rooms--label" htmlFor="room">
            Rooms
          </label>
          <input
            className="room-input"
            placeholder="1 "
            name="rooms"
            id="room"
          />
        </Input>
      </InputBlock>
      <InputBlock className={"search--submit "}>
        <Button
          type={"submit"}
          className={"search--submit_input"}
          name="submit"
        >
          Search
        </Button>
      </InputBlock>
    </form>
  );
};
