import React, { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import rehypeRaw from "rehype-raw";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Box, Typography } from "@mui/material";
import COLORS from "../colors";

function CustomMarkdown({ path }) {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(path)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, [path]);

  const MarkdownImage = (props) => {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img alt="" {...props} style={{ maxWidth: "100%" }} />
      </Box>
    );
  };

  const MarkdownBlockquote = (props) => {
    return <blockquote {...props} style={{ backgroundColor: "rgb(40, 40, 40)", padding: "0.5px", paddingLeft: "13px" }} />;
  };

  const ArticleTitle = (props) => {
    const { children } = props;
    return (
      <Typography sx={{ marginTop: 5, marginBottom: 5, textAlign: "center" }} variant="h3" color={COLORS.articleTitleColor}>
        {children}
      </Typography>
    );
  };

  const MarkDownLink = (props) => {
    return (
      <a
        {...props}
        style={{
          ...props.style,
          color: COLORS.linkTextColor,
        }}
      >
        {props.children}
      </a>
    );
  };

  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      components={{
        img: MarkdownImage,
        blockquote: MarkdownBlockquote,
        code(props) {
          const { children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <SyntaxHighlighter {...rest} PreTag="div" children={String(children).replace(/\n$/, "")} language={match[1]} style={darcula} />
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
        h1: ArticleTitle,
        a: MarkDownLink,
      }}
      children={markdown}
    ></ReactMarkdown>
  );
}

export default CustomMarkdown;
