import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Formtwo() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const [output, setOutput] = useState(null);

  const ondata = (data) => {
    setOutput(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(ondata)}>
        <label>Name:</label>
        <input
          {...register("firstname", {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters",
            },
          })}
          placeholder="Enter the Name"
        />
        <br />
        {errors.firstname && (
          <span style={{ color: "red" }}>{errors.firstname.message}</span>
        )}

        <br />
        <br />

        <label>Age:</label>
        <input
          type="number"
          {...register("age", {
            required: "Age is required",
            max: {
              value: 65,
              message: "Age must not be above 65",
            },
          })}
          placeholder="Enter the Age"
        />
        <br />
        {errors.age && (
          <span style={{ color: "red" }}>{errors.age.message}</span>
        )}

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>

      {output && (
        <>
          <br />
          <h2>Output</h2>
          Name: {output.firstname}
          <br />
          <br />
          Age: {output.age}
        </>
      )}
    </div>
  );
}
