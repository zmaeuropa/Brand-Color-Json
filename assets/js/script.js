const search = document.getElementById('search');
const matchList = document.getElementById('match-list');
const allBrand = document.getElementById('brands');
const people = document.getElementById('people');
let colors;
let shows;



// Get Colors
const getColors = async () => {

    const res = await fetch('data/color.json');
    colors = await res.json();
    for (let i = 0; i < colors.length; i++) {
        const err = colors.slice(0,10).map(color => `
        <div class="card card-body mb-2 text-center shadow rounded" style="background:${color.couleur};">
        <h4>${color.name}</h4>
        <p class="brand-hexa">&nbsp;<i class="fas fa-copy"title="Copy Code"data-clipboard-text="${color.couleur}"></i></p>
        </div>    
        `).join('');
        matchList.innerHTML = err;
    }
};


    




// Show All color in html
const allColors = shows => {
    if(shows.length > 0) {
        
        
    
    
        const allHtml = shows.map(color =>`
        
            <div class="card card-body mb-2 text-center shadow rounded" style="background:${color.couleur};">
            <h4>${color.name}</h4>
            <p class="brand-hexa">&nbsp;<i class="fas fa-copy"title="Copy Code"data-clipboard-text="${color.couleur}"></i></p>
            </div>    
        
        `).join('');
        matchList.innerHTML = allHtml;
    
}
};


// Filter Colors
const searchColors = searchText => {

    // Get matches to current text input
    let matches = colors.filter(color => {
     const regex = new RegExp(`^${searchText}`, 'gi');
     return color.name.match(regex);
    });
   
    // Clear when input or matches are empty
    if (searchText.length === 0) {
        matches = matches.slice(0,10);
        matchList.innerHTML = '';
       }
   
    outputHtml(matches);
   };


// show result in html
const outputHtml = matches => {
    
    if (matches.length > 0) {
        const html = matches.map(match=>`
            <div class="card card-body mb-2 text-center shadow-sm rounded" style="background:${match.couleur};">
            <h4>${match.name}</h4>
            <p class="brand-hexa" id="${match.name}">&nbsp;<i class="fas fa-copy"title="Copy Code"data-clipboard-text="#${match.couleur}"></i></p>
            </div>
        `).join('');
        
        matchList.innerHTML = html;
    }
};

window.addEventListener('DOMContentLoaded', getColors);


search.addEventListener('input', () => searchColors(search.value));

allBrand.addEventListener('click', (e) => {
    allColors(colors);
});

