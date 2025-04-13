import Post from '../Post/Post'
import ErrorBox from '../ErrorBox/ErrorBox'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import './styles.css'

function RedditsList(props) {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true);


    async function getData(url) {
        try {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`)
            }
            const json = await response.json()
            setData(json)
        } catch (error) {
            console.error(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        const url = `https://www.reddit.com/r/${props.selectedSubreddit}.json`
        getData(url)
    }, [props.query, props.selectedSubreddit])

    const filteredPosts = data?.data?.children?.filter((post) =>
        post.data.title.toLowerCase().includes(props.query.toLowerCase())
    );


    return (
        <main>
        {isLoading ? (
            <p></p> 
        ) : filteredPosts && filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
                <motion.div
                key={post.data.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Post data={post.data} />
            </motion.div>
            ))
        ) : (
            <ErrorBox setInputValue={props.setInputValue} setQuery={props.setQuery}/>
        )}
        </main>
    )
}

export default RedditsList