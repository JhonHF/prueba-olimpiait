import React from "react";
import { useSelector } from "react-redux";
import { InvoicesWrapper } from "./styles";

export const InvoiceList = () => {
  const { listInvoices } = useSelector((state) => state.invoices);
  return (
    <>
      <h2>Lista de faturas</h2>
      <InvoicesWrapper>
        {listInvoices.map((invoice, index) => (
          <div key={index} className="invoice">
            <p>{`ID factura: ${invoice.uid}`}</p>
            <p>{`NIT: ${invoice.nit}`}</p>
            <p>{`Descripcion: ${invoice.description}`}</p>
            <p>{`Total factura: $${invoice.total}`}</p>
            <p>{`IVA ${invoice.percentage}%`}</p>
          </div>
        ))}
        {!listInvoices.length && <p>No tienes ninguna factura </p>}
      </InvoicesWrapper>
    </>
  );
};
