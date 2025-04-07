import React from "react";
import {Helmet} from "react-helmet";

const SEO = (param) => {
    const { title, description } = param;
    console.log("SEO component rendered with title:", title);
    console.log("SEO component rendered with description:", description);
  return (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="title" content={title} />
        <meta property="og:description" content={description} />
    </Helmet>
  );
};

export default SEO;
