document.getElementById('svg2').addEventListener('click', function (event) {
    if (event.target && event.target.tagName === 'path') {
        const countryCode = event.target.id;
        fetch(`https://countries.plaul.dk/api/countries/${countryCode}`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('flag').src = data.flag;
                document.getElementById('name').textContent = data.name.common;

                document.getElementById('info').style.display = 'block';
            })
            .catch(error => console.error(error));
    }
});