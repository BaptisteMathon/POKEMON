import { useState, useEffect } from "react";
import DetailPokemonnn from "./DetailPokemonnn";
import PokemonPic from "./PokemonPic";

function Pokemon() {
    const [pokemon, setPokemon] = useState([]);
    const [detailPokemon, setDetailPokemon] = useState([]);

    let currentPokemon = "";

    if(pokemon.length !== 0){
        currentPokemon = pokemon[0]
    }

    useEffect(() => {
        // console.log("Le tableau pokemon a changé: ", pokemon)
    }, [pokemon]);

    useEffect(() => {
        // console.log("Le tableau detailPokemon a changé: ", detailPokemon);
    }, [detailPokemon])

    function addPokemon() {
        fetch("https://pokemon-database-ten.vercel.app/random")
        .then((response) => response.json())
        .then((data) => {
            if (pokemon.length < 6) {
                pokemon.push(data[' Name'])
                setPokemon(pokemon)

                let Moves = data.Moves.replace('[', '').replace(']', '').replaceAll("'", '').split(', ')

                let detailPok = [data[' Name'], data.Types, Moves[0], Moves[1], Moves[2], Moves[3], data.HP, data.Attack, data.Defense]
                setDetailPokemon((prevDetailPokemon) => [...prevDetailPokemon, detailPok]);
            }
        })
        .catch((error) => console.log(error));
    }
    
    function ChangePokemon(identifiant){
        let ind = identifiant.target.id
        let temp = pokemon[ind]
        let newPokemon = [...pokemon]
        newPokemon.splice(ind, 1)
        newPokemon.unshift(temp)

        setPokemon(newPokemon)
    }
    const affichagePokemon = pokemon.map((pok, index) => <li id={index} onClick={ChangePokemon} style={{cursor: 'pointer', 'margin-bottom': '10px'}}>{pok}</li>);

    function restart(){
        window.location.reload()
    }
    
        
    return (
        
        <div style={{display: 'flex', justifyContent: 'space-between', margin: '15px'}}>

            <div id="body">
                <button id="deleteButton" onClick={addPokemon}>Ajouter un Pokémon</button>
                <br />
                <div style={{background: 'rgba(255, 255, 255, 0.7)', padding: '10px 50px 10px 10px', margin: '10px 0'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <h2>Pokémon Actuel: </h2>
                        <b style={{marginLeft: '15px', color: 'green'}}>{currentPokemon} </b>
                    </div>
                    <div>
                        <PokemonPic info={pokemon}/>
                    </div>
                    <DetailPokemonnn DetailPokemon2={detailPokemon} CurrentPokemon2={pokemon}/>
                </div>
                
                <div style={{background: 'rgba(255, 255, 255, 0.5)', padding: '10px'}}>
                    <h2>Autres Pokémons:</h2>
                    <ul>
                        {affichagePokemon}
                    </ul>
                </div>
            </div>
            <div id="restart" style={{display: "none", margin: '0 auto', marginTop: '5%', flexDirection: 'column', alignItems: 'center', background: 'rgb(0, 0, 0, 0.6)', padding: '0 10%', borderRadius: '5px'}}>
                <p style={{background: 'white', padding: '3px 10px', borderRadius: '10px', fontSize: '20px'}}>GG Vous avez gagné</p>
                <p onClick={restart} style={{color: 'white', background: 'orange', fontSize: "50px", padding: '5px 30px', borderRadius: '15px', cursor: 'pointer'}}>
                    RECOMMENCER
                </p>
            </div>
            <div id="lose" style={{display: "none", margin: '0 auto', marginTop: '5%', flexDirection: 'column', alignItems: 'center', background: 'rgb(0, 0, 0, 0.6)', padding: '0 10%', borderRadius: '5px'}}>
                <p style={{background: 'white', padding: '3px 10px', borderRadius: '10px', fontSize: '20px'}}>Vous avez perdu</p>
                <p onClick={restart} style={{color: 'white', background: 'orange', fontSize: "50px", padding: '5px 30px', borderRadius: '15px', cursor: 'pointer'}}>
                    RECOMMENCER
                </p>
            </div>
        </div>
    );
}

export default Pokemon;
