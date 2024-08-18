import React, { useEffect } from 'react';

//@ts-ignore
const CalendlyEmbed = ({ url }) => {
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute(
      'src',
      'https://assets.calendly.com/assets/external/widget.js'
    );
    //@ts-ignore
    head.appendChild(script);
  }, []);

  return <div className="min-w-[320px] h-[700px] w-full" data-url={url}></div>;
};

export default CalendlyEmbed;
