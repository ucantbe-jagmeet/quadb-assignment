import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getLocalStorage, setLocalStorage } from "./utils/getSetLocalStorage";
interface IItemsObject {
  name: string;
  completed: boolean;
  id: string;
}

function App() {
  return (
    <section className="section-center">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Form />
      <Items />
    </section>
  );
}

export default App;
