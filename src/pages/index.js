import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Layout from "../components/Layout";

export default function Home() {
  const data = useStaticQuery(graphql`
    query GetSiteData {
      site {
        siteMetadata {
          title
          copyright
        }
      }
    }
  `);

  return (
    <Layout>
      <div className="flex jc-c">
        <img alt="ok" src="/iphone.jpg" width={400} className="bblr-5 bbrr-5"/>
      </div>
      {
        data && <h1>{data.site.siteMetadata.title}</h1>
      }
    </Layout>
  );
}
