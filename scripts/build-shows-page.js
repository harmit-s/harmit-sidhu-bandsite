import BandSiteApi from './band-site-api.js';

const apiKey = 'dde133e3-5a0a-4210-8cf9-0618e78dea51';
const bandSiteApi = new BandSiteApi(apiKey);
bandSiteApi.getShows()
    .then(shows => {
        showsList(shows);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });

const showsList = (shows) => {
    const showsContainer = document.getElementById("shows");
    showsContainer.innerHTML = '';

    const showsTitle = document.createElement("h3");
    showsTitle.className = 'shows-section__title';
    showsTitle.innerText = 'Shows';
    showsContainer.appendChild(showsTitle);

    const labels = ["DATE", "VENUE", "LOCATION"];
    const labelContainer = document.createElement("div");
    labelContainer.className = "shows-section__labels-container";
    labels.forEach(labelText => {
        const label = document.createElement("span");
        label.innerText = labelText;
        labelContainer.appendChild(label);
    });
    showsContainer.appendChild(labelContainer);

    shows.forEach(show => {
        const showsLayout = document.createElement("div");
        showsLayout.className = 'shows-section__layout';

        const headerContainer = document.createElement("div");
        headerContainer.className = 'shows-section__header-container';

        const showsDate = document.createElement("h2");
        showsDate.className = 'shows-section__header-date';
        showsDate.innerText = 'DATE';

        const showsDateInput = document.createElement("p");
        showsDateInput.className = 'shows-section__header-input';
        showsDateInput.innerText = new Date(show.date).toDateString(); 

        const showsVenue = document.createElement("h2");
        showsVenue.className = 'shows-section__header-venue';
        showsVenue.innerText = 'VENUE';

        const showsVenueInput = document.createElement("p");
        showsVenueInput.className = 'shows-section__header';
        showsVenueInput.innerText = show.place; 

        const showsLocation = document.createElement("h2");
        showsLocation.className = 'shows-section__header-location';
        showsLocation.innerText = 'LOCATION';

        const showsLocationInput = document.createElement("p");
        showsLocationInput.className = 'shows-section__header';
        showsLocationInput.innerText = show.location;

        const showsButton = document.createElement("button");
        showsButton.className = 'shows-section__button';
        showsButton.innerText = 'BUY TICKETS';

        headerContainer.appendChild(showsDate);
        headerContainer.appendChild(showsDateInput);
        headerContainer.appendChild(showsVenue);
        headerContainer.appendChild(showsVenueInput);
        headerContainer.appendChild(showsLocation);
        headerContainer.appendChild(showsLocationInput);
        showsLayout.appendChild(headerContainer);
        showsLayout.appendChild(showsButton);

        showsContainer.appendChild(showsLayout);
    });
}

const showItems = document.querySelectorAll('.shows-section__layout');

showItems.forEach(item => {
    item.addEventListener('click', function () {
        showItems.forEach(item => {
            item.classList.remove('shows-section__layout--selected');
        });
        this.classList.add('shows-section__layout--selected');
    });
});