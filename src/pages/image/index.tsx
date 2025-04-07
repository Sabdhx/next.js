import React from 'react'
import Image from "next/image";


function Index() {
  const imageLoader = ({ src, width, quality }: any) => {
    return `https://images.unsplash.com/photo-1741514374526-8bc710b6b312?w=${width}&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8`;
  };
  return (
    <div>
       <Image
        loader={imageLoader}
        src={`https://images.unsplash.com/photo-1741514374526-8bc710b6b312`}
        alt="there is an error loading image"
        width={2000}
        height={200}
      />
    </div>
  )
}

export default Index