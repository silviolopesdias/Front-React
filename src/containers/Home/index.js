import React, { useState, useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import People from "../../assets/peoples.svg";
import Arrow from "../../assets/arrow.svg";
import H1 from "../../components/Title";
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/Button";

import { Container, Image, InputLabel, Input } from "./styles";

function App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const history = useHistory();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);

    history.push("/usuarios");
  }

  return (
    <Container>
      <Image alt="imagem-logo" src={People} />

      <ContainerItens>
        <H1> Olá! </H1>
        <InputLabel>Name</InputLabel>
        <Input ref={inputName} placeholder="Name" />

        <InputLabel>Age</InputLabel>
        <Input ref={inputAge} placeholder="Age" />

        <Button onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Arrow} />
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default App;
