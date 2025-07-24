// src/components/FeatureSection.jsx
import React from 'react';

const FeatureSection = ({
  title,
  description,
  features = [], // Default value of empty array for 'features' to prevent .map() errors
  imageSrc, // Prop for single image (maintained as fallback/option)
  imageSrcs, // New prop for array of images
  imageAlt,
  bgColor,
  reverseLayout = false, // Prop to toggle image/text order
  iconColorClass,  // Tailwind class for icon color
  sectionId = 'caracteristicas', // Default section ID
}) => {
  return (
    <section id={sectionId} className={`py-20 px-4 ${bgColor}`}>
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image(s) Container */}
        {/*
            If reverseLayout is true: in md, the image(s) take order-2 (second column).
            If reverseLayout is false: in md, the image(s) take order-1 (first column).
            On small screens, the order remains as flexbox would naturally do.
        */}
        <div className={`flex justify-center items-center ${reverseLayout ? 'md:order-2' : 'md:order-1'}`}>
          {/* Check if imageSrcs is an array and has items */}
          {imageSrcs && imageSrcs.length > 0 ? (
            // Use flexbox for image layout:
            // - flex-col: stack images vertically on mobile (default)
            // - md:flex-row: display images side-by-side on medium screens and up
            // - gap-4: adds space between images
            <div className="flex flex-col md:flex-row gap-4 w-full justify-center items-center">
              {imageSrcs.map((src, index) => (
                <img
                  key={index} // Unique key for each image in the map
                  src={src}
                  alt={`${imageAlt} - ${index + 1}`} // Alt text for each image
                  // w-full on mobile, then md:w-1/2 to take half width on desktop
                  // object-contain to ensure the whole image is visible if it's placed in a restricted space
                  className="w-full md:w-1/2 h-auto object-contain" // Removed rounded-lg and shadow-xl as requested
                />
              ))}
            </div>
          ) : (
            // Fallback for single image or no image (can be removed if imageSrcs is always an array)
            imageSrc && (
              <img
                src={imageSrc} // Fallback to original imageSrc if imageSrcs is not provided
                alt={imageAlt}
                className="w-full h-auto object-contain" // Removed rounded-lg and shadow-xl as requested
              />
            )
          )}
        </div>

        {/* Text Content */}
        {/* Logic corrected for order:
            If reverseLayout is true: in md, text takes order-1 (first column).
            If reverseLayout is false: in md, text takes order-2 (second column).
        */}
        <div className={`${reverseLayout ? 'md:order-1' : 'md:order-2'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {title}
            {/* Added the decorative line div here */}
            <div className="w-24 h-1 bg-indigo-600 mt-2 rounded-full"></div> {/* Removed mx-auto as title is not text-center here */}
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            {description}
          </p>
          <ul className="space-y-3 text-gray-700 text-lg">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">

                {/* Check to ensure feature.icon is valid before creating it */}
                {feature.icon && React.createElement(feature.icon, { className: `${iconColorClass} mr-3 flex-shrink-0`, size: 24 })}
                {feature.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
