import React from "react";
import BasePage from "../components/BasePage";
import CustomMarkdown from "../components/CustomMarkdown";

function IrisCtfWriteup() {
  return (
    <BasePage>
      <div>
        <CustomMarkdown path="/IrisCTF2024.md"></CustomMarkdown>
      </div>
    </BasePage>
  );
}

export default IrisCtfWriteup;
