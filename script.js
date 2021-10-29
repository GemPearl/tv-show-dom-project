//You can edit ALL of the code here
/*
Minimal features
- All episode must be shown
- For each episode
    - The episode name/- the season number/-the episode number/-the episode's medium-sized image/-the episode's summary text
- You should combine season number and episode number into an episode 
-Your page should state somewhere that the data has(originally) come from TVMaze.com, and link back to that site (or the specific episode on that site). 
*/

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {

  // To get episode numbers
  //const rootElem = document.getElementById("root");
  //rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  //rootElem.innerHTML = "";
  
  // const container = document.getElementById("container");
 
  
  episodeList.forEach(episode => {
     const { image, name, number, season, summary } = episode;
     
     container.innerHTML += `<div><h2>${episode.name} - S${zeroPadded(episode.season)} E${zeroPadded(episode.number)} </h2>
    <img src= "${episode.image.medium}" alt "">${episode.summary}</div>`;


 

  const h1 = document.createElement("h1");
  container.appendChild(h1);

  const img = document.createElement("img");
  img.setAttribute("src", image.original);
  container.appendChild(img);

  const summaryContainer = document.createElement("div")
  summaryContainer.innerHTML = summary;
  container.appendChild(summaryContainer);

  // 
 

  //h1.innerHTML = `${name}-S0${season}-E0${number}`;

  const container = document.createElement("div");
  div.appendChild(container);
  container.classList.add("card-container");

  function zeroPadded(episodeCode) {
  return episodeCode.toString().padStart(2, 0); 
 
}
})
};

 rootElem.appendChild(div);
 
window.onload = setup;
