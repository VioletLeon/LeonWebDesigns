import React, { useEffect } from 'react';

//@ts-ignore
const CalendlyEmbed = () => {
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute(
      'src',
      'https://assets.calendly.com/assets/external/widget.js'
    );
    //@ts-ignore
    head.appendChild(script);

    return () => {
      // Cleanup the script when the component is unmounted or URL changes
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget h-[700px]"
      data-url="https://calendly.com/violet-leonwebdesigns/30min"
      style={{ minHeight: '650px', width: '100%' }}
    ></div>
  );
};

export default CalendlyEmbed;
