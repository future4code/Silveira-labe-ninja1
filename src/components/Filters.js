import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Delete from '../img/delete.png'
import Giff from '../img/gif.gif'
import CardService from './CardSevice'


const MainContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    row-gap: 5vh;

`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 40px;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            display: flex;
            flex-direction: column;
            align-items: center;
            
    }
        

`

const H2 = styled.h2`
    color: #4B181C;
    font-size: 30px;
    text-shadow: 0 1px 0 #ccc,
                 0 2px 0 #c9c9c9,
                 0 3px 0 #bbb,
                 0 4px 0 #b9b9b9,
                 0 5px 0 #aaa,
                 0 6px 1px rgba(0,0,0,.1),
                 0 0 5px rgba(0,0,0,.1),
                 0 1px 3px rgba(0,0,0,.3),
                 0 3px 5px rgba(0,0,0,.2),
                 0 5px 10px rgba(0,0,0,.25),
                 0 10px 10px rgba(0,0,0,.2),
                 0 20px 20px rgba(0,0,0,.15);
`
const Input = styled.input`
    border: 2px solid #4B181C;
    border-radius: 4px;
    padding: 10px;
	margin: 0 auto;
	border-radius: 50px;
	text-transform: uppercase;
	background: linear-gradient(to right, whitesmoke, #D1B8B8 );
	cursor: pointer;
    
`

const P = styled.p`
display: flex;
justify-content: center;
color: #4B181C;
text-shadow: 4px 3px 0px #fff, 9px 8px 0px rgba(0,0,0,0.15);
font-size: 17px;
color: #4B181C;
`

const Ordering = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 7px;
    margin-right: 70px;
    color: #4B181C;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 60px;
        margin-bottom: 70px;
        margin-left: 60px;
}

`

const Divh2 = styled.div`
    padding-left: 40px;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        padding: 0;
    }
`

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
const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 15px;
    column-gap: 15px;
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
const DivBotoes = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    box-sizing: border-box;
    row-gap: 3px;
`
const GifDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    padding: 20vh;
`


const headers = {
    headers: {
        'Authorization': '07c443c6-17f3-4271-a8c7-69af5aa2c5f3'
    }
}



export default class Filters extends React.Component {
    state = {
        minFilter: "",
        maxFilter: "",
        searchFilter: "",
        ordering: "",
        jobs: [],
        cart: [],
        description: false,
        loading: true
    }

    componentDidMount() {
        this.getAllJobs()
        setTimeout(() => { this.setState({ loading: false }) }, 1000);
        const orderingString = localStorage.getItem("ordering")
        const minString = localStorage.getItem("min")
        const maxString = localStorage.getItem("max")
        const searchString = localStorage.getItem("search")
        if (orderingString) {
            const orderingObj = JSON.parse(orderingString)
            this.setState({ ordering: orderingObj })
        }
        if (minString) {
            const minObj = JSON.parse(minString)
            this.setState({ minFilter: minObj })
        }
        if (maxString) {
            const maxObj = JSON.parse(maxString)
            this.setState({ maxFilter: maxObj })
        }
        if (searchString) {
            const searchObj = JSON.parse(searchString)
            this.setState({ searchFilter: searchObj })
        }
    };

    componentDidUpdate(prevProps) {
        localStorage.setItem("ordering", JSON.stringify(this.state.ordering))
        localStorage.setItem("min", JSON.stringify(this.state.minFilter))
        localStorage.setItem("max", JSON.stringify(this.state.maxFilter))
        localStorage.setItem("search", JSON.stringify(this.state.searchFilter))
    };


    getAllJobs = () => {
        const url = 'https://labeninjas.herokuapp.com'
        axios
            .get(`${url}/jobs`, headers)
            .then((response) => {
                this.setState({ jobs: response.data.jobs })
            })
            .catch((error) => {
                console.log(error.response.data)
            })
    }


    deleteJob = (job) => {
        const url = 'https://labeninjas.herokuapp.com'
        if (window.confirm(`Do you really want to delete this job?`)) {
            axios
                .delete(`${url}/jobs/${job.id}`, headers)
                .then((response) => {
                    let newJobs = [...this.state.jobs];
                    const findIndex = newJobs.findIndex((jb) => {
                        return jb.title === job.title
                    });
                    newJobs.splice(findIndex, 1);
                    this.setState({
                        jobs: newJobs
                    })
                    alert(`Job deleted successfully!`)
                })
                .catch((error) => {
                    alert(error.response.data)
                })
        }
    }



    onChangeMinFilter = (event) => {
        this.setState({ minFilter: event.target.value })
    }

    onChangeMaxFilter = (event) => {
        this.setState({ maxFilter: event.target.value })
    }

    onChangeSearchFilter = (event) => {
        this.setState({ searchFilter: event.target.value })
    }

    onChangeOrdering = (event) => {
        this.setState({ ordering: event.target.value })
    }





    removeTime = (dateString) => {
        const date = new Date(dateString)
        return `${date.getFullYear()} - ${date.getMonth() + 1} - ${date.getDate()}`
    }

    render() {

        const filteredServices = this.state.jobs.filter((job) => {
            return (job.title.toLowerCase().includes(this.state.searchFilter.toLowerCase())) || job.description.toLowerCase().includes(this.state.searchFilter.toLowerCase())
        }).filter(job => {
            return this.state.minFilter === "" || this.state.minFilter <= job.price
        }).filter(job => {
            return this.state.maxFilter === "" || this.state.maxFilter >= job.price
        }).sort((a, b) => {
            switch (this.state.ordering) {
                case "Titulo":
                    return a.title - b.title
                case "Valor da Remuneração":
                    return a.price - b.price
                case "Prazo":
                    return a.dueDate.localeCompare(b.dueDate)
                default:
                    return a.title - b.title
            }
        }).map((job) => {
            return (
                <CardService key={job.id}
                    job={job}
                    deleteJob={this.deleteJob}
                    removeTime={this.removeTime}
                    addCart={this.props.addCart}
                    shake={this.props.shake}
                    id = {job.id}

                />
            )
        })

        switch (this.state.loading) {
            case true:
                return (
                    <GifDiv>
                        <img src={Giff} alt='gif' width='100px' />
                    </GifDiv>
                )
            case false:
                return (
                    <MainContainer>
                        <FilterContainer>
                            <Divh2>
                                <H2>Filtros</H2>
                            </Divh2>
                            <div>
                                <P><b>Valor Mínimo:</b></P>
                                <Input
                                    type='number'
                                    value={this.state.minFilter}
                                    onChange={this.onChangeMinFilter}
                                />
                            </div>

                            <div>
                                <P><b>Valor Máximo:</b></P>
                                <Input
                                    type="number"
                                    value={this.state.maxFilter}
                                    onChange={this.onChangeMaxFilter}
                                />
                            </div>

                            <div>
                                <P><b>Busca:</b></P>
                                <Input
                                    type="text"
                                    value={this.state.searchFilter}
                                    onChange={this.onChangeSearchFilter}
                                />
                            </div>


                            <Ordering className="ordering">
                                <p><b>Ordenar por:</b></p>
                                <select
                                    value={this.state.ordering}
                                    onChange={this.onChangeOrdering}

                                >
                                    <option value="Titulo">Titulo</option>
                                    <option value="Valor da Remuneração">Valor da remuneracao</option>
                                    <option value="Prazo">Prazo</option>
                                </select>
                            </Ordering>



                        </FilterContainer>

                        <Cards>
                            {filteredServices}
                        </Cards>

                    </MainContainer>
                )
        }
    }
}

