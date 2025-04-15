
import './styles.css'

function Post({ data }) {

    const timeAgo = new Date(data.created_utc * 1000).toLocaleString();
    const postHint = data.post_hint;
    const previewUrl = data.preview?.images?.[0]?.source?.url?.replace(/&amp;/g, '&');
    const fallbackVideo = data.media?.reddit_video?.fallback_url;
    const isRedditVideo = postHint === 'hosted:video' && fallbackVideo;
    const isGifLikeVideo = isRedditVideo && data.media.reddit_video.is_gif;
    const isActualGif = previewUrl?.endsWith('.gif');
    const isImage = postHint === 'image' && previewUrl && !isActualGif;
    const isYouTube = postHint === 'rich:video' && data.media?.oembed?.provider_name === 'YouTube';
  
    return (
      <section className='post' data-testid='post'>
        <aside className='score'>
          <i className='arrow up'></i>
          <p>{data.score}</p>
          <i className='arrow down'></i>
        </aside>
        <div className='post-container'>
          <article className='post-data'>
            <h1>{data.title}</h1>
  
            {!isGifLikeVideo && isRedditVideo && (
              <video className='thumbnail' controls>
                <source src={fallbackVideo} type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            )}
  
            {isActualGif && (
              <img className='thumbnail' src={previewUrl} alt={data.category}/>
            )}
  
            {isImage && (
              <img className='thumbnail' src={previewUrl} alt={data.category}/>
            )}
  
            {isYouTube && (
              <iframe
                className='thumbnail'
                width="100%"
                height="900"
                src={`https://www.youtube.com/embed/${data.url.split('v=')[1]}`}
                title={data.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
  
            {!isRedditVideo && !isGifLikeVideo && !isActualGif && !isImage && !isYouTube && (
              <p>{data.selftext}</p>
            )}
            
          </article>
          <hr className='line-break' />
          <footer>
            <p className='author'>{data.author}</p>
            <p className='created'>Created at: {timeAgo}</p>
          </footer>
        </div>
      </section>
    );
  }

export default Post