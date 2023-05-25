'use client';
import { useState } from 'react';
import type { MouseEventHandler } from "react";
import {LazyImage } from '../components/RandomFox';


type ImageItem = {
  id: string;
  url: string;
};

// generate simple unique id
const generateId = (): string => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};


const Home: () => JSX.Element = () => {
  const random = () => Math.floor(Math.random() * 122) + 1;

  const [images, setImages] = useState<Array<ImageItem>>([ ]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = () => {
    const newImageItem: ImageItem ={
      id: generateId(),
      url: `https://randomfox.ca/images/${random()}.jpg`
    };
    setImages([...images, newImageItem]);
  };

  return (
    <main className="flex flex-col items-center">
       <button
        onClick={addNewFox}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-md mb-4 fixed top-0 left-0 right-0 mx-auto w-80"

      >
        Add new Image
      </button>
      {images.map(({ id, url }, index) => (
          <div className="p-4 mt-24" key={id}>
            <LazyImage
              src={url}
              width="320"
              height="auto"
              className="mx-auto rounded-md bg-gray-300"
              onClick={() => {
                console.log("click");
              }}
              onLazyLoad={(img) => {
                console.log(`Image #${index + 1} cargada. Nodo:`, img);
              }}
            />
          </div>
        ))}
    </main>
  );
};

export default Home;

