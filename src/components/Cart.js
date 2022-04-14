import React from "react";
import styled from 'styled-components'
import axios from 'axios'

const CartCard = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 50vw;
    background-image: linear-gradient(125deg, rgba(219, 203, 203, 0), rgb(229, 163, 163));  
    border: 2px solid #4B181C;
    border-radius: 4px; 

        h1, p1 {
          text-align: center;
          font-family: "TFutura";
          ;
        }
        p1 {
          font-size: large;
          font-weight: bold;
        };
        p {
          font-size: large;
          flex-direction: row;
    display: flex;
    justify-content: space-between;
        }
 `
const DivdoTable = styled.div`
  display: flex;
 
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
        h3 {
          width: 30vw;
          word-wrap: break-word;
        }
        p{
          width: 10vw;
        }
        
 `
const Buttons = styled.div`
 button { 
    /* background-image: linear-gradient(125deg, rgba(219, 203, 203, 0), rgb(229, 163, 163));  */
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    padding : 10px
 }
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

const table = styled.div`
  width: 100%;
`

const headers = {
  headers: {
    'Authorization': '07c443c6-17f3-4271-a8c7-69af5aa2c5f3'
  }
}


class Cart extends React.Component {

  state = {
    cart: []
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
    return alert("Thank you. We hope to see you again!")
  }




  render() {

    const total = (this.props.cartFilter).reduce((addToken, service) => addToken + service.price, 0)
    /* tr é table-row, th e td */

    const listCart = this.props.cartFilter.map((item) => {
      return (

        <DivdoTable key={item.id}>
          <tr>
            <th><It><h3>{item.title}</h3></It></th>

            <th><p> R$: {item.price} </p></th>

            <th><button onClick={() => this.props.deleteService(item)}>X</button> </th>
          </tr>
        </DivdoTable>

      )
    })

    return (
      <CartCard>
        <h1>Cart</h1>
        <table>
          {listCart}
        </table>
        <p1>Total: R$ {total} </p1>
        <Buttons>
          <button onClick={(this.checkout)}>PROCEED TO CHECKOUT</button>
          <button onClick={(this.props.deleteCart)}>Delete Cart</button>
          <button onClick={(this.props.choosePageFilters)}>Keep Shopping</button>
        </Buttons>
      </CartCard>
    )
  }
}

export default Cart