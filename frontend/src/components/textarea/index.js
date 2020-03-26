import React from "react";
import { TextareaStyle } from "./styles";

export default function Input(props) {
  const { placeholder, onChange } = props;

  return <TextareaStyle placeholder={placeholder} onChange={onChange} />;
}
