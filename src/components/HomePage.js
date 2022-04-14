import React from "react";
import styled from 'styled-components';
import LogoHome from '../img/NinjaHome.png'

const MainContainer = styled.div`
  background: linear-gradient(to right, #dd1818, #333333);
  height: 89.4vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  p {
    font-size: 30px;
    color: white;
    padding-left: 80px;
    padding-top: 10px;
    margin-top: -45px;
    padding-bottom: 8px;
    font-weight: bolder;
  };
  img {
    width: 600px;
  };
  button { 
        background: #4B181C;
        border: 1px solid #4B181C;
        border-radius: 6px;
        box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
        box-sizing: border-box;
        color: #FFFFFF;
        cursor: pointer;
        display: inline-block;
        font-family: nunito,roboto,proxima-nova,"proxima nova",sans-serif;
        font-size: 16px;
        font-weight: 800;
        min-height: 40px;
        outline: 0;
        padding: 8px 10px;
        text-align: center;
        text-rendering: geometricprecision;
        text-transform: none;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        vertical-align: middle;
        /* position: relative; */
        bottom: 10px;
        }
`

const DivImg = styled.div`
  margin-top: 20px;
`

const DivBtn = styled.div`
  display: flex;
  gap: 10px;
`

class HomePage extends React.Component {
  render() {
    return (
      <MainContainer>
        <DivImg>
          <a href="./components/HomePage"> <img src={LogoHome} alt='icon' /> </a>
        </DivImg>
        <DivBtn>
          <button onClick={(this.props.choosePageFilters)}>CONTRATAR UM NINJA</button>
          <button onClick={(this.props.choosePageService)}>QUERO SER UM NINJA</button>
        </DivBtn>
      </MainContainer>
    )
  }
}

export default HomePage