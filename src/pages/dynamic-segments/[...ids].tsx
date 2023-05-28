import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";

const DynamicSegmentPages: NextPage<{ ids?: string[] }> = ({ ids }) => {
  return <div>{(ids || []).join(", ")}</div>;
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { ids } = params || {};

  return {
    props: {
      ids,
    },
  };
};

export default DynamicSegmentPages;
