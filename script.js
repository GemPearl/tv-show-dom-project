//You can edit ALL of the code here
/*
Minimal features
- All episode must be shown
- For each episode
    - The episode name/- the season number/-the episode number/-the episode's medium-sized image/-the episode's summary text
- You should combine season number and episode number into an episode 
-Your page should state somewhere that the data has(originally) come from TVMaze.com, and link back to that site (or the specific episode on that site). 
*/
//Global Declaration 

  const searchBar = document.getElementById("searchBar");
  const allEpisodes = getAllEpisodes();
  const container = document.getElementById("container");

function setup() {
  makePageForEpisodes(allEpisodes);
}

 function zeroPadded(episodeCode) {
  return episodeCode.toString().padStart(2, 0);
 }

function helperMarkup (episode) {
  const markUp = `<div><h2>${episode.name} - S${zeroPadded(episode.season
    )} E${zeroPadded(episode.number)}</h2>
    <img src= "${episode.image.medium}" alt "">${episode.summary}</div>`;
    
    return markUp;
}

function makePageForEpisodes(episodeList) {
  const innerHTMLArray = [];
  episodeList.forEach((episode) => {
    innerHTMLArray.push(helperMarkup(episode));
  });
  container.innerHTML = innerHTMLArray;
}


function searchCreation(e){

  let searchString = e.target.value.toLowerCase();

  let filteredInput = allEpisodes.filter((char) => { 
    return (
      char.name.toLowerCase().includes(searchString) ||
      
      char.summary.toLowerCase().includes(searchString)
        );
      });
      
      container.innerHTML = "";
      makePageForEpisodes(filteredInput);
}

searchBar.addEventListener("input", searchCreation);

window.onload = setup;
