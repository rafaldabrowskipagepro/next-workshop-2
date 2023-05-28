import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import React from "react";

type SSRPage = {
  renderedAt: string;
};

const SSRPage: NextPage<SSRPage> = ({ renderedAt }) => {
  return (
    <div>
      This page was rendered at {renderedAt}
      <br />
      <Link href="/rendering/ssg">Go to ssg</Link>
    </div>
  );
};

export default SSRPage;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      renderedAt: new Intl.DateTimeFormat(undefined, {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        fractionalSecondDigits: 3,
      }).format(new Date()),
    },
  };
};
