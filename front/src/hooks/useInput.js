import {useState} from "react";

export const useInput = (name) => {
  const [value, setValue] = useState("");

  const onChange = ({ target: { value } }) => setValue(value);

  return { value, onChange, name };
};
