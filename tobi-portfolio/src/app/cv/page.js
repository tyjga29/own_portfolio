import './timeline.css'

import React from 'react';

import Image from 'next/image';

import { data } from './cvData';

export default function Home() {
  return (
    <div className="writing">
      <div className="text-6xl absolute top-7 left-20">
        CV
      </div>
      <TimeLine />
    </div>
  );
}


function TimeLine() {
  let direction = '';

  return (
    <>
      <div className="timeline">
        {data.map((bloc, index) => {
          direction = direction === 'left' ? 'right' : 'left';
          return <TimeLineBloc data={bloc} direction={direction} key={index} />;
        })}
      </div>
    </>
  );
}

function TimeLineBloc({ data, direction }) {
  return (
    <div className={`container ${direction}`}>
      {data.image && (
        <div className="image-container">
          <Image src={data.image} alt={data.title} width={data.imageWidth} height={data.imageHeight} />
        </div>
      )}
      <article className="content">
        <h2>{data.title}</h2>
        <p>{data.content}</p>
      </article>
    </div>
  );
}
