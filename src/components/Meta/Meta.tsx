import React from "react";

import { graphql, StaticQuery } from "gatsby";

interface Props {
  description: string;
  image?: string;
  title: string;
}

interface Data {
  images: {
    edges: Array<{
      node: {
        publicURL: string;
      };
    }>;
  };
}

const Meta: React.FC<Props> = ({ description, title, image }: Props) => (
  <>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:type" content="website" />
    <meta property="og:description" content={description} />
    <meta property="og:site_name" content={title} />
    <meta property="og:url" content="https://minz.dev" />
    <meta property="og:article:author" content="MinJun Kweon" />

    {image ? (
      <>
        <meta property="image" content={image} />
        <meta property="og:image" content={image} />
        <meta property="twitter:image" content={image} />
      </>
    ) : (
      <StaticQuery
        query={graphql`
          query {
            images: allFile(
              filter: { relativePath: { eq: "og-image.png" } }
            ) {
              edges {
                node {
                  publicURL
                }
              }
            }
          }
        `}
        render={(data: Data) => {
          const { images: { edges = [] } = {} } = data;
          const { publicURL } = edges[0].node;
          
          return <>
            <meta property="image" content={publicURL} />
            <meta property="og:image" content={publicURL} />
            <meta property="twitter:image" content={publicURL} />
          </>;
        }}
      />
    )}
  </>
);

export default Meta;
