import React, { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeRaw from "rehype-raw";

function CustomMarkdown({ path }) {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(path)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, [path]);

  const MarkdownImage = (props) => {
    return <img alt="" {...props} style={{ maxWidth: "100%" }} />;
  };

  const MarkdownBlockquote = (props) => {
    return <blockquote {...props} style={{ backgroundColor: "rgb(40, 40, 40)", padding: "0.5px", paddingLeft: "13px" }} />;
  };

  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      components={{ img: MarkdownImage, blockquote: MarkdownBlockquote }}
      children={markdown}
    ></ReactMarkdown>
  );
}

export default CustomMarkdown;
