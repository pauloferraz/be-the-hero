import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import { FiTrash2 } from "react-icons/fi";
import api from "../../services/api";
import { ContainerProfile } from "./styles";

export default function Profile() {
  const ongId = localStorage.getItem("ongId");
  const alert = useAlert();

  const [incidents, setIncidents] = useState([]);

  async function loadIncidents() {
    const response = await api.get("profile", {
      headers: {
        Authorization: ongId
      }
    });
    setIncidents(response.data);
  }

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      });
      setIncidents(incidents.filter(incident => incident.id !== id));
      alert.success("Incidente deletado");
    } catch (error) {
      alert.error(error.response.data.error);
    }
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <>
      <ContainerProfile>
        <h1>Casos cadastrados</h1>
        <ul>
          {incidents.map(incident => (
            <li key={incident.id}>
              <strong>CASO</strong>
              <p>{incident.title}</p>
              <strong>DESCRIÇÃO</strong>
              <p>{incident.description}</p>

              <strong>VALOR</strong>
              <p>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL"
                }).format(incident.value)}
              </p>

              <button onClick={() => handleDeleteIncident(incident.id)}>
                <FiTrash2 size={20} color={"#a8a8b3"} />
              </button>
            </li>
          ))}
        </ul>
      </ContainerProfile>
    </>
  );
}
