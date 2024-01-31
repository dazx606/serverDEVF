const getCharacter = async (id) => {
    try {
        const respuestaApi = await fetch(`https://storage.googleapis.com/campus-cvs/00000000000-images-lectures/pokemons.json`, { method: 'GET' })
        const personaje = await respuestaApi.json()
        console.log(personaje)
    } catch (error) {
        console.log(error)
    }
};

getCharacter(27);

// function obtenerPersonaje(id) {
//     const personaje = fetch(`https://rickandmortyapi.com/api/character/${id}`, { method: 'GET' })
//         .then(respuestaApi => {return respuestaApi.json()})
//         .then(personaje => console.log(personaje))
//         .catch(console.log)
//     console.log(personaje)
// }

// obtenerPersonaje(1)