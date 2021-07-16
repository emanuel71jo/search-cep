import { useState } from "react";

import { Container, Form, Header } from "./styles";

function App() {
  const [data, setData] = useState({
    cep: "",
    complemento: "",
    bairro: "",
    localidade: "",
    uf: "",
    logradouro: "",
  });

  function handleTextChange(event, field) {
    setData((oldValue) => ({
      ...oldValue,
      [field]: event.target.value,
    }));
  }

  function handleSearch() {
    fetch(`https://viacep.com.br/ws/${data.cep}/json/`)
      .then((response) => response.json())
      .then(setData);
  }

  return (
    <Container>
      <Header>
        <input
          id="cep"
          type="text"
          placeholder="Insira o CEP"
          value={data.cep}
          onChange={(event) => handleTextChange(event, "cep")}
        />
        <button
          disabled={data.cep.split("").length !== 8}
          type="button"
          onClick={handleSearch}
        >
          Pesquisar
        </button>
      </Header>
      <Form>
        <div>
          <label htmlFor="localidade">Cidade</label>
          <input
            id="localidade"
            type="text"
            placeholder="Cidade"
            value={data.localidade}
            onChange={(event) => handleTextChange(event, "localidade")}
          />

          <label htmlFor="logradouro">Endereço</label>
          <input
            id="logradouro"
            type="text"
            placeholder="Endereço"
            value={data.logradouro}
            onChange={(event) => handleTextChange(event, "logradouro")}
          />

          <label htmlFor="complemento">Complemento</label>
          <input
            id="complemento"
            type="text"
            placeholder="Complemento"
            value={data.complemento}
            onChange={(event) => handleTextChange(event, "complemento")}
          />
        </div>
        <div>
          <label htmlFor="bairro">Bairro</label>
          <input
            id="bairro"
            type="text"
            placeholder="Bairro"
            value={data.bairro}
            onChange={(event) => handleTextChange(event, "bairro")}
          />

          <label htmlFor="uf">UF</label>
          <input
            id="uf"
            type="text"
            placeholder="UF"
            value={data.uf}
            onChange={(event) => handleTextChange(event, "uf")}
          />
        </div>
      </Form>
    </Container>
  );
}

export default App;
