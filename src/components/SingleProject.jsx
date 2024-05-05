function Single(props){
    const imageStyle={
        height: "auto",
        width: "100%"
    };
    const centered = {
        textAlign: "center"
      };
    return(
        <section style={centered}>
            <img src={props.image} alt={props.name} style={imageStyle} />        
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </section>
    )
}
export default Single;