import React from "react";
import { useField } from "formik";
import { StyledLabel, StyledSelect, StyledErrorMessage } from "./StyledSelect";


export const Select = ({ label, ...props }) => {

    const [field, meta] = useField(props);
    return (<>
        <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
        <StyledSelect {...field} {...props} />
        {meta.touched && meta.error ? (<StyledErrorMessage>{meta.error}</StyledErrorMessage>) : null}
    </>);
};