import React from 'react'
import Image from 'next/image'

const page = async ({searchParams}: {searchParams: {id: number; image: string}}) => {
    const data = await fetch(`https://fakestoreapi.com/products/${searchParams.id}`)
    const response = await data.json()
    console.log(response);
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 p-4">
  <div className="card lg:card-side bg-white shadow-2xl rounded-lg overflow-hidden max-w-3xl p-11">
    <figure className="w-full lg:w-1/3">
      <Image
        src={response.image}
        width={192} 
        height={192}
        alt="product"
        className="object-cover w-full h-auto"
      />
    </figure>
    <div className="card-body p-6 lg:w-2/3">
      <h2 className="card-title text-2xl font-bold text-gray-800">{response.title}</h2>
      <p className="text-gray-600 text-sm mt-2">{response.description}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-lg font-semibold text-green-600">${response.price}</span>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Buy Now
        </button>
      </div>
    </div>
  </div>
</div>


  )
}

export default page



