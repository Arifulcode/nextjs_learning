import Link from 'next/link'
import {useRouter} from 'next/router'
function Index(){
  const router =useRouter()
  const handleClick = ()=>{

    console.log('handle click function')
    router.push('/product')
    // router.replace('/product')
  }
    return (
      <div>
        <h2>Index page ( main or home )</h2>
        <Link href='/blog'>
            <h2>Blog</h2> 
        </Link>
        <Link href='/product'>
            <h2>Products</h2> 
        </Link>
        <button onClick={handleClick}> 
          replace order
        </button>
      </div>
    )
}
export default Index
