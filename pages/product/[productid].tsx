import {useRouter} from 'next/router'

function ProductDetails(){
    const router = useRouter()
    const ProductId = router.query.productid
    return <h2>Product Details page {ProductId}</h2>
}
export default ProductDetails