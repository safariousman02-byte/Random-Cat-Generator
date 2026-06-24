
const status = document.getElementById('status');
const newCat = document.getElementById('newCat');
const catImage = document.getElementById('catImage');

function getRandomCat() {

    status.textContent = 'Loading Cat..';
    status.style.color = '#007bff';

    fetch('https://api.thecatapi.com/v1/images/search')

        .then(res => res.json())
        .then(data => {
            catImage.src = data[0].url;
            status.textContent = 'Here is your cat!.';
            status.style.color = '#28a745';
        })
        .catch(() => {
            status.textContent = 'Error loading cat. Try again!';
            status.style.color = '#dc3545;'
        });

}

getRandomCat();

newCatBtn.onclick = getRandomCat;

document.addEventListener('keypress', function(e) {

    if (e.key === 'Enter') {
        getRandomCat();
    }
});
