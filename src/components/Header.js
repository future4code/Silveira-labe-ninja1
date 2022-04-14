import React from "react";
import styled from 'styled-components';
import Ninja from '../img/ninja.png';
import Carttt from '../img/cart.png';

const MainContainer = styled.div`
  background: #8E0E00;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #1F1C18, #8E0E00);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #1F1C18, #8E0E00); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

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
    width: 4vw;
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