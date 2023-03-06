export const Hello = (props:any) =>  {
   
    return (
    <div>
        <h2>
            Hello {props.name}  {props.lastName}!
        </h2>
        {props.children}
    </div>
    )
}

/* export default Hello */