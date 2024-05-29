import { useState, useEffect } from "react";
import DetailPokemonnn from "./DetailPokemonnn";
import PokemonPic from "./PokemonPic";

function Pokemon() {
    const [pokemon, setPokemon] = useState([]);
    const [detailPokemon, setDetailPokemon] = useState([]);
    const [listPoke, setListPoke] = useState([]);

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

    useEffect(() => {
        // console.log({listPoke})
    }, [listPoke])


    function addPokemonType(type){
        fetch(process.env.REACT_APP_URL + "/random/" + type)
        .then((response) => response.json())
        .then((data) => {
            if (pokemon.length < 6) {
                if(!pokemon.includes(data[' Name'])){
                    pokemon.push(data[' Name'])
                }
                setPokemon(pokemon)

                data.Types = data.Types.join(' ')

                let detailPok = [data[' Name'], data.Types, data.Moves[0], data.Moves[1], data.Moves[2], data.Moves[3], data.HP, data.Attack, data.Defense]
                setDetailPokemon((prevDetailPokemon) => [...prevDetailPokemon, detailPok]);

                if (pokemon.length === 6){
                    document.getElementById("body").style.display = "block"
                    document.getElementById("ekip").style.display = "block"
                    document.getElementById("saveEkip").style.display = "none"
                    document.getElementById("text").style.display = "none"
                }
            } 
        })
        .catch((error) => console.log(error));
    }

    function AddEkip(){
        const Newekip = document.getElementById("0").textContent + '|-|' + document.getElementById("1").textContent + '|-|' + document.getElementById("2").textContent + '|-|' + document.getElementById("3").textContent + '|-|' + document.getElementById("4").textContent + '|-|' + document.getElementById("5").textContent 
        // console.log(Newekip)
        fetch(process.env.REACT_APP_URL + "/ekip/" + Newekip)
        document.getElementById("ekip").style.display = "none"
    }
    
    function showAllEkip(){
        document.getElementById("showEkip").style.display = "block"

        fetch(process.env.REACT_APP_URL + "/allEkip")
            .then((response) => response.json())
            .then((data) => {

                data.forEach(element => {
                    setListPoke((test) => [...test, element])
                });
            })
        }

        function deleteEkip(ekipId){
            fetch(process.env.REACT_APP_URL + "/deleteEkip/" + ekipId)

            let newEkipArray = []
            listPoke.forEach(element => {
                if(element._id !== ekipId){
                    newEkipArray.push(element)
                }
            });
            setListPoke(newEkipArray)
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


            <div id="text" style={{display: "flex", flexDirection: "column", margin: '0 auto'}}>
                <div id="ChoosePokemon" style={{background: 'rgba(255, 255, 255, 0.5)', padding: '10px', display: 'flex', flexDirection: 'column', margin: '0 auto', marginTop: "50px"}}>
                    <h1>Choisir 6 pokémons : </h1>
                    <p>choisir un type : </p>
                    <ul style={{listStyle: 'none'}}>
                        <button onClick={() => addPokemonType("Grass")}><li>Grass <img src="https://www.pokepedia.fr/images/c/cd/Miniature_Type_Plante_JCC.png?20151129194957" alt="" width={"40px"}/></li></button>
                        <button onClick={() => addPokemonType("Ice")}><li>Ice <img src="https://www.pokepedia.fr/images/thumb/7/7b/Miniature_Type_Glace_Sleep.png/120px-Miniature_Type_Glace_Sleep.png?20230719111646" alt="" width={"40px"}/></li></button>
                        <button onClick={() => addPokemonType("Psychic")}><li>Psychic <img src="https://www.pokepedia.fr/images/e/e2/Miniature_Type_Psy_JCC.png?20151129194735" alt="" width={"40px"}/></li></button>
                        <button onClick={() => addPokemonType("Dark")}><li>Dark <img src="https://www.pokepedia.fr/images/5/5a/Miniature_Type_Obscurit%C3%A9_JCC.png?20151129195021" alt="" width={"40px"}/></li></button>
                        <button onClick={() => addPokemonType("Bug")}><li>Bug <img src="https://www.pokepedia.fr/images/thumb/6/66/Miniature_Type_Insecte_Sleep.png/120px-Miniature_Type_Insecte_Sleep.png?20230719111827" alt="" width={"40px"}/></li></button>
                        <button onClick={() => addPokemonType("Steel")}><li>Steel <img src="https://www.pokepedia.fr/images/f/f9/Miniature_Type_M%C3%A9tal_JCC.png?20110929235714" alt="" width={"40px"}/></li></button>
                        <button onClick={() => addPokemonType("Ghost")}><li>Ghost <img src="https://www.pokepedia.fr/images/thumb/6/61/Miniature_Type_Spectre_Sleep.png/120px-Miniature_Type_Spectre_Sleep.png?20230719111908" alt=""width={"40px"} /></li></button>
                        <button onClick={() => addPokemonType("Rock")}><li>Rock <img src="https://www.pokepedia.fr/images/thumb/f/fe/Miniature_Type_Roche_Sleep.png/120px-Miniature_Type_Roche_Sleep.png?20230719111846" alt="" width={"40px"}/></li></button>
                        <button onClick={() => addPokemonType("Flying")}><li>Flying <img src="https://www.pokepedia.fr/images/thumb/1/1a/Miniature_Type_Vol_Sleep.png/120px-Miniature_Type_Vol_Sleep.png?20230719111755" alt="" width={"40px"}/></li></button>
                        <button onClick={() => addPokemonType("Normal")}><li>Normal <img src="https://www.pokepedia.fr/images/thumb/a/ad/Miniature_Type_Normal_Sleep.png/120px-Miniature_Type_Normal_Sleep.png?20230719110627" alt="" width={"40px"}/></li></button>
                        <button onClick={() => addPokemonType("Water")}><li>Water <img src="https://www.pokepedia.fr/images/9/98/Miniature_Type_Eau_JCC.png?20151129194910" alt="" width={"40px"}/></li></button>
                        <button onClick={() => addPokemonType("Dragon")}><li>Dragon <img src="https://www.pokepedia.fr/images/0/09/Miniature_Type_Dragon_JCC.png?20151129195102" alt="" width={"40px"}/></li></button>
                        <button onClick={() => addPokemonType("Fairy")}><li>Fairy <img src="https://www.pokepedia.fr/images/d/d1/Miniature_Type_F%C3%A9e_JCC.png?20151129195043" alt="" width={"40px"}/></li></button>
                        <button onClick={() => addPokemonType("Poison")}><li>Poison <img src="https://www.pokepedia.fr/images/thumb/5/55/Miniature_Type_Poison_Sleep.png/120px-Miniature_Type_Poison_Sleep.png?20230719111719" alt="" width={"40px"}/></li></button>
                        <button onClick={() => addPokemonType("Electric")}><li>Electric <img src="https://www.pokepedia.fr/images/4/41/Miniature_Type_%C3%89lectrique_JCC.png?20151129194845" alt="" width={"40px"}/></li></button>
                        <button onClick={() => addPokemonType("Fire")}><li>Fire <img src="https://www.pokepedia.fr/images/e/e5/Miniature_Type_Feu_JCC.png?20151129194934" alt="" width={"40px"}/></li></button>
                        <button onClick={() => addPokemonType("Ground")}><li>Ground <img src="https://www.pokepedia.fr/images/thumb/d/dd/Miniature_Type_Sol_Sleep.png/120px-Miniature_Type_Sol_Sleep.png?20230719111739" alt="" width={"40px"}/></li></button>
                        <button onClick={() => addPokemonType("Fighting")}><li>Fighting <img src="https://www.pokepedia.fr/images/1/13/Miniature_Type_Combat_JCC.png?20151129194540" alt="" width={"40px"}/></li></button>
                    </ul>
                </div>

                <div id="showEkip" style={{display: "none", background: "rgba(255, 255, 255, 0.5)", marginTop: "5%", padding: "2%"}}>
                    {listPoke.map((p) => 
                        <div style={{background: "white", padding: "3px", marginBottom: "15px"}}>
                            <img id={p._id} onClick={() => deleteEkip(p._id)} src="https://cdn-icons-png.flaticon.com/512/1869/1869668.png" alt="trash" width={50} style={{cursor: "pointer"}}/>
                            <p>{p.pokemon1}</p>
                            <p>{p.pokemon2}</p>
                            <p>{p.pokemon3}</p>
                            <p>{p.pokemon4}</p>
                            <p>{p.pokemon5}</p>
                            <p>{p.pokemon6}</p>
                        </div>
                    )}
                </div>
            </div>

            <div id="ekip" style={{position: "absolute", display: "none"}}>
                <button onClick={AddEkip}>Ajouter l'Ekip</button>
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

            <div id="saveEkip" style={{position: "absolute"}}>
                <button onClick={showAllEkip}>Ekip sauvegardé</button>
            </div>

            

        </div>
    );
}

export default Pokemon;
