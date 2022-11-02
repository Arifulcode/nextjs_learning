import {useRouter} from 'next/router'

function Review(){

    const router = useRouter()
    const { productId, reviewId } = router.query

    return (
        <h2>
            Review id {reviewId} for Product id {productId}
        </h2>
    )
    
     
}
export default Review