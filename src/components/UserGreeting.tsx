export const UserGreeting = () => {
    const isLoggedIn = true
    return <div> <h6>Welcome {isLoggedIn ? 'sunshine' : 'snowflakes'}</h6> </div>
}