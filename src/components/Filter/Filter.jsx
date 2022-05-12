import PropTypes from "prop-types";

export const Filter = ({onChange, text}) =>{
    return (
        <>
        <p>Find contacts by name:</p>
        <input 
        type="text" 
        name="filter"
        value = {text}
        onChange={onChange}
        className="filter"
        />
        </>
    )
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
}