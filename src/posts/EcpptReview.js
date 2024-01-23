import React from "react";
import BasePage from "../components/BasePage";
import CustomMarkdown from "../components/CustomMarkdown";

function EcpptReview() {
  return (
    <BasePage>
      <div>
        <CustomMarkdown path="/eCPPT_review.md"></CustomMarkdown>
      </div>
    </BasePage>
  );
}

export default EcpptReview;
