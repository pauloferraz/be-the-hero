import React from "react";
import { TextareaStyle } from "./styles";

export default function Input(props) {
  const { placeholder } = props;

  return <TextareaStyle placeholder={placeholder} />;
}
