function Button({ label, onClick, color}) {
    return(
        <button 
            onClick={onClick}
            className={`btn btn-${color}`}
            style={{margin: '5px'}}
        >
            {label}
        </button>
    )
}

export default Button;