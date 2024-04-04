import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import InputForm from "./InputForm/InputForm";
import { FieldValues } from "react-hook-form";
import DataTable from "./DataTable/DataTable";

function App() {
  const [items, setItems] = useState<FieldValues[]>([]);
  const submitHandler = (data: FieldValues) => {
    const json = {
      description: data.description,
      amount: data.amount,
      category: data.category,
    };

    setItems([...items, json]);
    console.log(items);
  };

  const removeItem = (value: string) => {
    setItems([...items.filter((item) => item.description != value)]);
    // setItems(produce((draft)=>(draft.filter((item) => item.description == value))))
  };

  return (
    <>
      <InputForm submitHandler={submitHandler}></InputForm>
      {/* <Display items={items}></Display> */}
      <DataTable removeItem={removeItem} data={items}></DataTable>
    </>
  );
}

export default App;
