import React from "react";
import styled from 'styled-components'

const CartCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 50vw;
    border: 2px solid red;
    background-image: linear-gradient(rgb(255, 115, 115) 20%, #8dc1dd 100%);     
 `


class Cart extends React.Component {

  state = {
    cart: []
  }

  componentDidMount() {
        const cartString = localStorage.getItem("cart")
    if (cartString) {
      const cartObj = JSON.parse(cartString)
      this.setState({ cart: cartObj })
    }
  };

  componentDidUpdate(prevProps) {
    if (this.props.cartFilter !== prevProps.cartFilter) {
      this.setState({ cart: this.props.cartFilter })
    }   
    localStorage.setItem("cart", JSON.stringify(this.state.cart))
  };

  checkout = () => {
    return alert("Thank you. We hope to see you again!")
  }

  


  render() {

    const total = (this.state.cart).reduce((addToken, service) => addToken + service.price, 0)


    const listCart = this.state.cart.map((item) => {
      return (
        <div key={item.id}>
          <p>{item.title}</p>
          <p> R$: {item.price}</p>
          <button onClick={() => this.props.deleteService(item.id)}>X</button>
        </div>

      )
    })

    return (
      <CartCard>
        <hi>Cart</hi>
        {listCart}
        <p>Total: R$: {total} </p>
        <button onClick={(this.props.deleteCart)}>Delete Cart</button>
        {/* <button onClick={(this.keepShopping)}>Go back to Services</button>  PRECISA SABER COMO FAZ A MUDANÇA DE PÁGINAS */}
        <button onClick={(this.props.checkout)}>PROCEED TO CHECKOUT</button>
      </CartCard>
    )
  }
}

export default Cart