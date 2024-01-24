import React from "react";
import BasePage from "../components/BasePage";
import CustomMarkdown from "../components/CustomMarkdown";
import { Helmet } from "react-helmet";

function EcpptReview() {
  return (
    <BasePage>
      <div>
        <Helmet>
          <title>Minot - eCPPT Review</title>
          <meta property="og:title" content="Minot - eCPPT Review" />
          <meta property="og:description" content="eCPPT Review" />
        </Helmet>
        <CustomMarkdown path="/eCPPT_review.md"></CustomMarkdown>
      </div>
    </BasePage>
  );
}

export default EcpptReview;
