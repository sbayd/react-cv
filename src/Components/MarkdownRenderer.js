import marked from 'marked';
import React from 'react';


// It is the responsibility of the parent project to sanitize the markdown
const MarkdownRenderer = ({ markdown }) => {
  const html = marked.parse(markdown || ''); // maybe use memo?
  return (
    <p
      dangerouslySetInnerHTML={{
        __html: html
      }}
    />
  );
}

export default MarkdownRenderer;