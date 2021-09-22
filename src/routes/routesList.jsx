import { ElectronicInvoice } from "../components/pages/electronicInvoice";
import { Home } from "../components/pages/home";
import { MultipleOfThree } from "../components/pages/multipleOfThree";

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/multiple",
    component: MultipleOfThree,
  },
  {
    path: "/electronic-invoice",
    component: ElectronicInvoice,
  },
];
