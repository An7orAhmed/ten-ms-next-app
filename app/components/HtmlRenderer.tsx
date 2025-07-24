import React from 'react';

interface HtmlRendererProps {
  htmlString: string;
  className?: string;
}

export const HtmlRenderer: React.FC<HtmlRendererProps> = ({ htmlString, className }) => {
  return (
    <div
      className={`prose prose-invert prose-a:text-blue-400 ${className}`}
      dangerouslySetInnerHTML={{ __html: htmlString }}
    />
  );
};