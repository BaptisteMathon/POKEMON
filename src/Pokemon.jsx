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

    function AddPokemonGrass() {
        fetch(process.env.REACT_APP_URL + "/random/Grass")
        .then((response) => response.json())
        .then((data) => {
            if (pokemon.length < 6) {
                pokemon.push(data[' Name'])
                setPokemon(pokemon)

                let Moves = data.Moves.replace('[', '').replace(']', '').replaceAll("'", '').split(', ')

                let detailPok = [data[' Name'], data.Types, Moves[0], Moves[1], Moves[2], Moves[3], data.HP, data.Attack, data.Defense]
                setDetailPokemon((prevDetailPokemon) => [...prevDetailPokemon, detailPok]);

                if (pokemon.length === 6){
                    document.getElementById("body").style.display = "block"
                    document.getElementById("ChoosePokemon").style.display = "none"
                }
            }
        })
        .catch((error) => console.log(error));
    }

    function AddPokemonIce() {
        fetch(process.env.REACT_APP_URL + "/random/Ice")
        .then((response) => response.json())
        .then((data) => {
            if (pokemon.length < 6) {
                pokemon.push(data[' Name'])
                setPokemon(pokemon)

                let Moves = data.Moves.replace('[', '').replace(']', '').replaceAll("'", '').split(', ')

                let detailPok = [data[' Name'], data.Types, Moves[0], Moves[1], Moves[2], Moves[3], data.HP, data.Attack, data.Defense]
                setDetailPokemon((prevDetailPokemon) => [...prevDetailPokemon, detailPok]);

                if (pokemon.length === 6){
                    document.getElementById("body").style.display = "block"
                    document.getElementById("ChoosePokemon").style.display = "none"
                }
            }
        })
        .catch((error) => console.log(error));
    }

    function AddPokemonPsychic() {
        fetch(process.env.REACT_APP_URL + "/random/Psychic")
        .then((response) => response.json())
        .then((data) => {
            if (pokemon.length < 6) {
                pokemon.push(data[' Name'])
                setPokemon(pokemon)

                let Moves = data.Moves.replace('[', '').replace(']', '').replaceAll("'", '').split(', ')

                let detailPok = [data[' Name'], data.Types, Moves[0], Moves[1], Moves[2], Moves[3], data.HP, data.Attack, data.Defense]
                setDetailPokemon((prevDetailPokemon) => [...prevDetailPokemon, detailPok]);

                if (pokemon.length === 6){
                    document.getElementById("body").style.display = "block"
                    document.getElementById("ChoosePokemon").style.display = "none"
                }
            }
        })
        .catch((error) => console.log(error));
    }

    function AddPokemonDark() {
        fetch(process.env.REACT_APP_URL + "/random/Dark")
        .then((response) => response.json())
        .then((data) => {
            if (pokemon.length < 6) {
                pokemon.push(data[' Name'])
                setPokemon(pokemon)

                let Moves = data.Moves.replace('[', '').replace(']', '').replaceAll("'", '').split(', ')

                let detailPok = [data[' Name'], data.Types, Moves[0], Moves[1], Moves[2], Moves[3], data.HP, data.Attack, data.Defense]
                setDetailPokemon((prevDetailPokemon) => [...prevDetailPokemon, detailPok]);

                if (pokemon.length === 6){
                    document.getElementById("body").style.display = "block"
                    document.getElementById("ChoosePokemon").style.display = "none"
                }
            }
        })
        .catch((error) => console.log(error));
    }

    function AddPokemonBug() {
        fetch(process.env.REACT_APP_URL + "/random/Bug")
        .then((response) => response.json())
        .then((data) => {
            if (pokemon.length < 6) {
                pokemon.push(data[' Name'])
                setPokemon(pokemon)

                let Moves = data.Moves.replace('[', '').replace(']', '').replaceAll("'", '').split(', ')

                let detailPok = [data[' Name'], data.Types, Moves[0], Moves[1], Moves[2], Moves[3], data.HP, data.Attack, data.Defense]
                setDetailPokemon((prevDetailPokemon) => [...prevDetailPokemon, detailPok]);

                if (pokemon.length === 6){
                    document.getElementById("body").style.display = "block"
                    document.getElementById("ChoosePokemon").style.display = "none"
                }
            }
        })
        .catch((error) => console.log(error));
    }

    function AddPokemonSteel() {
        fetch(process.env.REACT_APP_URL + "/random/Steel")
        .then((response) => response.json())
        .then((data) => {
            if (pokemon.length < 6) {
                pokemon.push(data[' Name'])
                setPokemon(pokemon)

                let Moves = data.Moves.replace('[', '').replace(']', '').replaceAll("'", '').split(', ')

                let detailPok = [data[' Name'], data.Types, Moves[0], Moves[1], Moves[2], Moves[3], data.HP, data.Attack, data.Defense]
                setDetailPokemon((prevDetailPokemon) => [...prevDetailPokemon, detailPok]);

                if (pokemon.length === 6){
                    document.getElementById("body").style.display = "block"
                    document.getElementById("ChoosePokemon").style.display = "none"
                }
            }
        })
        .catch((error) => console.log(error));
    }

    function AddPokemonGhost() {
        fetch(process.env.REACT_APP_URL + "/random/Ghost")
        .then((response) => response.json())
        .then((data) => {
            if (pokemon.length < 6) {
                pokemon.push(data[' Name'])
                setPokemon(pokemon)

                let Moves = data.Moves.replace('[', '').replace(']', '').replaceAll("'", '').split(', ')

                let detailPok = [data[' Name'], data.Types, Moves[0], Moves[1], Moves[2], Moves[3], data.HP, data.Attack, data.Defense]
                setDetailPokemon((prevDetailPokemon) => [...prevDetailPokemon, detailPok]);

                if (pokemon.length === 6){
                    document.getElementById("body").style.display = "block"
                    document.getElementById("ChoosePokemon").style.display = "none"
                }
            }
        })
        .catch((error) => console.log(error));
    }

    function AddPokemonRock() {
        fetch(process.env.REACT_APP_URL + "/random/Rock")
        .then((response) => response.json())
        .then((data) => {
            if (pokemon.length < 6) {
                pokemon.push(data[' Name'])
                setPokemon(pokemon)

                let Moves = data.Moves.replace('[', '').replace(']', '').replaceAll("'", '').split(', ')

                let detailPok = [data[' Name'], data.Types, Moves[0], Moves[1], Moves[2], Moves[3], data.HP, data.Attack, data.Defense]
                setDetailPokemon((prevDetailPokemon) => [...prevDetailPokemon, detailPok]);

                if (pokemon.length === 6){
                    document.getElementById("body").style.display = "block"
                    document.getElementById("ChoosePokemon").style.display = "none"
                }
            }
        })
        .catch((error) => console.log(error));
    }

    function AddPokemonFlying() {
        fetch(process.env.REACT_APP_URL + "/random/Flying")
        .then((response) => response.json())
        .then((data) => {
            if (pokemon.length < 6) {
                pokemon.push(data[' Name'])
                setPokemon(pokemon)

                let Moves = data.Moves.replace('[', '').replace(']', '').replaceAll("'", '').split(', ')

                let detailPok = [data[' Name'], data.Types, Moves[0], Moves[1], Moves[2], Moves[3], data.HP, data.Attack, data.Defense]
                setDetailPokemon((prevDetailPokemon) => [...prevDetailPokemon, detailPok]);

                if (pokemon.length === 6){
                    document.getElementById("body").style.display = "block"
                    document.getElementById("ChoosePokemon").style.display = "none"
                }
            }
        })
        .catch((error) => console.log(error));
    }

    function AddPokemonNormal() {
        fetch(process.env.REACT_APP_URL + "/random/Normal")
        .then((response) => response.json())
        .then((data) => {
            if (pokemon.length < 6) {
                pokemon.push(data[' Name'])
                setPokemon(pokemon)

                let Moves = data.Moves.replace('[', '').replace(']', '').replaceAll("'", '').split(', ')

                let detailPok = [data[' Name'], data.Types, Moves[0], Moves[1], Moves[2], Moves[3], data.HP, data.Attack, data.Defense]
                setDetailPokemon((prevDetailPokemon) => [...prevDetailPokemon, detailPok]);

                if (pokemon.length === 6){
                    document.getElementById("body").style.display = "block"
                    document.getElementById("ChoosePokemon").style.display = "none"
                }
            }
        })
        .catch((error) => console.log(error));
    }

    function AddPokemonWater() {
        fetch(process.env.REACT_APP_URL + "/random/Water")
        .then((response) => response.json())
        .then((data) => {
            if (pokemon.length < 6) {
                pokemon.push(data[' Name'])
                setPokemon(pokemon)

                let Moves = data.Moves.replace('[', '').replace(']', '').replaceAll("'", '').split(', ')

                let detailPok = [data[' Name'], data.Types, Moves[0], Moves[1], Moves[2], Moves[3], data.HP, data.Attack, data.Defense]
                setDetailPokemon((prevDetailPokemon) => [...prevDetailPokemon, detailPok]);

                if (pokemon.length === 6){
                    document.getElementById("body").style.display = "block"
                    document.getElementById("ChoosePokemon").style.display = "none"
                }
            }
        })
        .catch((error) => console.log(error));
    }

    function AddPokemonDragon() {
        fetch(process.env.REACT_APP_URL + "/random/Dragon")
        .then((response) => response.json())
        .then((data) => {
            if (pokemon.length < 6) {
                pokemon.push(data[' Name'])
                setPokemon(pokemon)

                let Moves = data.Moves.replace('[', '').replace(']', '').replaceAll("'", '').split(', ')

                let detailPok = [data[' Name'], data.Types, Moves[0], Moves[1], Moves[2], Moves[3], data.HP, data.Attack, data.Defense]
                setDetailPokemon((prevDetailPokemon) => [...prevDetailPokemon, detailPok]);

                if (pokemon.length === 6){
                    document.getElementById("body").style.display = "block"
                    document.getElementById("ChoosePokemon").style.display = "none"
                }
            }
        })
        .catch((error) => console.log(error));
    }

    function AddPokemonFairy() {
        fetch(process.env.REACT_APP_URL + "/random/Fairy")
        .then((response) => response.json())
        .then((data) => {
            if (pokemon.length < 6) {
                pokemon.push(data[' Name'])
                setPokemon(pokemon)

                let Moves = data.Moves.replace('[', '').replace(']', '').replaceAll("'", '').split(', ')

                let detailPok = [data[' Name'], data.Types, Moves[0], Moves[1], Moves[2], Moves[3], data.HP, data.Attack, data.Defense]
                setDetailPokemon((prevDetailPokemon) => [...prevDetailPokemon, detailPok]);

                if (pokemon.length === 6){
                    document.getElementById("body").style.display = "block"
                    document.getElementById("ChoosePokemon").style.display = "none"
                }
            }
        })
        .catch((error) => console.log(error));
    }
    
    function AddPokemonPoison() {
        fetch(process.env.REACT_APP_URL + "/random/Poison")
        .then((response) => response.json())
        .then((data) => {
            if (pokemon.length < 6) {
                pokemon.push(data[' Name'])
                setPokemon(pokemon)

                let Moves = data.Moves.replace('[', '').replace(']', '').replaceAll("'", '').split(', ')

                let detailPok = [data[' Name'], data.Types, Moves[0], Moves[1], Moves[2], Moves[3], data.HP, data.Attack, data.Defense]
                setDetailPokemon((prevDetailPokemon) => [...prevDetailPokemon, detailPok]);

                if (pokemon.length === 6){
                    document.getElementById("body").style.display = "block"
                    document.getElementById("ChoosePokemon").style.display = "none"
                }
            }
        })
        .catch((error) => console.log(error));
    }

    function AddPokemonElectric() {
        fetch(process.env.REACT_APP_URL + "/random/Electric")
        .then((response) => response.json())
        .then((data) => {
            if (pokemon.length < 6) {
                pokemon.push(data[' Name'])
                setPokemon(pokemon)

                let Moves = data.Moves.replace('[', '').replace(']', '').replaceAll("'", '').split(', ')

                let detailPok = [data[' Name'], data.Types, Moves[0], Moves[1], Moves[2], Moves[3], data.HP, data.Attack, data.Defense]
                setDetailPokemon((prevDetailPokemon) => [...prevDetailPokemon, detailPok]);

                if (pokemon.length === 6){
                    document.getElementById("body").style.display = "block"
                    document.getElementById("ChoosePokemon").style.display = "none"
                }
            }
        })
        .catch((error) => console.log(error));
    }

    function AddPokemonFire() {
        fetch(process.env.REACT_APP_URL + "/random/Fire")
        .then((response) => response.json())
        .then((data) => {
            if (pokemon.length < 6) {
                pokemon.push(data[' Name'])
                setPokemon(pokemon)

                let Moves = data.Moves.replace('[', '').replace(']', '').replaceAll("'", '').split(', ')

                let detailPok = [data[' Name'], data.Types, Moves[0], Moves[1], Moves[2], Moves[3], data.HP, data.Attack, data.Defense]
                setDetailPokemon((prevDetailPokemon) => [...prevDetailPokemon, detailPok]);

                if (pokemon.length === 6){
                    document.getElementById("body").style.display = "block"
                    document.getElementById("ChoosePokemon").style.display = "none"
                }
            }
        })
        .catch((error) => console.log(error));
    }

    function AddPokemonGround() {
        fetch(process.env.REACT_APP_URL + "/random/Ground")
        .then((response) => response.json())
        .then((data) => {
            if (pokemon.length < 6) {
                pokemon.push(data[' Name'])
                setPokemon(pokemon)

                let Moves = data.Moves.replace('[', '').replace(']', '').replaceAll("'", '').split(', ')

                let detailPok = [data[' Name'], data.Types, Moves[0], Moves[1], Moves[2], Moves[3], data.HP, data.Attack, data.Defense]
                setDetailPokemon((prevDetailPokemon) => [...prevDetailPokemon, detailPok]);

                if (pokemon.length === 6){
                    document.getElementById("body").style.display = "block"
                    document.getElementById("ChoosePokemon").style.display = "none"
                }
            }
        })
        .catch((error) => console.log(error));
    }
    
    function AddPokemonFighting() {
        fetch(process.env.REACT_APP_URL + "/random/Fighting")
        .then((response) => response.json())
        .then((data) => {
            if (pokemon.length < 6) {
                pokemon.push(data[' Name'])
                setPokemon(pokemon)

                let Moves = data.Moves.replace('[', '').replace(']', '').replaceAll("'", '').split(', ')

                let detailPok = [data[' Name'], data.Types, Moves[0], Moves[1], Moves[2], Moves[3], data.HP, data.Attack, data.Defense]
                setDetailPokemon((prevDetailPokemon) => [...prevDetailPokemon, detailPok]);

                if (pokemon.length === 6){
                    document.getElementById("body").style.display = "block"
                    document.getElementById("ChoosePokemon").style.display = "none"
                }
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

            <div id="ChoosePokemon" style={{background: 'rgba(255, 255, 255, 0.5)', padding: '10px', display: 'flex', flexDirection: 'column', margin: '0 auto'}}>
                <h1>Choisir 6 pokémons : </h1>
                <p>choisir un type : </p>
                <ul style={{listStyle: 'none'}}>
                    <button onClick={AddPokemonGrass}><li>Grass <img src="https://www.pokepedia.fr/images/c/cd/Miniature_Type_Plante_JCC.png?20151129194957" alt="" width={"40px"}/></li></button>
                    <button onClick={AddPokemonIce}><li>Ice <img src="https://www.pokepedia.fr/images/thumb/7/7b/Miniature_Type_Glace_Sleep.png/120px-Miniature_Type_Glace_Sleep.png?20230719111646" alt="" width={"40px"}/></li></button>
                    <button onClick={AddPokemonPsychic}><li>Psychic <img src="https://www.pokepedia.fr/images/e/e2/Miniature_Type_Psy_JCC.png?20151129194735" alt="" width={"40px"}/></li></button>
                    <button onClick={AddPokemonDark}><li>Dark <img src="https://www.pokepedia.fr/images/5/5a/Miniature_Type_Obscurit%C3%A9_JCC.png?20151129195021" alt="" width={"40px"}/></li></button>
                    <button onClick={AddPokemonBug}><li>Bug <img src="https://www.pokepedia.fr/images/thumb/6/66/Miniature_Type_Insecte_Sleep.png/120px-Miniature_Type_Insecte_Sleep.png?20230719111827" alt="" width={"40px"}/></li></button>
                    <button onClick={AddPokemonSteel}><li>Steel <img src="https://www.pokepedia.fr/images/f/f9/Miniature_Type_M%C3%A9tal_JCC.png?20110929235714" alt="" width={"40px"}/></li></button>
                    <button onClick={AddPokemonGhost}><li>Ghost <img src="https://www.pokepedia.fr/images/thumb/6/61/Miniature_Type_Spectre_Sleep.png/120px-Miniature_Type_Spectre_Sleep.png?20230719111908" alt=""width={"40px"} /></li></button>
                    <button onClick={AddPokemonRock}><li>Rock <img src="https://www.pokepedia.fr/images/thumb/f/fe/Miniature_Type_Roche_Sleep.png/120px-Miniature_Type_Roche_Sleep.png?20230719111846" alt="" width={"40px"}/></li></button>
                    <button onClick={AddPokemonFlying}><li>Flying <img src="https://www.pokepedia.fr/images/thumb/1/1a/Miniature_Type_Vol_Sleep.png/120px-Miniature_Type_Vol_Sleep.png?20230719111755" alt="" width={"40px"}/></li></button>
                    <button onClick={AddPokemonNormal}><li>Normal <img src="https://www.pokepedia.fr/images/thumb/a/ad/Miniature_Type_Normal_Sleep.png/120px-Miniature_Type_Normal_Sleep.png?20230719110627" alt="" width={"40px"}/></li></button>
                    <button onClick={AddPokemonWater}><li>Water <img src="https://www.pokepedia.fr/images/9/98/Miniature_Type_Eau_JCC.png?20151129194910" alt="" width={"40px"}/></li></button>
                    <button onClick={AddPokemonDragon}><li>Dragon <img src="https://www.pokepedia.fr/images/0/09/Miniature_Type_Dragon_JCC.png?20151129195102" alt="" width={"40px"}/></li></button>
                    <button onClick={AddPokemonFairy}><li>Fairy <img src="https://www.pokepedia.fr/images/d/d1/Miniature_Type_F%C3%A9e_JCC.png?20151129195043" alt="" width={"40px"}/></li></button>
                    <button onClick={AddPokemonPoison}><li>Poison <img src="https://www.pokepedia.fr/images/thumb/5/55/Miniature_Type_Poison_Sleep.png/120px-Miniature_Type_Poison_Sleep.png?20230719111719" alt="" width={"40px"}/></li></button>
                    <button onClick={AddPokemonElectric}><li>Electric <img src="https://www.pokepedia.fr/images/4/41/Miniature_Type_%C3%89lectrique_JCC.png?20151129194845" alt="" width={"40px"}/></li></button>
                    <button onClick={AddPokemonFire}><li>Fire <img src="https://www.pokepedia.fr/images/e/e5/Miniature_Type_Feu_JCC.png?20151129194934" alt="" width={"40px"}/></li></button>
                    <button onClick={AddPokemonGround}><li>Ground <img src="https://www.pokepedia.fr/images/thumb/d/dd/Miniature_Type_Sol_Sleep.png/120px-Miniature_Type_Sol_Sleep.png?20230719111739" alt="" width={"40px"}/></li></button>
                    <button onClick={AddPokemonFighting}><li>Fighting <img src="https://www.pokepedia.fr/images/1/13/Miniature_Type_Combat_JCC.png?20151129194540" alt="" width={"40px"}/></li></button>
                </ul>
            </div>

            <div id="body" style={{display: "none"}}>
                {/* <button id="deleteButton" onClick={addPokemon}>Ajouter un Pokémon</button> */}
                <div style={{background: 'rgba(255, 255, 255, 0.7)', padding: '0 50px 10px 10px', margin: '0 0 10px 0'}}>
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
