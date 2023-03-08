import {useState, useEffect} from 'react'

export const PostList:any = () => {
    const [posts, setPosts] = useState<any[]>([])
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                setPosts(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
    <div>
        {<ul>
            {posts.map((post) => {
                return <li key={post.id}> {post.title} </li>
            })}
        </ul>}
    </div>
    )
}