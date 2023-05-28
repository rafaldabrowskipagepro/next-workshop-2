import sanityClient from "./sanityClient";

export interface Todo {
  _id: string;
  _type: "todo";
  title: string;
  body: string;
}

export interface CreateTodoBody {
  title: string;
  body: string;
}

export const addTodo = async (todo: CreateTodoBody): Promise<string> => {
  if (!todo.title || !todo.body) {
    throw new Error("Missing title or body");
  }

  const { _id } = await sanityClient.create({
    ...todo,
    _type: "todo",
    _id: `${process.env.USER_ID}.${crypto.randomUUID()}`,
  });

  return _id;
};

export const getTodos = async (): Promise<Todo[]> => {
  return sanityClient.fetch(`*[_type == "todo"]`, {
    userId: process.env.USER_ID,
  });
};

export const getTodo = async (id: string): Promise<Todo> => {
  if (!id) {
    throw new Error("Missing id");
  }

  return sanityClient.fetch(`*[_type == "todo" && _id == $id][0]`, {
    id,
  });
};

export const deleteTodo = async (id: string) => {
  if (!id) {
    throw new Error("Missing id");
  }

  return sanityClient.delete(id);
};

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    fractionalSecondDigits: 3,
  }).format(date);
