import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Delete from '../img/delete.png'
import Gif from '../img/gif.gif'


const MainContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;

`
const FilterContainer = styled.div`

`

const CardsContainer = styled.div`
    display: flex;
    row-gap: 10px;
    column-gap: 10px;
    flex-direction: column;
    border: 2px solid black;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 15vw;
    p {
        text-align: center;
        word-wrap: break-word;
    }
    button { 
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
        line-height: 16px;
        min-height: 40px;
        outline: 0;
        padding: 12px 14px;
        text-align: center;
        text-rendering: geometricprecision;
        text-transform: none;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        vertical-align: middle;
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

`

const Description = styled.div`

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
        setTimeout(() => {this.setState({loading: false}) }, 1000);
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

    setDisplay = (job) => {
        let newDescription = !this.state.description
        this.setState({ description: newDescription })
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
                case "Valor da Remuneracao":
                    return a.price - b.price
                case "Prazo":
                    return a.dueDate.localeCompare(b.dueDate)
                default:
                    return a.title - b.title
            }
        }).map(job => {
            return (
                <CardsContainer key={job.id}>
                    <img src={Delete} alt="delete" onClick={() => this.deleteJob(job)} />
                    <h3> {job.title} </h3>
                    <p><strong>Price: </strong> {job.price}</p>
                    <p><strong>Deadline: </strong> {this.removeTime(job.dueDate)}</p>
                    {this.state.description &&
                        <Description id={job.id}>
                            <p>{job.description}</p>
                        </Description>}
                    <button onClick={() => this.setDisplay(job)}>Description</button>
                    <button onClick={() => this.props.addCart(job)}>Add to Cart</button>


                </CardsContainer>
            )
        })

        switch (this.state.loading) {
            case true:
                return (
                    <div>
                         <img src={Gif} alt='gif' width ='300px'/>
                    </div>
                )
            case false:
                return (
                    <MainContainer>
                        <FilterContainer>
                            <h2>Filtros</h2>

                            <div>
                                <p>Valor minimo:</p>
                                <input
                                    type='number'
                                    value={this.state.minFilter}
                                    onChange={this.onChangeMinFilter}
                                />
                            </div>

                            <div>
                                <p>Valor maximo:</p>
                                <input
                                    type="number"
                                    value={this.state.maxFilter}
                                    onChange={this.onChangeMaxFilter}
                                />
                            </div>

                            <div>
                                <p>Busca:</p>
                                <input
                                    type="text"
                                    value={this.state.searchFilter}
                                    onChange={this.onChangeSearchFilter}
                                />
                            </div>


                            <div className="ordering">
                                <select
                                    value={this.state.ordering}
                                    onChange={this.onChangeOrdering}

                                >
                                    <option value="Titulo">Titulo</option>
                                    <option value="Valor da Remuneracao">Valor da remuneracao</option>
                                    <option value="Prazo">Prazo</option>
                                </select>
                            </div>



                        </FilterContainer>

                        <Cards>
                            {filteredServices}
                        </Cards>

                    </MainContainer>
                )
        }
    }
}