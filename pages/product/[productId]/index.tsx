import {useRouter} from 'next/router'

function ProductDetails(){
    const router = useRouter()
    const ProductId = router.query.productId
    return <h2>Product Details page {ProductId}</h2>
}
export default ProductDetails