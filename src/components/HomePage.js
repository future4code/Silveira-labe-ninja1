import React from "react";
import styled from 'styled-components';
// import Gif from './img/gid.gif'

const MainContainer = styled.div`
  background: linear-gradient(
    to right,
    #dd1818,
    #333333
  );
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
    width: 50px;
    padding-left: 10px;
    padding-top: 6px;
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
        position: relative;
        bottom: 10px;
        }
`

class HomePage extends React.Component {
    render() {
        return (
            <MainContainer>
              {/* <a href="./components/HomePage"> <img src={Gif} alt='icon' /> </a> */}
                <button onClick={(this.props.choosePageFilters)}>CONTRATAR UM NINJA</button>
                <button onClick={(this.props.choosePageService)}>QUERO SER UM NINJA</button>
            </MainContainer>
        )
    }
}

export default HomePage