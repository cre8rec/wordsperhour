import React from "react";
import styled from "styled-components";
import { logIn } from '../Components/useAuth'




const LoginButton = styled.div`
  float: right;
  cursor: pointer;
  height: 100px;
  position: absolute;
  top: 0px;
  right: 40px;
`;



export const Login = () => {
  return (

  
    <LoginButton onClick = {logIn}>
    
      <h4>login / signup</h4> 
    </LoginButton>
    


    

  );
};

