interface Props {
    name: string
    lastName: string
    children: React.ReactNode
}

export const Hello = (props: Props) =>  {
   
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