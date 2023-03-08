import {useState, useEffect} from 'react'

export const PostList:any = () => {
    const [posts, setPosts] = useState<any[]>([])
    const startingLetter = 's'
    const filteredTitles = posts.filter((post) => post.title.startsWith(startingLetter))
    
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
        {<ol>
            {filteredTitles.map((post) => {
                return <li key={post.id}> {post.title} </li>
            })}
        </ol>}
    </div>
    )
}