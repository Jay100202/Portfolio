import React from "react";

const NavigationDots = ({ active }) => {
  const srOnlyStyle = {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    border: 0
  };

  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "testimonials", "contact"].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: "#313BAC" } : {}}
            aria-label={`Navigate to ${item}`}
          >
            <span style={srOnlyStyle}>{`Navigate to ${item}`}</span>
          </a>
        )
      )}
    </div>
  );
};

export default NavigationDots;
