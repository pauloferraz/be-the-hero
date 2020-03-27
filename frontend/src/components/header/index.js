import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { Button } from "../../components";
import imgLogo from "../../assets/logo.svg";
import { FiPower } from "react-icons/fi";
import { HeaderStyle } from "./styles";

export default function Header({ toggleTheme }) {
  // const { toggleTheme } = props;
  const ongName = localStorage.getItem("ongName");
  const history = useHistory();
  const { title } = useContext(ThemeContext);

  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }

  return (
    <HeaderStyle>
      <div>
        <img src={imgLogo} alt="logo" />
        <span>
          Bem vindo(a), <strong>{ongName}</strong>
        </span>
      </div>

      <Switch
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={20}
        width={40}
        handleDiameter={20}
        onColor={"#fbfbfb"}
        offColor={"#bbb"}
        onHandleColor={"#dddddd"}
        offHandleColor={"#666"}
      />

      <div>
        <Link to="/incidents/new">
          <Button label="Cadastrar novo incidente" marginTop="0px" />
        </Link>
        <button className="logout" onClick={handleLogout}>
          <FiPower size={20} color={"#e02041"} />
        </button>
      </div>
    </HeaderStyle>
  );
}
