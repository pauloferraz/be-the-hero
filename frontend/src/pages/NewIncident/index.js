import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Button, Input, Textarea } from "../../components";
import imgLogo from "../../assets/logo.svg";
import {
  NewIncidentContainer,
  Content,
  SectionNewIncident,
  FormNewIncident
} from "./styles";

export default function NewIncident() {
  return (
    <>
      <NewIncidentContainer>
        <Content>
          <SectionNewIncident>
            <img src={imgLogo} alt="logo" />
            <h1>Cadastrar novo caso</h1>
            <p>
              Descreva o caso detalhadamente para encontrar um novo herói para
              resolver isso.
            </p>
            <Link to="/profile">
              <FiArrowLeft size={20} color={"#e02041"} />
              Voltar para casos
            </Link>
          </SectionNewIncident>
          <FormNewIncident>
            <Input placeholder="Título do caso" />
            <Textarea placeholder="Descrição" />
            <Input placeholder="Valor em reais" />
            <Button type="submit" label="Cadastrar" />
          </FormNewIncident>
        </Content>
      </NewIncidentContainer>
    </>
  );
}
