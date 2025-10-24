import React from "react";

const DividerSection = () => {
  return (
    <section
      className="w-full h-20 md:h-24 bg-center" // Adjusted height, bg-center helps positioning
      style={{
        // IMPORTANT: Replace with your image path in /public/images/
        backgroundImage: 'url("/images/section-divider-bg.png")',
        backgroundRepeat: "repeat-x", // Repeat horizontally
        backgroundSize: "auto 100%", // Make the image fit height, repeat width
      }}
      aria-hidden="true" // Decorative element
    >
      {/* No content needed, it's just a background */}
      <div className="h-full w-full bg-black bg-opacity-10"></div>{" "}
      {/* Optional subtle overlay */}
    </section>
  );
};

export default DividerSection;
