export const ClickHandler = () => {
    

    const clickHandler = (event: any) => {
        console.log('snowflakes', event)
    }
    return <div>
        <button onClick={clickHandler}></button>
    </div>
}