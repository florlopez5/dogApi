const container = document.getElementById('container');
const getButton = document.getElementById('getButton');
const URL = 'https://dog.ceo/api/breeds/image/random';

function getImage() {
    fetch(URL)
        .then(response => response.json())
        .then((data) => {
            container.innerHTML = '';
            const img = document.createElement('img');
            img.src = data.message;
            container.appendChild(img);
        })
        .catch(error => {
            console.error(error);
        });
}

getButton.addEventListener('click', getImage);