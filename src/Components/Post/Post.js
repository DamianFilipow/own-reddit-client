
import './styles.css'

function Post(props) {


    return (
        <section className='post'>
            <aside className='score'>
                <i className='arrow up'></i>
                <p>{props.data.score}</p>
                <i className='arrow down'></i>
            </aside>
            <div className='post-container'>
                <article className='post-data'>
                    <h1>{props.data.title}</h1>
                    <img className='thumbnail' src={props.data.url_overridden_by_dest} alt='thumbnail'/>
                </article>
                <hr className='line-break'></hr>
                <footer>
                    <p className='author'>{props.data.author}</p>
                </footer>
            </div>
        </section>
    )
}

export default Post