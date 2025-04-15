import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './styles.css'

function SearchBar(props) {

    function handleClick() {
        props.setQuery(props.inputValue)
    }

    function handleChange(e) {
        props.setInputValue(e.target.value)
    }
    
    return (
        <header className='header' data-testid='search-bar'>
            <figure className='logo'>
                <img className='logo-img' src="https://cdn-icons-png.flaticon.com/512/2504/2504787.png" alt='logo'/>
                <figcaption>CCReddit</figcaption>
            </figure>
            <form className='search-form' onSubmit={e => e.preventDefault()}>
                <input type='text' placeholder='Search' className='search-input' onChange={handleChange} value={props.inputValue} data-testid='text-input'/>
                <button type='button' className='search-icon' onClick={handleClick}><FontAwesomeIcon icon={faSearch} /></button>
            </form>
        </header>
    )
}


export default SearchBar