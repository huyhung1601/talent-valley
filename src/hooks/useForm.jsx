import { useCallback, useState } from "react";

export const useForm = (initialValue) => {
  const [values, setValues] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((p) => ({ ...p, [name]: value }));
  };

  const resetValues = useCallback(() => {
    setValues(initialValue);
  }, [initialValue, setValues]);

  return { values, handleChange, resetValues, setValues };
};
