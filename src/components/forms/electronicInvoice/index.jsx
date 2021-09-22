import React from "react";
import { Form as FormikForm, Formik } from "formik";
import { Button, Form } from "antd";
import { useDispatch } from "react-redux";
import { InputField } from "../../molecules/inputField";
import { TextAreaField } from "../../molecules/textAreaField";
import { FormWrapper } from "./styles";
import { schema } from "./validations";
import { addInvoice } from "../../../store/invoices/actions";

export const ElectronicInvoiceForm = () => {
  const dispatch = useDispatch();

  const initialVal = {
    uid: "",
    nit: "",
    description: "",
    total: "",
    percentage: "",
  };

  const handleSubmit = (values, helpers) => {
    dispatch(addInvoice(values));
    helpers.resetForm();
  };

  return (
    <Formik
      initialValues={initialVal}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      {({ submitForm }) => (
        <FormikForm>
          <h2>Añadir factura</h2>
          <FormWrapper>
            <Form.Item label="ID unico de factura">
              <InputField name="uid" placeHolder="ej: 1240" />
            </Form.Item>
            <Form.Item label="NIT">
              <InputField name="nit" placeHolder="ej: 12323455" />
            </Form.Item>
            <Form.Item label="Descripcion de factura">
              <TextAreaField name="description" placeHolder="Descripcion..." />
            </Form.Item>
            <Form.Item label="Valor total">
              <InputField name="total" />
            </Form.Item>
            <Form.Item label="Porcentaje de IVA (solo colocar el numero)">
              <InputField name="percentage" placeHolder="ej: 16" />
            </Form.Item>
            <Button type="primary" onClick={submitForm}>
              Añadir factura
            </Button>
          </FormWrapper>
        </FormikForm>
      )}
    </Formik>
  );
};
