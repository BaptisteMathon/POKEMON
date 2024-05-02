// import { useState } from "react";

function PokemonPic(info){

    let pokemon = info.info
    let gen1;
    let gen2;
    let gen3;
    let gen4;
    let gen5;
    let gen6;

    if(pokemon.length !== 0){
        let currentPokemon = pokemon[0];
        let currentPokemonLowerCase = currentPokemon.toLowerCase()
    
        gen1 = "https://play.pokemonshowdown.com/sprites/gen1/" + currentPokemonLowerCase + ".png"
        gen2 = "https://play.pokemonshowdown.com/sprites/gen2/" + currentPokemonLowerCase + ".png"
        gen3 = "https://play.pokemonshowdown.com/sprites/gen3/" + currentPokemonLowerCase + ".png"
        gen4 = "https://play.pokemonshowdown.com/sprites/gen4/" + currentPokemonLowerCase + ".png"
        gen5 = "https://play.pokemonshowdown.com/sprites/gen5/" + currentPokemonLowerCase + ".png"
        gen6 = "https://play.pokemonshowdown.com/sprites/gen6/" + currentPokemonLowerCase + ".png"
    }

    return(
        <>
            <img src={gen1} alt=""/>
            <img src={gen2} alt=""/>
            <img src={gen3} alt=""/>
            <img src={gen4} alt=""/>
            <img src={gen5} alt=""/>
            <img src={gen6} alt=""/>
        </>
    )
}

export default PokemonPic;