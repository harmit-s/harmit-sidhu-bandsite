let showsArr = [
    { date: "Mon Sept 09 2024", venue: "Ronald Lane", location: "San Francisco, CA" },
    { date: "Tue Sept 17 2024", venue: "Pier 3 East", location: "San Francisco, CA" },
    { date: "Sat Oct 12 2024", venue: "View Lounge", location: "San Francisco, CA" },
    { date: "Sat Nov 16 2024", venue: "Hyatt Agency", location: "San Francisco, CA" },
    { date: "Fri Nov 29 2024", venue: "Moscow Center", location: "San Francisco, CA" },
    { date: "Wed Dec 18 2024", venue: "Press Club", location: "San Francisco, CA" }
];


const showsList = () => {
    const showsContainer = document.getElementById("shows");

    const showsTitle = document.createElement("h1");
    showsTitle.className = 'shows-section__title';
    showsTitle.innerText = 'Shows';
    showsContainer.appendChild(showsTitle);

    showsArr.forEach(show => {
        //const showsParent = document.createElement("div");
        //showsParent.className = 'shows-section__container';

        const showsLayout = document.createElement("div");
        showsLayout.className = 'shows-section__layout';

        const showsDate = document.createElement("h2");
        showsDate.className = 'shows-section__header'
        showsDate.innerText = 'DATE';

        const showsDateInput = document.createElement("p");
        showsDateInput.className = 'shows-section__header-date';
        showsDateInput.innerText = show.date;

        const showsVenue = document.createElement("h2");
        showsVenue.className = 'shows-section__header';
        showsVenue.innerText = 'VENUE';

        const showsVenueInput = document.createElement("p");
        showsVenueInput.className = 'shows-section__header-input';
        showsVenueInput.innerText = show.venue;

        const showsLocation = document.createElement("h2");
        showsLocation.className = 'shows-section__header';
        showsLocation.innerText = 'LOCATION';

        const showsLocationInput = document.createElement("p");
        showsLocationInput.className = 'shows-section__header-input';
        showsLocationInput.innerText = show.location;

        const showsButton = document.createElement("button");
        showsButton.className = 'shows-section__button';
        showsButton.innerText = 'BUY TICKETS';

        //showsParent.appendChild(showsLayout);

        showsLayout.appendChild(showsDate);
        showsLayout.appendChild(showsDateInput);
        showsLayout.appendChild(showsVenue);
        showsLayout.appendChild(showsVenueInput);
        showsLayout.appendChild(showsLocation);
        showsLayout.appendChild(showsLocationInput);
        showsLayout.appendChild(showsButton);

        showsContainer.appendChild(showsLayout);
    });
}

showsList();

document.addEventListener('DOMContentLoaded', function() {
    const showItems = document.querySelectorAll('.shows-section__container');
  
    showItems.forEach(item => {
      item.addEventListener('click', function() {
        
        showItems.forEach(item => {
          item.classList.remove('selected');
        });
        
        this.classList.add('selected');
      });
    });
  });

