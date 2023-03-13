import {useState} from 'react'

interface Props {
    className?: string
    inputClassName?: string
   /*  props1: string */
}

export const Form = ({ className /*, ...props  */}: Props) => {
    const [username, setUsername ] = useState('')

    const handleSubmit = (event:any) => {
        event.preventDefault()
        alert(`Hello ${username}`);
    
    }
    return (
        <form className={className} onSubmit={handleSubmit}>
            <div>
                <label> Name: </label>
                <input type="text"
               /*  {...props} */
                className= 'testInputForm'
                value={username} 
                onChange={(event:any) => setUsername(event.target.value)}/>

            </div>
            <div>
                <label>Check if you like</label>
                <input type='checkbox'></input>
                <input type='checkbox'></input>
                <input type='checkbox'></input>
            </div>
         
            <button type='submit'
            className='submitButton'>Submit to see </button>
        </form>
    )
}