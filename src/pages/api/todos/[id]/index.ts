import { deleteTodo } from "@/utils";
import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  const { id } = req.query;

  if (typeof id !== "string") {
    return res.status(400).json({ message: "Invalid id" });
  }

  await deleteTodo(id);
  await res.revalidate(`/app/todos/${id}`);

  return res.json({ message: "Todo deleted" });
};

export default handler;
