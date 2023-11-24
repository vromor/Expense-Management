import React, { useState, useEffect } from 'react'
import { Form, Input, message } from 'antd'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';
import "../styles/RegisterPage.css";
const Register = () => {
    const navigate = useNavigate()
    const [loading, setloading] = useState(false)

    const submitHandler = async (values) => {
        // console.log(values);
        try {
            setloading(true);
            await axios.post("users/register", values)
            message.success("Registration Successfull")
            setloading(false);
            navigate("/login");

        } catch (error) {

            setloading(false);
            message.error("invalid username or password");
        }

    };



    useEffect(() => {
        if (localStorage.getItem('user')) {

            navigate('/')
        }
    }, [navigate]);









    return (
        <>

            <div className='register-page'>
                {loading && <Spinner />}
                <Form
                    className="register-form"
                    layout="vertical"
                    onFinish={submitHandler}
                >
                    <h2>Register Form</h2>
                    <Form.Item label="Name" name="name">
                        <Input type="text" required />
                    </Form.Item>
                    <Form.Item label="Email" name="email">

                        <Input type="email" required />
                    </Form.Item> <Form.Item label="Password" name="password">

                        <Input type="password" required />
                    </Form.Item>
                    <div className='d-flex justify-content-between'>
                        <Link to="/login">Already Registered? login here!</Link>
                        <button className="btn ">Register</button>
                    </div>
                </Form>
            </div>



        </>
    );
};

export default Register