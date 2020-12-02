import React, {useState, useEffect} from 'react';

const Example = (props) => {
    const [people, setPeople] = useState([]);
    
    
    const onClick = () =>{
        <div>
            {people.length > 0 && people.map((person, index)=>{
                return (<div key={index}>{person.name}</div>)
            })}
        </div>
    }

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
            .then(response => response.json())
            .then(response => setPeople(response.results))
    }, []);
 
    return (
        <button onClick={onClick}>Click Pokemon</button>
    )
}
export default Example;