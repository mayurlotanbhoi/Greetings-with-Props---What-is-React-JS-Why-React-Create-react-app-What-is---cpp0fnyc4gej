// write code for Welcome component here

function Welcome(props){
    let student = props.name;

    return(
        <>
        <h1>Hey ! {student} </h1>
        <h2>Welcome to Newton School</h2>   
        </>
    )
    
}

export default Welcome;
