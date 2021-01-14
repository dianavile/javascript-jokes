const joke = document.getElementById("joke");
const next_joke = document.getElementById("next-joke");

//APIs
const apiJoke = "https://icanhazdadjoke.com/";
const chuckNorrisJoke= "https://api.chucknorris.io/jokes/random";

next_joke.addEventListener("click", generateJoke);

async function generateJoke() {
    //call the APIs
    const response = await fetch(apiJoke, {
        headers: {
            'Accept': 'application/json'
        }
    });
    
    const responseB = await fetch(chuckNorrisJoke, {
        headers: {
            'Accept': 'application/json'
        }
    });

    const data = await response.json();
    const dataB = await responseB.json();

    const listJokes = [ (data.joke), (dataB.value)]

    //set random jokes from APIS
    const randomJokes = Math.floor(Math.random() * (listJokes.length));

    //set the new joke
    joke.innerHTML = '" ' + listJokes[randomJokes] + '" ' ;
    console.log(randomJokes);
}

generateJoke();