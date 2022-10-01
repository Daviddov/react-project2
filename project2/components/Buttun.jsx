function Button (props) {
    return ( 
        <button onClick ={props.hendelClick}>{props.name}</button>
     );
}

export default  Button;