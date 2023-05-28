import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";

const AddTodoPage: NextPage = () => {
  const router = useRouter();
  const [values, setValues] = useState({
    title: "",
    body: "",
  });

  const onChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = ({ target: { name, value } }) =>
    setValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const response = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { id } = await response.json();

    router.push({
      pathname: "/app/todos/[id]",
      query: { id },
    });
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <label htmlFor="title">
        <div>Title</div>
        <input
          id="title"
          name="title"
          type="text"
          value={values.title}
          onChange={onChange}
        />
      </label>
      <label htmlFor="body">
        <div>Body</div>
        <textarea
          id="body"
          name="body"
          rows={10}
          value={values.body}
          onChange={onChange}
        />
      </label>

      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoPage;
