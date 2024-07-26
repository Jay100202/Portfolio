import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "testimonials", "contact"].map(
        (item, index) => (
          <a href={`#${item}`} className="app__navigation-dot" aria-label={`Navigate to ${item}`} />
        )
      )}
    </div>
  );
};

export default NavigationDots;
