import React from "react";
import { InputStyle } from "./styles";

export default function Input(props) {
  const { placeholder, width, onChange } = props;

  return (
    <InputStyle
      type="text"
      placeholder={placeholder}
      width={width}
      onChange={onChange}
    />
  );
}
