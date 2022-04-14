import React from "react";
import styled from "styled-components";
import Delete from '../img/delete.png'
import { keyframes, css } from "styled-components";


const CardsContainer = styled.div`
    display: flex;
    column-gap: 4vw;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;    flex-wrap: wrap;
    align-items: center;
    width: 250px;
    min-height: 50vh;
    p {
        text-align: center;
        word-wrap: break-word;
        font-size: 1.5em;
    }
    h3{
        font-size: 1.5em;
    }
    button { 
        background: #4B181C;
        border: 1px solid #4B181C;
        border-radius: 6px;
        box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
        box-sizing: border-box;
        word-wrap: break-word;
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
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        button{
        font-size: 20px;
        padding: 2px 4px;
        min-height: 25px;
        }
        
        }

    button:hover, button:active {
        background-color: initial;
        background-position: 0 0;
        color: #4B181C;
    }

    button:active {
        opacity: .5;    
    }

    img {
        cursor: pointer;
        width: 24px;
        margin-left: auto;
    }   
`

const Description = styled.div`

`
const DivTitle = styled.div`
    min-height: 40vh;
    p {
        text-align: center;
    }
    h3 {
        text-align: center;
    }

`
const rotate = keyframes`
  0%  { transform: translate(2px, 1px)   rotate(0deg);  }
  50% { transform: translate(-10px, 20px)  rotate(-10deg); }
  100%{ transform: translate(1px, -2px)  rotate(-1deg); }
`;

// const Test = styled.button`
// ${(props) => props.shake && css`animation: ${rotate} 0.5s`};

// `


const DivBotoes = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    box-sizing: border-box;
    row-gap: 3px;
    button.shake{
    animation: ${rotate} 10s infinite ;
    
}
/* @keyframes shake {
  0%  { transform: translate(2px, 1px)   rotate(0deg);  }
  50% { transform: translate(-10px, 20px)  rotate(-10deg); }
  100%{ transform: translate(1px, -2px)  rotate(-1deg); }
} */
`





export default class CardService extends React.Component {

    state = {
        description: false,
        // shake: false
    }

    setDisplay = () => {
        let newDescription = !this.state.description
        this.setState({ description: newDescription })
    }



    render() {
        return (
                <CardsContainer key={this.props.job.id}>
                    <img src={Delete} alt="delete" onClick={() => this.props.deleteJob(this.props.job)} />
                    <DivTitle>
                        <h3> {this.props.job.title} </h3>
                        <p><strong>Price: </strong> R$ {this.props.job.price}</p>
                        <p><strong>Deadline: </strong> {this.props.removeTime(this.props.job.dueDate)}</p>
                    </DivTitle>
                    {this.state.description &&
                        <Description id={this.props.job.id}>
                            <p>{this.props.job.description}</p>
                        </Description>}
                    <DivBotoes>
                        <button onClick={() => this.setDisplay(this.props.job)}>Description</button>
                        <button  onClick={() => this.props.addCart(this.props.job)}>Add to Cart</button>
                    </DivBotoes>

                </CardsContainer>
        )
    }
}