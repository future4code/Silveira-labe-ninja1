import React from 'react'
import Signup from './components/Signup'
import Filters from './components/Filters'
import ServiceRegister from './components/ServiceRegister'
import axios from 'axios'
import styled, { createGlobalStyle } from 'styled-components'
import Logo from './img/logo.png'
import Ninja from './img/ninja.png'

const Global = createGlobalStyle`
	margin: 0;
	padding: 0;
	box-sizing: border-box;
`
const Header = styled.div`
	background-color: #cd0f0f;
	

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
    background-image: red;
   
`

const Section = styled.div`
	background-color: whitesmoke;
`

const Footer = styled.div`
	background-color: #cd0f0f;
`

const headers = {
    headers: {
    'Authorization' : '07c443c6-17f3-4271-a8c7-69af5aa2c5f3'
    }
    }

function App() {
	return (
		<>
			<Global />

			<Header>
				<img src={Ninja} alt='icon'/>

				<p>LabeNinjas</p>
			</Header>

			<Section>		
				<img src={Logo} alt='logo'/>

				<Button>QUERO SER UM NINJA</Button>
				<Button>CONTRATAR UM NINJA</Button>
				{/* Aqui tem que colocar a function de renderização das páginas com state */}
				<Filters/>
				<ServiceRegister /> 
			</Section>
			
			<Footer>
			
			</Footer>

		</>
	)
}

export default App
