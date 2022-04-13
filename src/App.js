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

const Global = createGlobalStyle`
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	min-height: 100vh;
`;


const Section = styled.div`
  background-color: whitesmoke;
  align-items: center;
`;


const Footer = styled.div`
  background-color: #cd0f0f;
`;


const headers = {
	headers: {
		'Authorization': '07c443c6-17f3-4271-a8c7-69af5aa2c5f3'
	}
}

export default class App extends React.Component {
	state = {
		cart: [],
		inputSearch: "",
		selectedJobId: "",
		// currentPage: "filters"
		currentPage: "cart"
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
		  localStorage.setItem("cart", JSON.stringify(newCart))
        } 
        else {
            const newCart = this.state.cart.map((serv) => {
             return serv
            })    
            this.setState({cart: newCart})
			localStorage.setItem("cart", JSON.stringify(newCart))
          }		  

		// const newCart = [...this.state.cart, service]
		// this.setState({cart:newCart})
		// localStorage.setItem("cart", JSON.stringify(newCart))
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
			return <Filters  addCart = {this.addCart} />;
		  case "serviceregister":
			return <ServiceRegister />;
			case "cart":
			return <Cart cartFilter = {this.state.cart}
			deleteService = {this.deleteService}
			deleteCart  = {this.deleteCart} 
			choosePageFilters = {this.choosePageFilters} />;
		}
	  }

	render() {
		return (
			<>
				<Global />

				{/* <Header 
				>
					<a href="./components/HomePage"> <img src={Ninja} alt='icon' /> </a>


					<p>LabeNinjas</p>
				</Header> */}

				<Header 
				choosePageHome = {this.choosePageHome} 
				choosePageCart = {this.choosePageCart} 
				/>

				{/* <Section> */}

					{/* <Button>QUERO SER UM NINJA</Button>
					<Button>CONTRATAR UM NINJA</Button> */}
					{/* Aqui tem que colocar a function de renderização das páginas com state */}

					{/* <ServiceRegister />  */}
					{/* <Cart
					cartFilter = {this.state.cart}
					deleteService = {this.deleteService}
					deleteCart  = {this.deleteCart} 
					 /> */}
				{/* </Section> */}
				{/* <Filters
				addCart = {this.addCart}
				 /> */}

				 <Section> {this.renderPage()}</Section>
				
				<Footer>

				</Footer>

			</>
		)
	}
}