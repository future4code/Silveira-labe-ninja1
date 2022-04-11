import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const MainContainer = styled.div `

`
const FilterContainer = styled.div `

`

const CardsContainer = styled.div `
    border: 2px solid black
`

const Description = styled.div `

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
        description: false
    }

    componentDidMount = () => {
        this.getAllJobs()
    }

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

    onChangeMinFilter = (event) => {
        this.setState({ minFilter: event.target.value })
    }

    onChangeMaxFilter = (event) => {
        this.setState({ maxFilter: event.target.value })
    }

    onChangeSearchFilter = (event) => {
        this.setState({ searchFilter: event.target.value })
    }


    render() {

        const filteredServices = this.state.jobs.filter((job) => {
            return (job.title.toLowerCase().includes(this.state.searchFilter.toLowerCase())) || job.description.toLowerCase().includes(this.state.searchFilter.toLowerCase())
        }).filter(job => {
            return this.state.minFilter === "" || this.state.minFilter <= job.price
        }).filter(job => {
            return this.state.maxFilter === "" || this.state.maxFilter >= job.price
        }).map(job => {
            return (
                <CardsContainer key={job.id}>
                    <h3> {job.title} </h3>
                    <p><strong>Price: </strong> {job.price}</p>
                    <p><strong>Deadline: </strong> {job.dueDate}</p>
                    {/* <div className={job.id} style="display: none">
                        <p>{job.description}</p>
                    </div> */}
                    <button onClick={() => {}}>Description</button>
                    <button onClick={() => {}}>Add to Cart</button>

                </CardsContainer>
            )
        })


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
                        <select>
                            <option value="Titulo">Titulo</option>
                            <option value="Valor da Remuneracao">Valor da remuneracao</option>
                            <option value="Prazo">Prazo</option>
                        </select>
                    </div>



                </FilterContainer>

                <CardsContainer>
                    {filteredServices}
                </CardsContainer>

            </MainContainer>

           
        )
    }
}