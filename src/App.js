import React from "react";
import "./App.css";
import styled from "styled-components";
import { MyForm } from "./Form/MyForm";

const AppContainer = styled.div`
  height: 100%;
  overflow: hidden;
`;

function App() {
  return (
    <>
      <AppContainer>
        <MyForm />
      </AppContainer>
    </>
  );
}

export default App;
