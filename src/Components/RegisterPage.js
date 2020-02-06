import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextInput } from "./TextInput";
import { Checkbox } from "./Checkbox";
import Select from 'react-styled-select';
import {AxiosWithAuth} from '../AxiosWithAuth';

const userSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less"),

  lastName: Yup.string()
    .max(20, "Must be 20 characters or less"),

  email: Yup.string()
    .email("Invalid email addresss`"),

  // acceptedTerms: Yup.boolean()
  //   .required("Required")
  //   .oneOf([true], "You must accept the terms and conditions."),

  // userType: Yup.string()
  //   .oneOf(["Chef", "Foodie", "other"], "Invalid User Type")
  //   .required("Required"),

  password: Yup.string()
    .min(3),

  confirmPassword: Yup.string()
    .min(3)
    .oneOf([Yup.ref("password")], "Passwords must match"),

});


const RegisterPage = (props) => {

  const options = [
    { label: "Role", value: 1},
    { label: "Chef", value: 2},
    { label: "Foodie", value: 3},
    { label: "Other", value: 4},
  ]

  const [form, setForm ] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value    
    });
  };

  const handleSubmit = () => {
    AxiosWithAuth()
      .post(`https://chefs-view.herokuapp.com/auth/register/`, form)
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.payload);
        props.history.push(`/home`);
      })
      .catch((err) => 
        console.log('Login Error', err));
  }

  // const [user, setUser ] = useState({});

  return (
    <>
      <h1>Welcome Please Register</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
          // acceptedTerms: false,
          // userType: ""
        }}

        validationSchema={userSchema}
        render={props => {
          return (
            <Form         
            onSubmit={(e) => {
              e.preventDefault()
              handleSubmit() 
            }}>
          <TextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="First"
            value={form.firstName}
            onChange={handleChange}
          />
          <TextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Last"
            value={form.lastName}
            onChange={handleChange}
          />
          <TextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <TextInput
            name="password"
            type="password"
            placeholder="enter password"
            value={form.password}
            onChange={handleChange}
          />
          <TextInput
            name="confirmPassword"
            type="password"
            placeholder="confirm password"
            onChange={handleChange}
            value={form.confirmPassword}

          />
          {props.errors.confirmPassword && props.touched.confirmPassword ? (
          <span className="red">{props.errors.confirmPassword}</span>
          ) : (
          ""
          )}

          {/* <Select 
            label="User Type" 
            name="userType" 
            options={options}>
          </Select>

          <Checkbox name="acceptedTerms">
            I accept the terms and conditions
          </Checkbox> */}

          <button type="submit">Submit</button>

        </Form>

          );
        }}
      />
    </>
  );
};

export default RegisterPage;
