import React from "react";
import styled from 'styled-components';
import Gif from '../img/gidd.gif'

const MainContainer = styled.div`
  background-color: whitesmoke;

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
    width: 24vw;
    padding-left: 38vw;
    padding-top: 5px;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
      width: 60vw;
    }

    @media screen and (max-device-width : 770px) {
      width: 50vw;
    }

    @media screen and (max-device-width : 820px) {
      width: 40vw;
    }

    @media screen and (max-device-width : 1070px) {
      width: 30vw;
    }
  };
  button { 
        background: #4B181C;
        border: 1px solid #4B181C;
        border-radius: 6px;
        box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
        box-sizing: border-box;
        color: #FFFFFF;
        cursor: pointer;
        display: inherit;
        align-items: inherit;
        justify-content: inherit;
        font-family: nunito,roboto,proxima-nova,"proxima nova",sans-serif;
        font-size: 16px;
        font-weight: 800;
        min-height: 40px;
        outline: 0;
        margin-left: 40vw;
        margin-top: 1.2vw;
        padding: 8px 10px;
        text-align: center;
        text-rendering: geometricprecision;
        text-transform: none;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        vertical-align: middle;
        position: relative;
        bottom: 10px;

        :hover {
          background-color: #802d34;
        }

      @media screen and (min-device-width : 320px) and (max-device-width : 478px) {
        display: inherit;
        margin-left: 0.5vw;
        margin-top: 2vw;

        :hover{
          background-color: #802d34;
        }
        
      }

    @media screen and (max-device-width : 615px) {
      display: inherit;
      margin-left: 22vw;
      margin-top: 6vw;
      
      :hover{
          background-color: #802d34;
        }
    }
}
`

class HomePage extends React.Component {
    render() {
        return (
            
            <MainContainer>
              { <a href="./components/HomePage"> <img src={Gif} alt='icon' /> </a> }
                <button onClick={(this.props.choosePageFilters)}>CONTRATAR UM NINJA</button>
                <button onClick={(this.props.choosePageService)}>QUERO SER UM NINJA</button>
            </MainContainer>
        )
    }
}

export default HomePage