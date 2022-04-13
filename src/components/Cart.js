import React from "react";
import styled from 'styled-components'
import axios from 'axios'

const CartCard = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 50vw;
    background-image: linear-gradient(rgb(255, 115, 115) 20%, #8dc1dd 100%);     
    border: 2px solid #4B181C;
  border-radius: 4px;
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

  componentDidMount() {
        const cartString = localStorage.getItem("cart")
    if (cartString) {
      const cartObj = JSON.parse(cartString)
      this.setState({ cart: cartObj })
    }
  };

  getFilteredJobs = () => {
    const url = 'https://labeninjas.herokuapp.com'
    axios
        .get(`${url}/jobs`, headers)
        .then((response) => {
            this.setState({ cart: response.data.jobs })
        })
        .catch((error) => {
            console.log(error.response.data)
        })
}

  componentDidUpdate(prevProps) {
    if (this.props.cartFilter !== prevProps.cartFilter) {
      this.getFilteredJobs()
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
          <button onClick={() => this.props.deleteService(item)}>X</button>
        </div>

      )
    })

    return (
      <CartCard>
        <h1>Cart</h1>
        {listCart}
        <p>Total: R$: {total} </p>
        <button onClick={(this.props.deleteCart)}>Delete Cart</button>
        <button onClick={(this.props.choosePageFilters)}>Go back to Services</button> 
        <button onClick={(this.checkout)}>PROCEED TO CHECKOUT</button>
      </CartCard>
    )
  }
}

export default Cart