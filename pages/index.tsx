import Link from 'next/link'
function Index(){
    return (
      <div>
        <h2>Index page ( main or home )</h2>
        <Link href='/blog'>
            <h2>Blog</h2> 
        </Link>
        <Link href='/product'>
            <h2>Product</h2> 
        </Link>
      </div>
    )
}
export default Index
