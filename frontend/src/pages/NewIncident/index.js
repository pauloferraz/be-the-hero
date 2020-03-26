import React, { useState } from "react";
import { useAlert } from "react-alert";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";
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
  const ongId = localStorage.getItem("ongId");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(null);

  const history = useHistory();
  const alert = useAlert();

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value
    };

    try {
      const response = await api.post("incidents", data, {
        headers: {
          Authorization: ongId
        }
      });

      history.push("/profile");
      alert.success("Cadastrado com sucesso!");
    } catch (error) {
      alert.error("Erro ao cadastrar, tente novamente mais tarde.");
    }
  }

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
          <FormNewIncident onSubmit={handleNewIncident}>
            <Input
              placeholder="Título do caso"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <Textarea
              placeholder="Descrição"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <Input
              placeholder="Valor em reais"
              value={value}
              onChange={e => setValue(e.target.value)}
            />
            <Button type="submit" label="Cadastrar" />
          </FormNewIncident>
        </Content>
      </NewIncidentContainer>
    </>
  );
}
