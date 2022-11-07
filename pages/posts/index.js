import Link from 'next/link'

function PostList({posts}){
    return (
        <>
            <h2>List of Posts</h2>
            {
                posts.map((post) => {
                    return(
                        <div key={post.id}>
                            <Link href={`posts/${post.id}`} passHref>
                                <h2>
                                    {post.id} {post.title}
                                </h2>
                            </Link>
                            <hr />
                        </div>
                    )
                })
            }
        </>
    )

}
export default PostList

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    console.log(data)

    return {
        props:{
            users:data.slice(0,3),
        },
    }
}