import React, { useState } from "react";
import { useAlert } from "react-alert";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";
import { FiArrowLeft } from "react-icons/fi";
import { Button, Input } from "../../components";
import imgLogo from "../../assets/logo.svg";
import {
  RegisterContainer,
  Content,
  SectionRegister,
  FormRegister
} from "./styles";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  const history = useHistory();
  const alert = useAlert();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    };

    try {
      const response = await api.post("ongs", data);
      alert.success(
        `Cadastro realizado, seu ID de acesso é: ${response.data.id}`,
        {
          onClose: () => {
            history.push("/");
          }
        }
      );
    } catch (error) {
      alert.error("Erro ao cadastrar, tente novamente mais tarde.");
    }
  }

  return (
    <RegisterContainer>
      <Content>
        <SectionRegister>
          <img src={imgLogo} alt="logo" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude as pessoas a
            encontrarem os casos da sua ONG.
          </p>
          <Link to="/">
            <FiArrowLeft size={20} color={"#e02041"} />
            Voltar para logon
          </Link>
        </SectionRegister>
        <FormRegister onSubmit={handleRegister}>
          <Input
            placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Input
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />
          <div>
            <Input
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <Input
              placeholder="UF"
              width="80px"
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>
          <Button type="submit" label="Cadastrar" />
        </FormRegister>
      </Content>
    </RegisterContainer>
  );
}
