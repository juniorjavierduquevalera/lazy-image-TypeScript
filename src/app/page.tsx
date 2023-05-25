'use client';
import { useState } from 'react';
import type { MouseEventHandler } from "react";
import {LazyImage } from '../components/RandomFox';
import { v4 as uuidv4 } from 'uuid';

type ImageItem = {
  id: string;
  url: string;
};

const Home: () => JSX.Element = () => {
  const random = () => Math.floor(Math.random() * 122) + 1;
  const generateUniqueId = (): string => `${uuidv4()}-${random()}`;
  const [images, setImages] = useState<Array<ImageItem>>([ ]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = () => {
    const newImageItem: ImageItem ={
      id: generateUniqueId (),
      url: `https://randomfox.ca/images/${random()}.jpg`
    };
    setImages([...images, newImageItem]);
  };

  return (
    <main className="flex flex-col items-center">
       <button
        onClick={addNewFox}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mb-4 mt-10"

      >
        Add new Image
      </button>
      {images.map(({ id, url }, index) => (
          <div className="p-4" key={id}>
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

