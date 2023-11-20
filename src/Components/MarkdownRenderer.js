import { marked } from 'marked';
import React from 'react';

// It is the responsibility of the parent project to sanitize the markdown
function MarkdownRenderer({ markdown }) {
  const html = marked.parse(markdown || ''); // maybe use memo?
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
}

export default MarkdownRenderer;
