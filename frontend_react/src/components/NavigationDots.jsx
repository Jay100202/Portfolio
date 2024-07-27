import React from "react";

const NavigationDots = ({ active }) => {
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
            <span className="sr-only">{`Navigate to ${item}`}</span>
          </a>
        )
      )}
    </div>
  );
};

export default NavigationDots;
