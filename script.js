//You can edit ALL of the code here

// Global Declaration

function setup() {
    const allEpisodes = getAllEpisodes();
    makePageForEpisodes(allEpisodes);
}

// format Episode to 2 digit numbers
function zeroPadded(episodeCode) {
    return episodeCode.toString().padStart(2, 0);
}

function loadEpisodeMarkUp(episode) {
    const uploadEpisode = `<div class="format"><h2>${
      episode.name
    } - S${zeroPadded(episode.season)} E${zeroPadded(episode.number)}</h2> 
        <img src ="${episode.image.medium}" alt ""> ${episode.summary}</div>`;
    return uploadEpisode;
}

function makePageForEpisodes(episodeList) {
    let pageContent = "";
    const rootElem = document.getElementById("root");
    episodeList.forEach((episode) => {
        pageContent += loadEpisodeMarkUp(episode);
    });
    rootElem.innerHTML = pageContent;
}


// function makePageForEpisodes(episodeList) {
//     const rootElem = document.getElementById("root");
//     //rootElem.textContent = `Got ${episodeList.length} episode(s)`;

//     episodeList.forEach((episode) => {
//         rootElem.innerHTML += `<div class="format"><h2>${
//       episode.name
//     } - S${zeroPadded(episode.season)} E${zeroPadded(episode.number)}</h2> 
//         <img src ="${episode.image.medium}" alt ""> ${episode.summary}</div>`;
//     });
// }

window.onload = setup;