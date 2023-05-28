import { NextApiHandler } from "next";

const handler: NextApiHandler = async (_, res) => {
  await res.revalidate("/rendering/ssg-with-manual-revalidation");

  res.end();
};

export default handler;
