import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";

const DynamicOptionalSegmentsPages: NextPage<{ ids?: string[] }> = ({
  ids,
}) => {
  return <div>{(ids || []).join(", ") || "No ids"}</div>;
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { ids } = params || {};

  return {
    props: {
      ids: ids || null,
    },
  };
};

export default DynamicOptionalSegmentsPages;
