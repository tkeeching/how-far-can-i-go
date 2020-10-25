import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import LeafletMap from "./components/LeafletMap";

const App: React.FC = () => {
  return (
    <AppContainer>
      <Header />
      <LeafletMap />
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
