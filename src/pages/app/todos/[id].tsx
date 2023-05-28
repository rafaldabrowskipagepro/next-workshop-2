import { Todo, deleteTodo, getTodo, getTodos } from "@/utils";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";

export type TodoDetailsPageProps = Todo;

const TodoDetailsPage: NextPage<TodoDetailsPageProps> = ({
  title,
  body,
  _id,
}) => {
  return (
    <div>
      <h1>{title}</h1>

      <p style={{ marginTop: "2rem" }}>{body}</p>

      <button
        type="button"
        onClick={() =>
          fetch(`/api/todos/${_id}`, {
            method: "DELETE",
          })
        }
      >
        Delete
      </button>
    </div>
  );
};

export default TodoDetailsPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const todos = await getTodos();

  return {
    paths: todos.map((todo) => ({
      params: {
        id: todo._id,
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<TodoDetailsPageProps> = async ({
  params,
}) => {
  const { id } = params || {};

  if (typeof id !== "string") {
    return {
      notFound: true,
    };
  }

  const todo = await getTodo(id);

  if (!todo) {
    return {
      notFound: true,
    };
  }

  return {
    props: todo,
  };
};
