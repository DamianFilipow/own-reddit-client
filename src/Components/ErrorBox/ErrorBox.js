

import './styles.css'

function ErrorBox(props) {


    function handleClick() {
        props.setInputValue('')
        props.setQuery('')
    }

    return (
        <div className='error-box'>
            <p>No matching records</p>
            <button type='button' className='error-button' onClick={handleClick}>Return Home</button>
        </div>
    )
}

export default ErrorBox