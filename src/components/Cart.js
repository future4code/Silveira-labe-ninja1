import React from "react";
import styled from 'styled-components'
import axios from 'axios'
import Gif from '../img/check.gif'

const CartCard = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 80vw;
    background-image: linear-gradient(125deg, rgba(219, 203, 203, 0), rgb(229, 163, 163));  
    border: 2px solid #4B181C;
    border-radius: 4px; 

        h1, p1 {
          text-align: center;    
          font-family: "TFutura";   
          
        }
        p1 {
          font-size: large;
          font-weight: bold;
        };
        p {
          font-size: large;
          flex-direction: row;

        }

        @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            display: flex;
            justify-content: center;
            width: 95vw;

                   
    }
        
 `

 const Table = styled.div `
    tr {
      width: 80vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    }
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
          tr{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 95vw;

          }
                      
    }
 `
const DivdoTable = styled.div`
  display: flex;


   button { 
        margin-right: 3px;
        justify-self: flex-end;
        background: #4B181C;
        border: 1px solid #4B181C;
        border-radius: 6px;
        box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
        box-sizing: border-box;
        color: #FFFFFF;
        cursor: pointer;
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
        };
        h3 {
          width: 45vw;
          word-wrap: break-word;
        }
        p{
          width: 25vw;
          word-wrap: break-word;

        }
        @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            display: flex;
            flex-direction: column;
            align-items: center;   
            h3 {
              font-size: 15px;
              word-wrap: break-word;
              width: 100px;
            }
            p{
              font-size: 15px;
              word-wrap: break-word;
              width: 100px;

            }
    }   
 `

const Buttons2 = styled.div`
    display: flex;
    justify-content: space-between;
    color: #FFFFFF;
        
`
const Buttons3 = styled.button`
background: #4B181C;
        border: 1px solid #4B181C;
        border-radius: 4px;
        box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
        box-sizing: border-box;
        color: white;
        padding: 8px 10px;
        cursor: pointer;  

`

const Buttons = styled.div`
 button { 
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    padding : 10px    
 }

        
 button { 
        justify-content: flex-end;
        background: #4B181C;
        border: 1px solid #4B181C;
        border-radius: 6px;
        box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
        box-sizing: border-box;
        color: #FFFFFF;
        cursor: pointer;
        display: inline-block;
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
        };

 `

const CartFlex = styled.div`
flex-direction: row;
display: flex;
justify-content: space-between;        
`

const It = styled.div`
padding : 10px;
width: 30vw;
text-align: start;
 p{ 
  word-wrap: break-word;
 } 
`

const GifDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    button { 
        justify-content: flex-end;
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
        };
       
`


const headers = {
  headers: {
    'Authorization': '07c443c6-17f3-4271-a8c7-69af5aa2c5f3'
  }
}


class Cart extends React.Component {

  state = {
    cart: [],
    checkoutState: false
  }

  // componentDidMount() {
  //   const cartString = localStorage.getItem("cart")
  //   if (cartString) {
  //     const cartObj = JSON.parse(cartString)
  //     this.setState({ cart: cartObj })
  //   }
  // };


  // componentDidUpdate(prevProps) {
  //   if (this.props.cartFilter !== prevProps.cartFilter) {
  //     this.setState({cart: this.props.cartFilter})
  //   }
  //   localStorage.setItem("cart", JSON.stringify(this.state.cart))
  // };

  checkout = () => {
    // return alert(<img src={Gif} alt='gif' width='100px'/>)
    // return <img src={Gif} alt='gif' width='100px'/>
   this.setState({checkoutState: !this.state.checkoutState})
  }




  render() {

    const total = (this.props.cartFilter).reduce((addToken, service) => addToken + service.price, 0)

    const listCart = this.props.cartFilter.map((item) => {
      return (

        <DivdoTable key={item.id}>
          <tr>
            
            <th><It><h3>{item.title}</h3></It></th>
            
            
            <th><p> R$: {item.price} </p></th>
            
            
            <th><button onClick={() => this.props.deleteService(item)}>X</button></th>
            
          </tr>
        </DivdoTable>

      )
    })
    switch (this.state.checkoutState) {
      case true:
          return (
              <GifDiv>
                  <img src={Gif} alt='gif' width = "400vw"/>
                  <button onClick={(this.checkout)}>Go back to Cart</button>
              </GifDiv>
          )
      case false:
    return (
      <CartCard>
        <h1>Cart</h1>
        <Table>
          {listCart}
        </Table>
        <p1>Total: R$ {total} </p1>
        <Buttons2>
          <Buttons3 onClick={(this.checkout)}>PROCEED TO CHECKOUT</Buttons3>
          <Buttons3 onClick={(this.props.deleteCart)}>DELETE CART</Buttons3>
          <Buttons3 onClick={(this.props.choosePageFilters)}>KEEP SHOPPING</Buttons3>
        </Buttons2>
      </CartCard>
    )
    }
  }
}

export default Cart