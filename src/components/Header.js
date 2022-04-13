import React from "react";
import styled from 'styled-components';
import Ninja from '../img/ninja.png';
import Carttt from '../img/cart.png';

const MainContainer = styled.div`
  background-color: #730D15;
`

const HeaderFlex = styled.div`
flex-direction: row;
display: flex;
justify-content: space-between;
`

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`

const DivIcons = styled.div `
display: flex;
    img {
    width: 5vw;
    padding-top: 6px;
  };

  p {
    font-size: 30px;
    color: white;
    font-weight: bolder;   

  };

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    p {
    font-size: 15px;
  }
  }
`

class Header extends React.Component {
    render() {
        return (
            <MainContainer>
                <HeaderFlex>
                    <DivIcons>
                        <Button><img src={Ninja} alt="icon" onClick={this.props.choosePageHome} /></Button>
                        <p>LabeNinjas</p>
                    </DivIcons>
                    
                    <DivIcons>
                        <Button><img src={Carttt} alt="icon" onClick={this.props.choosePageCart} /></Button>
                    </DivIcons>
                </HeaderFlex>
            </MainContainer>
        )
    }
}

export default Header