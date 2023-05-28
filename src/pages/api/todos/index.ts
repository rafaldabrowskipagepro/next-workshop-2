import { addTodo } from "@/utils";
import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  const { title, body } = req.body;

  if (typeof title !== "string" || typeof body !== "string") {
    return res.status(400).json({ message: "Invalid title or body" });
  }

  const id = await addTodo({ title, body });

  return res.json({ id });
};

export default handler;
