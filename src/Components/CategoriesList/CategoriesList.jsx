
import './styles.css'

function CategoriesList(props) {


    const iconMap = {
        popular: 'https://b.thumbs.redditmedia.com/iTldIIlQVSoH6SPlH9iiPZZVzFWubJU7cOM__uqSOqU.png',
        funny: 'https://a.thumbs.redditmedia.com/kIpBoUR8zJLMQlF8azhN-kSBsjVUidHjvZNLuHDONm8.png',
        askReddit: 'https://b.thumbs.redditmedia.com/LSHrisQApf1H5F8nWShTx3_KjTOMc3R_ss3kx3XAyXQ.png',
        gaming: 'https://b.thumbs.redditmedia.com/iTldIIlQVSoH6SPlH9iiPZZVzFWubJU7cOM__uqSOqU.png',
        aww: 'https://a.thumbs.redditmedia.com/A71uOuvJLekakhm6d5jn3SPO2R7IezsXTT72Fq98J30.png',
        music: 'https://b.thumbs.redditmedia.com/PEWyzBXzK1xSBEI_dbUx9yijATp_G1lyUrn1TSMPwCY.png',
        pics: 'https://b.thumbs.redditmedia.com/VZX_KQLnI1DPhlEZ07bIcLzwR1Win808RIt7zm49VIQ.png',
        science: 'https://b.thumbs.redditmedia.com/pkTkSME-lKZcgYyhnOLC5Byj_5SgU5G4B4u1td1F-4Y.png',
        worldnews: 'https://b.thumbs.redditmedia.com/iTldIIlQVSoH6SPlH9iiPZZVzFWubJU7cOM__uqSOqU.png',
        videos: 'https://b.thumbs.redditmedia.com/uzAOgdCtLKNxNqirjgcwrJkpWHtTDzIr7L3vnhOMF2o.png',
        todayilearned: 'https://b.thumbs.redditmedia.com/B7IpR8P1mEsQIjdizK5x79s5aGfJUtKk3u2ksGZ9n2Q.png',
        movies: 'https://b.thumbs.redditmedia.com/iTldIIlQVSoH6SPlH9iiPZZVzFWubJU7cOM__uqSOqU.png',
        news: 'https://a.thumbs.redditmedia.com/E0Bkwgwe5TkVLflBA7WMe9fMSC7DV2UOeff-UpNJeb0.png',
        showerthoughts: 'https://b.thumbs.redditmedia.com/v_uSt6e3sXP-iE0sXUrUSYUXNytWo-QlpzMq0KEs4uU.png',
        earthPorn: 'https://a.thumbs.redditmedia.com/4Au-rWJ7rUqSTMN09zEXEdpicCS4lnNynf-NXrTxm88.png',
        IAmA: 'https://b.thumbs.redditmedia.com/QezhBu7miIfRWmmgBFQ1Fve3ygXz_tgmV5YbMWfEMls.png',
        food: 'https://a.thumbs.redditmedia.com/bDWcvO6mkX1TIcTnrO-N-5QJPUaWaq6nnQFel3kywD8.png',
        space: 'https://b.thumbs.redditmedia.com/Zf90LsQEOyfU9RKf5NgXRATeMlFHULaD-B6UlicR5Sc.png',
        askscience: 'https://b.thumbs.redditmedia.com/VXukRtebQAtdj6BUMLlOjCh3XnLH9_oScHxsDJ-vsio.png',
        explainlikeimfive: 'https://a.thumbs.redditmedia.com/KZESzgF91cP3KEAR29JhCFmX0zxsPgY1sYhv7XCtiW0.png',
        books: 'https://a.thumbs.redditmedia.com/8rHqHJ86uZ8iHfejG2zZbLX9ThOAZUzCVOwgms0KCq4.png',
        television: 'https://b.thumbs.redditmedia.com/QMIQ5gvIbScACusodipJ1IXr8ntnfn1V17RZ57L4CdU.png',
        sports: 'https://b.thumbs.redditmedia.com/V3oOhkQE_SiCz2dvI2uA7TlbcfvaIMPw2AQjtIdqMUk.png',
        technology: 'https://b.thumbs.redditmedia.com/J_fCwTYJkoM-way-eaOHv8AOHoF_jNXNqOvPrQ7bINY.png',
      };

    function getIconUrl(subreddit) {
        return iconMap[subreddit]
    }


    function handleClick(e) {
        props.setSubreddit(e.target.value)
    }


    return (
        <aside className='categories-list' data-testid='categories-list'>
            <h1 className='subreddits-title'>Subreddits</h1>
            <ul>
                {['popular', 'funny', 'askReddit', 'gaming', 'aww', 'music', 'pics', 'science', 'worldnews', 'videos', 'todayilearned', 'movies', 'news', 'showerthoughts', 'earthPorn', 'IAmA', 'food', 'space', 'askscience', 'explainlikeimfive', 'books', 'television', 'sports', 'technology'].map((subreddit) => (
                    <li key={subreddit} className='category-item'>
                        <button
                            className={props.selectedSubreddit === subreddit ? 'selected': 'notSelected'}
                            type='button'
                            value={subreddit}
                            onClick={handleClick}
                        >
                            <img className='icon' src={getIconUrl(subreddit)} alt={`${subreddit} reddit icon`} />
                            {subreddit}
                        </button>   
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default CategoriesList