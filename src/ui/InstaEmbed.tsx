import React, { useEffect } from "react";

const InstagramEmbed: React.FC = (props) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <blockquote class="instagram-media" 
              data-instgrm-permalink=${props.url}
              data-instgrm-version="14" 
              style="background:#FFF; border:0; margin:0; min-width:540px; width:100%;"></blockquote>
        `,
      }}
    />
  );
};

export default InstagramEmbed;
