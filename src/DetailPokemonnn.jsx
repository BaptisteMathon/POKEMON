import { useEffect, useState } from "react";



function DetailPokemonnn(DetailPokemon2){

    let detailPok2 = DetailPokemon2.DetailPokemon2
    const currentPok2 = DetailPokemon2.CurrentPokemon2[0]

    const [enemyPokemon, setEnemyPokemon] = useState([]);
    const [picEnemy, setPicEnemy] = useState([]);
    const [cpt, setCpt] = useState(0)

    useEffect(() => {
        fetch("https://pokemon-database-ten.vercel.app/random")
            .then((response) => response.json())
            .then((data) => {
                let enemyPokemonStat = [data[' Name'], data.HP, data.Attack, data.Defense]
                setEnemyPokemon(enemyPokemonStat)

                let tempPic = [
                    "https://play.pokemonshowdown.com/sprites/gen1/" + enemyPokemonStat[0].toLowerCase() + ".png",
                    "https://play.pokemonshowdown.com/sprites/gen2/" + enemyPokemonStat[0].toLowerCase() + ".png",
                    "https://play.pokemonshowdown.com/sprites/gen3/" + enemyPokemonStat[0].toLowerCase() + ".png",
                    "https://play.pokemonshowdown.com/sprites/gen4/" + enemyPokemonStat[0].toLowerCase() + ".png",
                    "https://play.pokemonshowdown.com/sprites/gen5/" + enemyPokemonStat[0].toLowerCase() + ".png",
                    "https://play.pokemonshowdown.com/sprites/gen6/" + enemyPokemonStat[0].toLowerCase() + ".png"
                ]
                setPicEnemy(tempPic)
    })
    }, [])

    document.body.style.background = 'url(https://wallpapercave.com/wp/wp10311661.png)'
    document.body.style.backgroundSize = 'cover'

    

    function AttackPok(){

        detailPok2.forEach(element => {
            if (element[0] === currentPok2){
                let degat = [enemyPokemon[0], enemyPokemon[1] - Math.floor(element[7]/12), enemyPokemon[2], enemyPokemon[3]]
                if (degat[1] <= 0){
                    degat[1] = 0
                    document.getElementById("body").style.display = 'none'
                    document.getElementById("restart").style.display = "flex"
                    setCpt(0)
                }
                setEnemyPokemon(degat)



                let degatEnemy = parseInt(document.getElementById("HPpokemon").lastChild.data - (enemyPokemon[2] / 2))

                document.getElementById("HPpokemon").lastChild.data = degatEnemy
                document.getElementById("HPpokemon").style.width = degatEnemy + '%'

                if(document.getElementById("HPpokemon").lastChild.data <= 0){
                    document.getElementById("HPpokemon").lastChild.data = 0
                    document.getElementById("HPpokemon").style.width = 0

                    for (let index = 0; index < detailPok2.length; index++) {
                        if(detailPok2[index][0] === currentPok2){
                            detailPok2[index] = []
                            setCpt(cpt+1)
                        }
                        if(cpt === 5){
                            document.getElementById("body").style.display = 'none'
                            document.getElementById("lose").style.display = "flex"
                        }
                    }
                }
            }
        });
    }

    let infoPokemon;
    let NameSpecPokemon = ['Nom: ', 'Types: ', 'Attaque1: ', 'Attaque2: ', 'Attaque3: ', 'Attaque4: ', '', 'Attaque: ', 'Défense: ']
    
    detailPok2.forEach((element) => {
        if (element[0] === currentPok2) {
            infoPokemon = element.map((detail, index) => <p>{NameSpecPokemon[index]} {detail}</p>)
            infoPokemon[2] = <div style={{backgroundColor: 'orange', cursor: "pointer"}} onClick={AttackPok}>{infoPokemon[2]}</div>
            infoPokemon[3] = <div style={{backgroundColor: 'orange', cursor: "pointer"}} onClick={AttackPok}>{infoPokemon[3]}</div>
            infoPokemon[4] = <div style={{backgroundColor: 'orange', cursor: "pointer"}} onClick={AttackPok}>{infoPokemon[4]}</div>
            infoPokemon[5] = <div style={{backgroundColor: 'orange', cursor: "pointer"}} onClick={AttackPok}>{infoPokemon[5]}</div>
            infoPokemon[6] = <div style={{display: 'flex'}}>HP: <div id="HPpokemon" style={{'backgroundColor': 'green', 'width': infoPokemon[6].props.children[2] + '%', 'height': '25px', marginLeft: '5px', paddingLeft: '5px'}}>{infoPokemon[6].props.children}</div></div>
        }
    });

    return (
        <>

            <h2>Info Pokémon</h2>
            {infoPokemon}


            <div style={{position: 'absolute', right: '15px', top: '15px', background: 'rgba(255, 255, 255, 0.7)', padding: '10px 15px'}}>
                <h2>Pokémon Enemie</h2>
                <div>
                    <p>Name: <b style={{marginLeft: '15px', color: 'red'}}>{enemyPokemon[0]}</b></p>
                    <img src={picEnemy[1]} alt=""/>
                    <img src={picEnemy[2]} alt=""/>
                    <img src={picEnemy[3]} alt=""/>
                    <img src={picEnemy[4]} alt=""/>
                    <img src={picEnemy[5]} alt=""/>
                    <img src={picEnemy[6]} alt=""/>
                </div>
                <ul style={{padding: 0}}>
                    <li style={{display: 'flex'}}>HP:<div style={{'backgroundColor': 'green', 'width': enemyPokemon[1]+ '%', 'height': '25px', marginLeft: '5px', paddingLeft: '5px'}}>{enemyPokemon[1]}</div></li>
                    <li style={{display: 'flex'}}>Attack: {enemyPokemon[2]}</li>
                    <li style={{display: 'flex'}}>Defense: {enemyPokemon[3]}</li>
                </ul>
            </div>
        </>
    )
}


export default DetailPokemonnn;
