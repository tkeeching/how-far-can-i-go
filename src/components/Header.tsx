import React from "react";
import styled from "styled-components";

const Header: React.FC = () => <Title>How far can I go?</Title>;

export default Header;

const Title = styled.h1`
  text-align: center;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`