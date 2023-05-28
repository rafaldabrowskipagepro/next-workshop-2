import { Todo, getTodos } from "@/utils";
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import React from "react";

type TodosListPageProps = {
  todos: Todo[];
};

const TodosListPage: NextPage<TodosListPageProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo._id}>
          <Link
            href={{
              pathname: "/app/todos/[id]",
              query: { id: todo._id },
            }}
          >
            {todo.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TodosListPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const todos = await getTodos();

  return {
    props: {
      todos,
    },
  };
};
