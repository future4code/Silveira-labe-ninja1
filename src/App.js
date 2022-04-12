import React from 'react'
import Signup from './components/Signup'
import Filters from './components/Filters'
// import ServiceRegister from './components/ServiceRegister'
import Cart from './components/Cart'
import axios from 'axios'
import styled, { createGlobalStyle } from 'styled-components'
import Logo from './img/logo.png'
import Ninja from './img/ninja.png'
import Gif from './img/gid.gif'

const Global = createGlobalStyle`
	margin: 0;
	padding: 0;
	box-sizing: border-box;
`
const Header = styled.div`
	background-image: linear-gradient(45deg, #874da2 0%, #c43a30 100%);

	p {
		font-size: 30px;
		color: white;
		padding-left: 80px;
		padding-bottom: 4px;
	}

	img {
		width: 50px;
		padding-left: 5px;
	};
`

const Button = styled.button`
    background-color: rgb(228, 90, 90);
	padding: 6px 16px;
	font-size: 0.875rem;
	min-width: 64px;
	box-sizing: border-box;
	font-weight: 500;
	line-height: 1.75;
	border-radius: 4px;
	letter-spacing: 0.02857em;
	text-transform: uppercase;
`

const Section = styled.div`
	background-color: rgb(255, 250, 250);
	align-items: center;
	
	img {
		padding-left: 300px;
		padding-bottom: 20px;
	}
`

const Footer = styled.div`
	background-color: #cd0f0f;
`

const headers = {
	headers: {
		'Authorization': '07c443c6-17f3-4271-a8c7-69af5aa2c5f3'
	}
}

export default class App extends React.Component {
	state = {
		currentPage: "home",
		cart: [],
		inputSearch: "",
		selectedJobId: ""
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

	addCart = (service) => {
		console.log(service)
 
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
        } 
        else {
            const newCart = this.state.cart.map((serv) => {
             return serv
            })    
            this.setState({cart: newCart})
          }
      }

	  deleteService = (serviceToRemove) => {
		const newCartList = this.state.cart.filter((service) => {
		  return service.id !== serviceToRemove.id
		})
		this.setState({ cart: newCartList })
	
	  }
	
	  deleteCart = () => {
		this.setState({ cart: [] })
	  }
	

	/*choosePage = () => {
		switch (this.state.currentPage) {
			case "home":
				return <HomePage changePage={this.changePage} />
			case "cart":
				return <CartPage changePage={this.changePage} cart={this.state.cart} removeFromCart={this.removeFromCart} clearCart={this.clearCart}/>
			case "detail":
				return <ServiceDetail jobId={this.state.selectedJobId} changePage={this.changePage} cart={this.state.cart}/>
			case "list":
				return <ServicesListPage searchText={this.state.inputSearch} changePage={this.changePage} addToCart={this.addToCart} cart={this.state.cart} goToDetailPage={this.goToDetailPage}/>
			default:
				return <HomePage changePage={this.changePage} />
		}
	}*/

	render() {
		return (
			<>
				<Global />

				<Header>
					<img src={Ninja} alt='icon' />

					<p>LabeNinjas</p>
				</Header>

				<Section>
					{/* <img src={Gif} alt='logo' width ='300px'/> */}

					<Button>QUERO SER UM NINJA</Button>
					<Button>CONTRATAR UM NINJA</Button>
					{/* Aqui tem que colocar a function de renderização das páginas com state */}

					{/* <ServiceRegister />  */}
					<Cart
					cartFilter = {this.state.cart}
					deleteService = {this.deleteService}
					deleteCart  = {this.deleteCart} 
					 />
				</Section>
				<Filters
				addCart = {this.addCart}
				 />
				
				<Footer>

				</Footer>

			</>
		)
	}
}