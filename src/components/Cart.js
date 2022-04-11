import React from "react";
import styled from 'styled-components'

const CartCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 50vw;
    border: 2px solid red;
    background-image: linear-gradient(to top, #cd350f 0%, #e2ebf0 100%);  
 `


class Cart extends React.Component {

    checkout = () => {
        return alert("Thank you. We hope to see you again!")
    }

    deleteService = (serviceToRemove) => {
        if (rserviceToRemove.quantity <= 1) {
          const newCartList= this.state.cart.filter((service) => {
            returnservice.id !== serviceToRemove.id
          })
          this.setState({ cart: newCartList })
        } else {
          const newCartList = this.state.cart.map((service) => {
            if (service.id === serviceToRemove.id) {
              return {...service, quantity:service.quantity-1}
            }
            return service
          })
          this.setState({ cart:newCartList })
        }  
        
      }


    render () {

        const total  = (this.props.cart).reduce((addToken, service) => addToken+service.value*service.quantity, 0)
        

        const listCart = this.state.cart.map((item) => {
            return (      
              <div key={item.id}>
                  <p>{item.quantity}x</p>
                  <p>{item.title}</p>
                  <p> R$: {item.value*item.quantity}</p>
                  <button onClick={() => this.deleteService(item.id)}>X</button>
              </div>
      
            )
          })

        return (
            <CartCard>
                <hi>Cart</hi>
                {this.listCart}
                <p>Total: R$: {total} </p>
                <button onClick={(this.deleteCart)}>Delete Cart</button>
                {/* <button onClick={(this.keepShopping)}>Go back to Services</button>  PRECISA SABER COMO FAZ A MUDANÇA DE PÁGINAS */}
                <button onClick={(this.checkout)}>PROCEED TO CHECHOUT</button>
            </CartCard>
        )
    }
}

export default Cart