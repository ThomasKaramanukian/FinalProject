import React from "react";
import LoginButton from "./Login";
import Profile from "./Profile";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import image from "./Assets/karsten.jpg";

const Homepage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  let navigate = useNavigate();
  console.log(user, isAuthenticated);
  if (isAuthenticated) {
    navigate(`/profile`);
  }

  return (
    <>
      <LoginButton />
      <Wrapper style={{ backgroundImage: `url(${image})` }}>
        <Text>
          <Title>
            <h1>MyCellar</h1>
          </Title>
          <Heading>
            <h2>Store, Learn, Enjoy.</h2>
          </Heading>
        </Text>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: no-repeat center/cover;
  background-color: grey;
  height: 100vh;
  width: 100%;
`;

const Text = styled.div`
  display: table;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const Title = styled.div`
  color: #faf9f6;
  margin-bottom: 20px;
  text-align: center;
  font-size: 46px;
  margin-bottom: 40px;
`;

const Heading = styled.div`
  color: #faf9f6;
  text-align: center;
`;

export default Homepage;
