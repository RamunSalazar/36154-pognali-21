const transportButton = document.querySelectorAll('.direction-form__transport-button');
const navigationToggle = document.querySelector('.page-header__navigation-toggle');
const navigation = document.querySelector('.page-header__navigation-top');
const addProfileLink = document.querySelector('.add-profile_link');
const addProfileModal = document.querySelector('.add-profile__modal-wrapper');
const addProfileRouteWrraper = document.querySelectorAll('.add-plan__route-wrapper');
const filterCountry = document.querySelector('.filter-country');
const filterCompanionWrraper = document.querySelectorAll('.filter-companion__wrapper');

if (transportButton) {
  for (let i = 0; i < transportButton.length; i++) {
    transportButton[i].addEventListener('click', function() {
      if (transportButton[i].classList.contains('direction-form__transport-button--on')) {
        transportButton[i].classList.remove('direction-form__transport-button--on');
        transportButton[i].classList.add('direction-form__transport-button--off')
      } else if (transportButton[i].classList.contains('direction-form__transport-button--off')) {
        transportButton[i].classList.remove('direction-form__transport-button--off');
        transportButton[i].classList.add('direction-form__transport-button--on')
      }
    });
  }
}

navigationToggle.addEventListener('click', function() {
  if (navigation.classList.contains('page-header__navigation-top--open')) {
    navigation.classList.remove('page-header__navigation-top--open');
  } else {
    navigation.classList.add('page-header__navigation-top--open');
  }
});

if (addProfileLink) {
  const addProfileCloseButton = addProfileModal.querySelector('.add-profile__modal-button');

  addProfileLink.addEventListener('click', function(evt) {
    evt.preventDefault();
    addProfileModal.classList.add('add-profile__modal-wrapper--open');
  });

  addProfileCloseButton.addEventListener('click', function() {
    addProfileModal.classList.remove('add-profile__modal-wrapper--open');
  });
}

if (addProfileRouteWrraper.length) {
  const addProfileRouteImage = addProfileRouteWrraper[2].querySelectorAll('.add-plan__route-image');

  addProfileRouteImage[0].addEventListener('click', function() {
    addProfileRouteWrraper[2].classList.add('add-plan__route-wrapper--open');
  });

  addProfileRouteImage[1].addEventListener('click', function() {
    addProfileRouteWrraper[2].classList.remove('add-plan__route-wrapper--open');
  });
}

if (filterCountry) {
  const filterCountryToggle = filterCountry.querySelector('.filter-country__toggle');
  const filterCountryButtonClose = filterCountry.querySelector('.filter-country__button');
  filterCountryToggle.addEventListener('click', function() {
    if (filterCountry.classList.contains('filter-country--open')) {
      filterCountry.classList.remove('filter-country--open');
    } else {
      filterCountry.classList.add('filter-country--open');
    }
  });

  filterCountryButtonClose.addEventListener('click', function() {
    filterCountry.classList.remove('filter-country--open');
  });
}

if (filterCompanionWrraper.length) {
  const filterCompanionName = document.querySelectorAll('.filter-companion__name');
  for (let i = 0; i < filterCompanionName.length; i++) {
    filterCompanionName[i].addEventListener('click', function() {
      if (filterCompanionWrraper[i].classList.contains('filter-companion__wrapper--open')) {
        filterCompanionWrraper[i].classList.remove('filter-companion__wrapper--open');
      } else {
        filterCompanionWrraper[i].classList.add('filter-companion__wrapper--open');
      }
    });
  }
}
