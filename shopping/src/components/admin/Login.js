import React, { Component } from 'react'
import {
    Card,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
} from 'reactstrap'
import Axios from 'axios';
import Swal from 'sweetalert2'
import HeaderLogin from './HeaderLogin'
import Footer from '../client/Footer'
export default class Login extends Component {
    state = {
        email: "",
        password: ""
    }
    componentDidMount() {
        const token = window.localStorage.getItem('admin_token');
        if (token) {
            this.props.history.push('/admin')
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleLogin = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:1977/login', {
            ...this.state
        }).then(res => {
            console.log(res)
            const token = res.data;
            window.localStorage.setItem('admin_token', token);
            Swal.fire({
                title: "Login successfully",
                timer: 1000,
                icon: 'success'
            }).then(() => {
                this.props.history.push('/admin')
            })
        }).catch(err => {
            console.log(err)
            Swal.fire({
                title: "Login unsuccessfully",
                timer: 1000,
                icon: 'error'
            })
        })
    }
    render() {
        return (<>
            <HeaderLogin></HeaderLogin>
            <div className="container-fluid contentlogin ">
                <div className="login-page d-flex justify-content-center align-items-center ">
                    <Card className="login-modal">
                        <Form onSubmit={this.handleLogin}>
                            <h3 className="text-center">Đăng nhập</h3>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" onChange={this.handleChange} placeholder="Email/SDT/TenDangNhap" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="examplePassword" onChange={this.handleChange} placeholder="password" />
                            </FormGroup>

                            <Button > Đăng nhập</Button>
                        </Form>
                    </Card>
                </div>
            </div>


        </>
        )
    }
}
