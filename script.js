//You can edit ALL of the code here

let bodyElem = document.querySelector("body");


//Search Bar
let searchBarWrapper = document.createElement("div");
searchBarWrapper.setAttribute("class", "header");

// All Show Dropdown form
const formElemS = document.createElement("form");
formElemS.setAttribute("class", "dropDown-form");
searchBarWrapper.appendChild(formElemS);

let dropDown = document.createElement("select");
dropDown.setAttribute("id", "selection");
formElemS.appendChild(dropDown);

// Shows options
let showOpt = document.createElement("option");

let searchBar = document.createElement("search");
searchBar.setAttribute("id", "searchBar");
searchBarWrapper.appendChild(searchBar);

let numbers = document.createElement("h3");
searchBarWrapper.appendChild(numbers);

bodyElem.appendChild(searchBarWrapper);

let allCardsDiv = document.createElement("div");


// API

const TVShowApi = 'https://api.tvmaze.com/shows/82/episodes';

const SEARCH_API = 'https://api.tvmaze.com//search/shows?&q=SEARCH_QUERY';

let allEpisodes = [];

function displayEpisodesCards() {
    let displayEpisodesCards = document.createElement("div");
};

function setup() {
    fetch(TVShowApi).then(function(response) {
            if (response.ok) {
                return response.json();
            }
            throw `${response.status} ${response.statusText}`;
        })
        .then(function(data) {
            allEpisodes = data;
            displayEpisodesCards(allEpisodes);
            numberOfDisplayEpisodes(allEpisodes);
            createCardsWrapper();
            createSearchWrapper();
            createSearchHeader();
            displayFooter();
        })
        .catch(function(error) {
            console.log("An error occurred:", error);
        });
}
window.onload = setup;

function createCardsWrapper() {
    bodyElem.appendChild(allCardsDiv);
    allCardsDiv.setAttribute("class", "All-cards");
}


// The Root element
const rootElem = document.getElementById("root");

function displayEpisodes(allEpisodes) {
    all
}


// The Project Title 


//Display all episodes
function makePageForEpisodes(episodeList) {

    //Number of Episode
    numberOfEpisode.innerHTML = `Displaying ${episodeList.length}/${allEpisodes.length}episode(s)`;

    //Create Cards
    episodeList.map((episode) => {
        //let card = document.createElement("div");
        card.classList("card");
        episode.appendChild(card); // check with Episodes or episode  ??


        //Image Container
        let imageContainer = document.createElement("div");
        imageContainer.classList.add("imageDiv");
        card.appendChild(imageContainer);

        //Image
        let image = document.createElement("img");
        image.setAttribute("src", episode.image.original);
        image.classList.add("image");
        imageContainer.appendChild(image);

        //Text container 
        let textContainer = document.createElement("div");
        textContainer.classList.add("textDiv");
        card.appendChild(textContainer);

        // Title
        let title = document.createElement("h3")
        title.innerHTML = `${episode.name}`;
        title.classList.add("episodeName");
        textContainer.appendChild(title);

        //Summary
        let summary = document.createElement("div");
        summary.innerHTML = episode.summary;
        summary.classList.add("description")
        textContainer.appendChild(summary);

        //Information
        let info = document.createElement("div");
        info.classList("info");
        textContainer.appendChild(info);

        //Episode Season number
        let episodeSeasonNumber = document.createAttribute("p");
        episodeSeasonNumber.classList.add("episodeInformation");
        episodeSeasonNumber.innerHTML = formatEpisodeAndSeason(episode.season, episode.number);
        info.appendChild(episodeSeasonNumber);

        //Duration
        let duration = document.createElement("p");
        duration.innerHTML = `${episode.runtime}min`;
        duration.setAttribute("id", "runtime");
        duration.classList.add("episodeInfo");
        info.appendChild(duration);

        //Press button to play
        let link = document.createElement("a");
        link.setAttribute("href", episode.url);
        let button = document.createElement("button");
        button.classList.add("button");
        button.innerHTML = "Play";
        textContainer.appendChild(link);
        link.appendChild(button);

    })

}
// Format Season with Zero Padding 
function formatEpisodeAndSeason(season, episode) {
    if (parseInt(season) < 10) {
        seasonNumber = `S0${season}`;
    } else {
        seasonNumber = `S${season}`;
    }
    if (parseInt(episode) > 10) {
        episodeNumber = `E0${episode}`;
    } else {
        episodeNumber = `E${episode}`;
    }
    return seasonNumber + episodeNumber;
}


//Footer
let footer = document.createElement("footer");
document.body.appendChild(footer);
let copyRight = document.createElement("p");
footer.appendChild(copyRight);
copyRight.innerHTML = "Copyright of these TV shows belong to <a href='https://www.tvmaze.com/'>TVMaze.com</a>";

window.onload = setup;