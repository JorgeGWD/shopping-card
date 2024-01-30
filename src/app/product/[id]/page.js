import { data } from "@/app/services/data"
import Link from "next/link"
import Image from "next/image"

export default function ProductDetails({ params: { id } }) {
    const product = data.products.find(x => x.id === id)
    if(!product) {
        return <div>No se encuantra el producto</div>
    }

    return (
        <div>
            <div className='py-2'>
                <Link href='/'>Volver a pagina de produtos</Link>
            </div>
            <div className='grid md:grid-cols-4 md:gap-3'>
                <div className='md:col-span-2'>
                    <Image
                        src={product.image}
                        width={640}
                        height={640}
                        sizes='100vw'
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        alt={product.name}
                    >
                    </Image>
                </div>
                <div>
                    <h1 className='text-lg'>{product.name}</h1>
                    <hr className='my-3'/>
                    <h2>Descripción</h2>
                    <p>{product.description}</p>
                </div>
                <div>
                    <div className='card p-5'>
                        <div className='mb-2 flex justify-between'>
                            <p>Precio</p>
                            <p>${product.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
