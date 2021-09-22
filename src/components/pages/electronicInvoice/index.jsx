import React from "react";
import { ElectronicInvoiceForm } from "../../forms/electronicInvoice";
import { MainLayout } from "../../layouts/mainLayout";
import { InvoiceList } from "../../organims/invoiceList";

export const ElectronicInvoice = () => {
  return (
    <MainLayout header="Factura electrónica">
      <InvoiceList />
      <ElectronicInvoiceForm />
    </MainLayout>
  );
};
