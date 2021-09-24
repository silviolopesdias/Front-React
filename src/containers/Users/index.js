import React, { useState, useEffect } from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom'

import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trash.svg";
import Avatar from "../../assets/avatar.svg";
import H1  from "../../components/Title";
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/Button"


import { Container, Image, User } from "./styles";


function Users() {
  const [users, setUsers] = useState([]);
  const history = useHistory()

  useEffect(() => {
    async function fetchUsers() {
      const { data: allUsers } = await axios.get("http://localhost:3001/users");

      setUsers(allUsers);
    }
    fetchUsers();
  }, []);

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`);
    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers);
  }

  function goBackPage(){
    history.push('/')
  }

  return (
    <Container>
      <Image alt="imagem-avatar" src={Avatar} />

      <ContainerItens isBlur={true}>
        <H1> Usuários </H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="lata-de-lixo" />
              </button>
            </User>
          ))}
        </ul>
        <Button  isBack={true} onClick={goBackPage}>
          <img alt="seta" src={Arrow} /> Voltar
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default Users;
