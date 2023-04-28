
// let actualPage;

// loadNextPage();

// function loadNextPage(){
//     PokeService.getNextPokemon(actualPage).then(pokemonPage => {
//         actualPage = pokemonPage;
//         displayPokemon();
//         console.log(actualPage);
//     })
// }

// function loadPreviousPage(){
//     PokeService.getPreviousPokemon(actualPage).then(pokemonPage => {
//         actualPage = pokemonPage;
//         displayPokemon();
//         console.log(actualPage);
//     })
// }

// function displayPokemon(){

//     const html = actualPage.results.map(pokemon => `<div><strong>${pokemon.name}</strong></div>`).join('');
//     document.getElementById('pokemon-container').innerHTML = html;


//     // //////////// map
//     // const stringArray = []

//     // for (let i = 0; i < actualPage.results.length; i++) {
//     //     const pokemon = actualPage.results[i];

//     //     const pokemonHtml =`<div><strong>${pokemon.name}</strong></div>`;

//     //     stringArray.push(pokemonHtml);
        
//     // }

//     // ///join
//     // const allHtml = stringArray.join('')


//     // ///innerHTML
//     // const pokemonContainer = document.getElementById('pokemon-container');

//     // pokemonContainer.innerHTML = allHtml;
// }


let actualPageIndex = -1;

let actualPage;

loadNextPage()

function loadNextPage(){
    actualPageIndex++;
    if ( actualPageIndex >= PokeService.PAGE_COUNT){
        actualPageIndex= 0;
    }
    PokeService.getPageAtIndex(actualPageIndex).then(pokemonPage => {
        actualPage = pokemonPage;
        displayPokemon();
    })
}

function loadPreviousPage(){
    actualPageIndex--;
    if (actualPageIndex < 0) {
        actualPageIndex= PokeService.PAGE_COUNT - 1;
    }
    PokeService.getPageAtIndex(actualPageIndex).then(pokemonPage => {
        actualPage = pokemonPage;
        displayPokemon();
    })
}

function displayPokemon(){
    //searchParams o queryParams
    const html = actualPage.results.map(pokemon => `<div class='pokemon-ref' ><li class= 'pokelist'><ul class='sigle-pokemon'><a href="./detail.html?pokemon=${pokemon.name}"><strong>${pokemon.name}</strong></a><ul></li></div>`).join('');
    document.getElementById('pokemon-container').innerHTML = html;


}
