import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Products({ product }) {
    return (
        <div className='card'>
            <Link href={`/product/${product.id}`}>
                <Image
                    className='rounded shadow object-cover h-96 w-full'
                    src={product.image}
                    width={400}
                    height={400}
                    alt={product.name}
                />
            </Link>
            <div className='flex flex-col items-center justify-center p-5'>
                <Link href={`product/${product.id}`}>
                    <h2 className='text-lg'>{product.name}</h2>
                </Link>
                <p>${product.price}</p>
                <button>Añadir al carrito</button>
            </div>
        </div>
    )
}
