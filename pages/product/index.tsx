import Link from 'next/link'
function ProductList({productId=100 }){
    return (
        <>
        <h2>
           <Link href='/'>
                home
            </Link> 
        </h2>
        <h2>
           <Link href='/product/1'>
                Product 1
            </Link> 
        </h2>
        <h2>
           <Link href='/product/2'>
                Product 2
            </Link> 
        </h2>
        <h2>
           <Link href='/product/3'>
                Product 3
            </Link> 
        </h2>
        <h2>
           <Link href={`/product/${productId}`}>
                <h1>Product {productId}</h1>
            </Link> 
        </h2>
        
            {/* <h3>product 1</h3>
            <h3>product 2</h3>
            <h3>product 3</h3> */}
        </>
    )
}
export default ProductList