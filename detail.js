//console.log(window.location)
//console.log(window.location.search)

const urlSearchParams = new URLSearchParams(window.location.search);

// console.log(urlSearchParams)

const pokemonName = urlSearchParams.get('pokemon');


console.log(pokemonName);

PokeService.getDetail(pokemonName).then(pokemonObject => {
    const myPokemon = new Pokemon(pokemonObject.name, pokemonObject.types, pokemonObject.abilities, pokemonObject.stats, pokemonObject.sprites.front_default);

    displayPokemon(myPokemon);
    console.log('Data form db', pokemonObject);
})



function displayPokemon(pokemon) {
    console.log('nostro pokemon', pokemon);
    
    namePokemon(pokemon);
}


// Pokemon Name
function namePokemon(pokemon){
    const sectionID = document.getElementById('section-div')
    const section = document.createElement('section');
    const p = document.createElement('p');
    const pNode = document.createTextNode(pokemon.name + ' ' + pokemon.type.join());

    sectionID.appendChild(section);
    section.appendChild(p);
    p.appendChild(pNode);
}