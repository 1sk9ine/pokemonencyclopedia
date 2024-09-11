document.getElementById('search-button').addEventListener('click', async () => {
    const input = document.getElementById('search-input').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${input}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Pokémon not found');

        const data = await response.json();
        const { name, id, weight, height, stats, types, sprites } = data;

        document.getElementById('pokemon-name').innerText = `Name: ${name.toUpperCase()}`;
        document.getElementById('pokemon-id').innerText = `ID: #${id}`;
        document.getElementById('weight').innerText = `Weight: ${weight} hectograms`;
        document.getElementById('height').innerText = `Height: ${height} decimetres`;
        
        document.getElementById('types').innerHTML = '';
        types.forEach(type => {
            const typeElement = document.createElement('div');
            typeElement.innerText = `Type: ${type.type.name.toUpperCase()}`;
            document.getElementById('types').appendChild(typeElement);
        });

        document.getElementById('hp').innerText = `HP: ${stats[0].base_stat}`;
        document.getElementById('attack').innerText = `Attack: ${stats[1].base_stat}`;
        document.getElementById('defense').innerText = `Defense: ${stats[2].base_stat}`;
        document.getElementById('special-attack').innerText = `Special Attack: ${stats[3].base_stat}`;
        document.getElementById('special-defense').innerText = `Special Defense: ${stats[4].base_stat}`;
        document.getElementById('speed').innerText = `Speed: ${stats[5].base_stat}`;

        const sprite = document.getElementById('sprite');
        sprite.src = sprites.front_default;
        sprite.style.display = 'block';

        document.getElementById('pokemon-info').classList.remove('hidden');

    } catch (error) {
        alert('Pokémon not found');
        document.getElementById('pokemon-info').classList.add('hidden');
        document.getElementById('sprite').style.display = 'none';
    }
});
