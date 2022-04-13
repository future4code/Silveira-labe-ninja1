import React from "react";
import styled, { createGlobalStyle } from 'styled-components';
import Ninja from './img/ninja.png';

const MainContainer = styled.div`
  background: #333333;
  background: -webkit-linear-gradient(
    to right,
    #dd1818,
    #333333
  );
  background: linear-gradient(
    to right,
    #dd1818,
    #333333
  );

  p {
    font-size: 30px;
    color: white;
    padding-left: 80px;
    padding-top: 0px;
    margin-top: -45px;
    padding-bottom: 8px;
    font-weight: bolder;
  }

  img {
    width: 50px;
    padding-left: 10px;
    padding-top: 6px;
  }
`;



class Header extends React.Component {
    render() {
        return (
            <MainContainer>
                <img src={Ninja} alt='icon' />
                <p>LabeNinjas</p>
         </MainContainer>
        )
    }
}

export default Header