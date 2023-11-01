import React from 'react'
import 'twin.macro'
import tw, { styled } from 'twin.macro'

interface GalleryProps {
  images: string[] // An array of image URLs
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div tw="bg-gradient-to-b from-purple-500 to-pink-500 py-8">
      <h2 tw="mb-4 text-center font-mono text-3xl text-white">Hall Of Fame</h2>
      <div tw="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <div key={index} tw="m-1 rounded-lg bg-white p-4 shadow-lg">
            <img src={image} alt={`Image ${index}`} tw="w-full" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
