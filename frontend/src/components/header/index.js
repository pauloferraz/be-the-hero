import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../../components";
import imgLogo from "../../assets/logo.svg";
import { FiPower } from "react-icons/fi";
import { HeaderStyle } from "./styles";

export default function Header() {
  const ongName = localStorage.getItem("ongName");
  const history = useHistory();

  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }

  return (
    <HeaderStyle>
      <img src={imgLogo} alt="logo" />
      <span>
        Bem vindo, <strong>{ongName}</strong>{" "}
      </span>

      <Link to="/incidents/new">
        <Button label="Cadastrar novo incidente" marginTop="0px" />
      </Link>
      <button className="logout" onClick={handleLogout}>
        <FiPower size={20} color={"#e02041"} />
      </button>
    </HeaderStyle>
  );
}
