import React from "react";
import { useField } from "formik";
import { Input } from "antd";
import { StyledErrMessage } from "./styles";

export const InputField = ({ name, label, ...props }) => {
  const [field, meta] = useField(name);
  return (
    <>
      {label && <label>{label}</label>}
      <Input {...field} {...props} />
      {meta.error && meta.touched && (
        <StyledErrMessage>{meta.error}</StyledErrMessage>
      )}
    </>
  );
};
