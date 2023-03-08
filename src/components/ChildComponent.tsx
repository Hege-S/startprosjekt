export const ChildComponent = (props:any) => {
    return (
        <div>
            <button onClick={ () => props.greetHandler('shine', 'snowman')}> Sun </button>
        </div>
    )
}