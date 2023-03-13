import {useState} from 'react';
import NAMES from './data.json';

export const DataQuery = () => {
const [query, setQuery] = useState('')
const changeHandler = (event:any) => {
  setQuery(event.target.value)
}
const filteredNames = NAMES.filter(item => {
  return item.firstName.includes(query) || item.lastName.includes(query)
})


return (
  
    <div>
      <input type='text' value={query} onChange={changeHandler}></input> {
        filteredNames.map((item) =>  (
          <p key={item.id}> {item.firstName} {item.lastName} </p>
        ))}
    </div>
)}