import React from "react";
import { ButtonStyle } from "./styles";

export default function Input(props) {
  const { label, marginTop } = props;
  return <ButtonStyle marginTop={marginTop}>{label}</ButtonStyle>;
}
