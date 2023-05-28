import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

const HydrationErrorPage: NextPage = () => {
  const { query } = useRouter();

  if (typeof window !== "undefined") {
    return (
      <p>
        The value of the query param is: <strong>{query.param}</strong>
      </p>
    );
  }

  return <div>No query param</div>;
};

export default HydrationErrorPage;
