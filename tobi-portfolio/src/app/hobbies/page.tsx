import React from 'react';

import Image from 'next/image'

// Assuming you have an array of categories where each category now has a title and an image URL
const categories = [
  { title: "Dancing", image: "/path/to/image1.jpg", imageWidth: 150, imageHeight: 150},
  { title: "Guitar", image: "/path/to/image2.jpg" , imageWidth: 150, imageHeight: 150},
  { title: "Reading", image: "/path/to/image3.jpg" , imageWidth: 150, imageHeight: 150},
  { title: "Mixology", image: "/path/to/image4.jpg" , imageWidth: 150, imageHeight: 150},
  { title: "Surfing", image: "/pictures/hobbies/surf.jpg" , imageWidth: 150, imageHeight: 150},
];

const GalleryPage = () => {
  return (
    <div className="p-10 font-mono">
      {/* Title with margin to the left */}
      <h1 className="text-5xl font-bold mb-8 ml-20">Hobbies</h1>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {categories.slice(0, 3).map((category, index) => (
          <div key={index} className="shadow-lg rounded-lg">
            <h2 className="font-bold text-xl mb-4 text-center">{category.title}</h2>
            {/* Adjusting for image display */}
            <Image src={category.image} alt={category.title} width={category.imageWidth} height={category.imageHeight} />
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {categories.slice(3).map((category, index) => (
          <div key={index} className="shadow-lg rounded-lg">
            <h2 className="font-bold text-xl mb-4 text-center">{category.title}</h2>
            {/* Image display */}
            <Image src={category.image} alt={category.title} width={category.imageWidth} height={category.imageHeight} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
