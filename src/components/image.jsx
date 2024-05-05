function Image(props){
    const style={
        maxHeight: "400px",
        width: "auto",
        borderRadius: "50%"
    };
    return(
        <>
        <img src={props.image} alt={props.alt} style={style} />
        <h3>{props.title}</h3>
        </>
    )
}
export default Image;