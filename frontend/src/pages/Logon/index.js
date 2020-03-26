import React, { useState } from "react";
import { useAlert } from "react-alert";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";
import { FiLogIn } from "react-icons/fi";
import { Input, Button } from "../../components";
import imgLogo from "../../assets/logo.svg";
import heroesImg from "../../assets/heroes.png";
import { LogonContainer, SectionFormLogon } from "./styles";

export default function Logon() {
  const [id, setId] = useState("");

  const history = useHistory();
  const alert = useAlert();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("sessions", { id });
      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);
      history.push("/profile");
    } catch (error) {
      alert.error(error.response.data.error);
    }
  }

  return (
    <LogonContainer>
      <SectionFormLogon>
        <img src={imgLogo} alt="logo" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <Input
            placeholder="Digite seu ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <Button type="submit" label="Entrar" />

          <Link to="/register">
            <FiLogIn size={20} color={"#e02041"} />
            Não tenho cadastro
          </Link>
        </form>
      </SectionFormLogon>

      <img src={heroesImg} alt="heroes" />
    </LogonContainer>
  );
}
