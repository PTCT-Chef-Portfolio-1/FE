import React from 'react';
import '../App.css';
import axios from 'axios';
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextInput } from "./TextInput";
import { Checkbox } from "./Checkbox";
// import { SelectDropdown } from "./Select";
import Select from 'react-styled-select';

const RegisterPage = () => {

  const options = [
    { label: "Role", value: 1},
    { label: "Chef", value: 2},
    { label: "Foodie", value: 3},
    { label: "Other", value: 4},
  ]

  return (
    <>
      <h1>Welcome Please Register</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          acceptedTerms: false, 
          userType: "" 
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email addresss`")
            .required("Required"),
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
          userType: Yup.string()
      
            .oneOf(
              ["Chef", "Foodie", "other"],
              "Invalid User Type"
            )
            .required("Required")
        })}
        onSubmit={(values, { setSubmitting, resetForm,setStatus }) => {
     
            doStuff(values);
            setSubmitting(false);
            resetForm();
        }}
      >
        <Form>
          <TextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="First"
          />
          <TextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Last"
          />
          <TextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="Email"
          />
          <Select label="User Type" name="userType" options={options}>
          </Select>
          <Checkbox name="acceptedTerms">
            I accept the terms and conditions
          </Checkbox>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

function doStuff(values){
  return axios.post("https://reqres.in/api/users/",values
    ).then(res => {
      console.log("success", res);
      localStorage.setItem('values', res.data.values)
    })
    .catch(err =>
      console.log(err.response)
    );
}



export default RegisterPage;
