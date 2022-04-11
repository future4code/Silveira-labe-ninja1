import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const MainDiv = styled.div`

`

const headers = {
    headers: {
        Authorization: "07c443c6-17f3-4271-a8c7-69af5aa2c5f3"
    }
}

export default class ServiceRegister extends React.Component {

    state = {
        jobs: [],
        inputTitle: "",
        inputDescription: "",
        inputPrice: "",
        inputPaymentMethods: ["ticket", "credit card", "debit card", "pix", "PayPal"],
        inputDueDate: ""
    }

    componentDidMount() {
        this.getAllJobs();
    }

    getAllJobs = () => {

        const url = "https://labeninjas.herokuapp.com/jobs"

        axios
            .get(url, headers)
            .then((res) => {
                this.setState({
                    jobs: res.data
                });
            })
            .catch((err) => {
                console.log(err.response);
            })

    }

    createJob = () => {

        const url = "https://labeninjas.herokuapp.com/jobs"

        const body = {
            title: this.state.inputTitle,
            description: this.state.inputDescription,
            price: this.state.inputPrice,
            paymentMethods: this.state.inputPaymentMethods,
            dueDate: this.state.iinputDueDate
        }
        axios
            .post(url, body, headers)
            .then((res) => {
                alert("Job Created Successfully!")
                this.getAllJobs();
            })
            .catch((err) => {
                console.log(err.response.data);
            })

    }


    onChangeSelect = (event) => {
        this.setState({
            inputPaymentMethods: event.target.value
        });
    }



    render() {

        const jobList = this.state.jobs.map((job) => {
            return (
                <li key={job.id}>{job.title}{job.description}{job.price}</li>
            )
        })

        return (
            <MainDiv>
                <div>
                    <input />
                    <input />
                    <input />
                    <select value={this.state.inputPaymentMethods} onClick={this.onChangeSelect}>
                        <option value="ticket">Boleto</option>
                        <option value="credit card">Cartão de crédito</option>
                        <option value="debit card">Cartão de débito</option>
                        <option value="pix">Pix</option>
                        <option value="PayPal">PayPal</option>
                    </select>
                    <input type="date" />
                    <button onClick={this.createJob}>Register Job!</button>
                </div>
                <div>
                    {jobList}
                </div>
            </MainDiv>
        )
    }



}