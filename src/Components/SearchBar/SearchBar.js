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
        <header className='header'>
            <figure className='logo'> Logo</figure>
            <form className='search-form' onSubmit={e => e.preventDefault()}>
                <input type='text' placeholder='Search' className='search-input' onChange={handleChange} value={props.inputValue} />
                <button type='button' className='search-icon' onClick={handleClick}><FontAwesomeIcon icon={faSearch} /></button>
            </form>
        </header>
    )
}


export default SearchBar