console.log('hi there :)')

document.querySelector('#button').addEventListener('click', getFetch)


function getFetch(){
const date = document.querySelector('#date').value
const main = document.querySelector('#main')
main.innerHTML = ''
//console.log(date)
const url = `https://api.nasa.gov/planetary/apod?api_key=Xl2aWI9PpV43M6W9KL3vTFushHtGH3ogWxTGZmZR&date=${date}`
//console.log(url)

fetch(url)
    .then( res => res.json())
    .then( data => {
        console.log(data);
        let image = document.createElement('img')
        let description = document.createElement('p');
         // clear(image, description) ==== does not clear elements

            document.querySelector('h1').innerHTML = data.title;
            image.src = data.hdurl
        main.appendChild(image)



        description.innerHTML = data.explanation
        main.appendChild(description)
    })
}
