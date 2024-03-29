import React from "react";
import BasePage from "../components/BasePage";
import CustomMarkdown from "../components/CustomMarkdown";

function IrisCtfWriteup() {
  return (
    <BasePage>
      <div>
        <CustomMarkdown path="/CTF/Iris_CTF/Writeup.md"></CustomMarkdown>
      </div>
    </BasePage>
  );
}

export default IrisCtfWriteup;
