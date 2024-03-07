// pages/categories.tsx (or pages/categories.js if using JavaScript)

import React from 'react';

import { categories } from './skillsData'

const CategoriesPage = () => {

    return (
        <div className="flex flex-col items-center justify-center p-10 font-mono min-h-screen">
          {/* Title aligned left but with container centered */}
          <div className="self-center mb-12">
            <h1 className="text-5xl font-bold ml-5">Skills</h1>
          </div>
    
          {/* Grids container for centering */}
          <div className="w-full max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {categories.slice(0, 3).map((category, index) => (
                <div key={index} className="shadow-lg rounded-lg p-5">
                  <h2 className="font-bold text-xl mb-4 text-center">{category.title}</h2>
                  <div className="flex flex-wrap justify-center gap-2">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="border border-white rounded-full bg-slate-900/70 px-4 py-1">{item}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {categories.slice(3).map((category, index) => (
                <div key={index} className="shadow-lg rounded-lg p-5">
                  <h2 className="font-bold text-xl mb-4 text-center">{category.title}</h2>
                  <div className="flex flex-wrap justify-center gap-2">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="border border-white rounded-full bg-slate-900/70 px-4 py-1">{item}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
};

export default CategoriesPage;
