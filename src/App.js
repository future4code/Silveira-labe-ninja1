import React from 'react'
import Filters from './components/Filters'
import ServiceRegister from './components/ServiceRegister'
import Cart from './components/Cart'
import HomePage from './components/HomePage'
import axios from 'axios'
import styled, { createGlobalStyle } from 'styled-components'
import Logo from './img/logo.png'
import Ninja from './img/ninja.png'
import Gif from './img/gid.gif'
import Header from './components/Header'
import EmailAndresa from './img/1.png'
import EmailKaren from './img/2.png'
import EmailChristian from './img/3.png'
import EmailDuda from './img/4.png'
import EmailAdernam from './img/5.png'
import Wallpaper from './img/wallpaperfooter.jpg'

const Global = createGlobalStyle`
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	min-height: 100vh;
`;


const Section = styled.div`
  background-color: whitesmoke;
  align-items: center;
  min-height: 80vh;
`;


// const Footer = styled.div`
//   background-color: #cd0f0f;
// `;


const headers = {
	headers: {
		'Authorization': '07c443c6-17f3-4271-a8c7-69af5aa2c5f3'
	}
}

const Footer = styled.div`
  background-image: url(${Wallpaper});
  background-size: cover;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
  div {
      display: flex;
      justify-content: space-around;
    }
    p{
        color:white;
        font-size: 1em;
        font-family: fantasy;
    }
  img {
    border-radius: 20px;
     width: 4vw;
     padding-right: 2px;
  	:hover {
	width: 5vw;
    cursor: pointer;
	box-shadow: red 0px 22px 70px 4px;
    }
}

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            p{
                font-size: 8px;
                word-wrap: break-word;
            }
            
    }
`;

const DivFooter = styled.div `
    display: flex;
    flex-direction:column;
    p {
        text-align: center;
    }
`

export default class App extends React.Component {
	state = {
		cart: [],
		inputSearch: "",
		selectedJobId: "",
		currentPage: "homepage",
		shake: false
	}

	componentDidMount() {
		const savedCart = localStorage.getItem("cart")
		if (savedCart) {
			this.setState({ cart: JSON.parse(savedCart) })
		}
	}

	handleSearch = (event) => {
		this.setState({ inputSearch: event.target.value })
	}

	changePage = (pageName) => {
		this.setState({ currentPage: pageName })
	}

	goToDetailPage = (jobId) => {
		this.setState({ currentPage: "detail", selectedJobId: jobId })
	}

	addCart = (service, id)=> {
 
        const itensCart = this.state.cart.filter((serv) => {
          if (serv.id === service.id) {
            return serv;
          } else {
            return false;
          }      
        })
	
    
        if (itensCart.length === 0) {
          const newCart = [ ...this.state.cart, service]
          this.setState({cart: newCart})
		  localStorage.setItem("cart", JSON.stringify(newCart))
        } 
        else {
            const newCart = this.state.cart.map((serv) => {
             return serv
            })    
            this.setState({cart: newCart})
			localStorage.setItem("cart", JSON.stringify(newCart))
          }		  
		//   if (id !== service.id) {
		//   	this.setState ({shake:!this.state.shake});
		//   }
		//   console.log(id, service.id)
      }
	  					
	  deleteService = (serviceToRemove) => {
		const newCartList = this.state.cart.filter((service) => {
		  return service.id !== serviceToRemove.id
		})
		this.setState({ cart: newCartList })
		localStorage.setItem("cart", JSON.stringify(newCartList))
	  }
	
	  deleteCart = () => {
		this.setState({ cart: [] })
		localStorage.setItem("cart", JSON.stringify([]))
	  }
	

	
	choosePageHome = () => {
		this.setState({ currentPage: "homepage" })
	}

	choosePageFilters = () => {
		this.setState({ currentPage: "filters" })
	}

	choosePageService = () => {
		this.setState({ currentPage: "serviceregister" })
	}

	choosePageCart = () => {
		this.setState({ currentPage: "cart" })
	}



	renderPage = () => {
		switch (this.state.currentPage) {
		  case "homepage":
			return <HomePage
		choosePageFilters = {this.choosePageFilters} 
		choosePageService = {this.choosePageService} 
		/>;
		  case "filters":
			return <Filters  addCart = {this.addCart} 
			shake = {this.state.shake}/>;
		  case "serviceregister":
			return <ServiceRegister />;
			case "cart":
			return <Cart cartFilter = {this.state.cart}
			deleteService = {this.deleteService}
			deleteCart  = {this.deleteCart} 
			choosePageFilters = {this.choosePageFilters} 
			/>;
			
		}
	  }

	render() {
		return (
			<>
				<Global />
				
				<Header 
				choosePageHome = {this.choosePageHome} 
				choosePageCart = {this.choosePageCart} 
				/>

				 <Section> {this.renderPage()}</Section>
				
				 <Footer>
                <p>© 2022 Copyright Labe Ninjas, Inc. All rights reserved.</p>
                <DivFooter>
                    <p><strong>Contact us:</strong></p>
                
                    <div>
                <a href='mailto:karennckubo@gmail.com'><img src={EmailKaren} alt="email da Karen"/></a>
                <a href='mailto:christian-cardeal@hotmail.com'><img src={EmailChristian} alt="email do Christian"/></a>
                <a href='mailto:eduardaloopes2011@hotmail.com'><img src={EmailDuda} alt="email da Duda"/></a>
                <a href='mailto:andresa_15ga@hotmail.com'><img src={EmailAndresa} alt="email da Andresa"/></a>
                <a href='mailto:'><img src={EmailAdernam} alt="email do Adernam"/></a>
                </div>
                </DivFooter>
                </Footer>

			</>
		)
	}
}