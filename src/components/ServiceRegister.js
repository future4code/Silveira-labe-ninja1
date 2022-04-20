import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
const MainDiv = styled.div`
    box-sizing: border-box;
    background-image: linear-gradient(125deg, rgba(219, 203, 203, 0), rgb(229, 163, 163));
    height: 89.4vh;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-height: 979px ) {
        height: 85.8vh;
    }
    @media screen and (max-height: 697px ) {
        height: 85.5vh;
    }
`
const FormDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 500px;
    width: 500px;
    gap: 5px;
`
const Input = styled.input`
    height: 30px;
    border-radius: 10px;
`
const Select = styled.select`
    background: linear-gradient(whitesmoke, #D1B8B8 );
    height: 89px;
`
const BTN = styled.button`
    height: 30px;
    background: #4B181C;
    color: white;
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
        inputPaymentMethods: "",
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
                    jobs: res.data.jobs
                });
            })
            .catch((err) => {
                console.log(err);
            })
    }
    createJob = () => {
        const url = "https://labeninjas.herokuapp.com/jobs"
        const body = {
            title: this.state.inputTitle,
            description: this.state.inputDescription,
            price: Number(this.state.inputPrice),
            paymentMethods: this.state.inputPaymentMethods,
            dueDate: this.state.inputDueDate
        }
        const newJobs = {
            title: this.state.inputTitle,
            description: this.state.inputDescription,
            price: this.state.inputPrice,
            paymentMethods: this.state.inputPaymentMethods,
            dueDate: this.state.inputDueDate
        }
        const jobsWithNewJob = [...this.state.jobs, newJobs]
        axios
            .post(url, body, headers)
            .then((res) => {
                this.setState({
                    jobs: jobsWithNewJob,
                    inputTitle: "",
                    inputDescription: "",
                    inputPrice: "",
                    inputPaymentMethods: "",
                    inputDueDate: ""
                })
                alert("Job Created Successfully!")
                this.getAllJobs();
            })
            .catch((err) => {
                console.log(err.response);
            })
    }
    onChangeInputTitle = (event) => {
        this.setState({
            inputTitle: event.target.value
        });
    }
    onChangeInputDescription = (event) => {
        this.setState({
            inputDescription: event.target.value
        });
    }
    onChangePrice = (event) => {
        this.setState({
            inputPrice: event.target.value
        });
    }
    onChangeSelect = (event) => {
        let value = Array.from(event.target.selectedOptions, option => option.value)
        this.setState({
            inputPaymentMethods: value
        });
    }
    onChangeDate = (event) => {
        this.setState({
            inputDueDate: event.target.value
        });
    }
    render() {
        return (
            <MainDiv>
                <FormDiv>
                    <Input value={this.state.inputTitle} onChange={this.onChangeInputTitle} placeholder="Title" />
                    <Input value={this.state.inputDescription} onChange={this.onChangeInputDescription} placeholder="Description" />
                    <Input type="number" value={this.state.inputPrice} onChange={this.onChangePrice} placeholder="Price" />
                    <Select value={this.state.inputPaymentMethods} onChange={this.onChangeSelect} multiple>
                        <option value="ticket">Ticket</option>
                        <option value="credit card">Credit Card</option>
                        <option value="debit card">Debit Card</option>
                        <option value="pix">Pix</option>
                        <option value="PayPal">PayPal</option>
                    </Select>
                    <Input value={this.state.inputDueDate} onChange={this.onChangeDate} type="date" />
                    <BTN onClick={this.createJob}><strong>Register Job!</strong></BTN>
                </FormDiv>
            </MainDiv>
        )
    }
}