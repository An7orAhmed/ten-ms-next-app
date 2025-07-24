import React from 'react';

interface HtmlRendererProps {
  htmlString: string;
  className?: string;
}

export const HtmlRenderer: React.FC<HtmlRendererProps> = ({ htmlString, className }) => {
  return (
    <div
      className={`prose prose-invert prose-p:text-black prose-li:text-black prose-a:text-blue-400 prose-h1:text-black prose-h2:text-black prose-h3:text-black ${className}`}
      dangerouslySetInnerHTML={{ __html: htmlString }}
    />
  );
};