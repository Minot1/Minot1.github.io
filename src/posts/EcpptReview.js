import React from "react";
import BasePage from "../components/BasePage";
import CustomMarkdown from "../components/CustomMarkdown";
import { Helmet } from "react-helmet";

function EcpptReview() {
  return (
    <BasePage>
      <div>
        <Helmet>
          <meta property="og:image" content="/eCPPTv2.png" />
        </Helmet>
        <CustomMarkdown path="/eCPPT_review.md"></CustomMarkdown>
      </div>
    </BasePage>
  );
}

export default EcpptReview;
