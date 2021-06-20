import React from 'react'
import { characters } from '../data/starWars'

const Main = () => {
    return (
        <div>
            <h1>Star Wars Characters</h1>
            {characters.map((character, index) => {
                console.log(character)
                return (
                    <div className="character" key={index}>
                        <h3>Name: {character.name} </h3>
                        <h3>Birth Year: {character.birth} </h3>
                        <h3>Height: {character.height} cm </h3>
                        { character.gender === "n/a" ? (
                            <h3>Gender: Character is a droid</h3>
                        ) : (
                            <h3>Gender: {character.gender}</h3>
                        )}
                        {/* {character.pic ? <img src={character.pic} /> : <h4>No picture available</h4> */}
                        <hr/>
                    </div>
                )
            })}  
        </div>
    )
}
 


export default Main