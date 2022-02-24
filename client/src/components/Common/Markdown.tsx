import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Markdown = ({ markdown }: { markdown: string }) => {
  return (
    <ReactMarkdown
      components={{
        h1: ({ node, ...props }) => (
          // eslint-disable-next-line jsx-a11y/heading-has-content
          <h1 className="text-2xl m-4" {...props} />
        ),
        hr: () => <hr className="m-2" />,
      }}
      remarkPlugins={[remarkGfm]}
    >
      {markdown}
    </ReactMarkdown>
  );
};

export default Markdown;
