const navigationToggle = document.querySelector(".page-header__navigation-toggle");
const navigation = document.querySelector(".page-header__navigation-top");
const addProfileLink = document.querySelector(".add-profile_link");
const addProfileModal = document.querySelector(".add-profile__modal-wrapper");
const addProfileRouteWrraper = document.querySelectorAll(".add-plan__route-wrapper");
const filterCountry = document.querySelector(".filter-country");
const filterCompanionWrraper = document.querySelectorAll(".filter-companion__wrapper");
const filterCompanionName = document.querySelectorAll(".filter-companion__name");
const filterCompanionSubmitButton = document.querySelector(".filter-companion__button");
const cartProfileLink = document.querySelectorAll(".cart-profile__link");
const pageHeader = document.querySelector(".page-header");
const cartProfilePageLink = document.querySelector(".cart-profile__page-link");
const cartProfilePageButtonLeft = document.querySelector(".cart-profile__page-button--left");
const cartProfilePageButtonRight = document.querySelector(".cart-profile__page-button--right");
const addPlanSend = document.querySelector(".add-plan__send");
const map = document.querySelector(".map");

if (pageHeader) {
  pageHeader.classList.remove("page-header--nojs");
  navigation.classList.remove("page-header__navigation-top--open");
}

if (map) {
  map.classList.remove("map--nojs");
  const mapMark = map.querySelector(".map__mark");
  const mapImage = map.querySelector(".map__image");
  if (mapMark) {
    mapMark.classList.remove("map__mark--nojs");
  }
  if (mapImage) {
    mapImage.classList.remove("map__image--nojs");
  }
}

if (filterCountry) {
  filterCountry.classList.remove("filter-country--open");
  filterCountry.classList.remove("filter-country--nojs");
}

for (let i = 0; i < filterCompanionName.length; i++) {
  filterCompanionWrraper[i].classList.remove("filter-companion__wrapper--open");
}

if (navigationToggle) {
  navigationToggle.addEventListener("click", function() {
  const pageHeaderInnerPage = document.querySelector(".page-header--inner-page");
    if (navigation.classList.contains("page-header__navigation-top--open")) {
      navigation.classList.remove("page-header__navigation-top--open");
      pageHeader.classList.remove("page-header--open");
    } else {
      navigation.classList.add("page-header__navigation-top--open");
      pageHeader.classList.add("page-header--open");
    }
  });
}

if (addProfileLink) {
  const addProfileCloseButton = addProfileModal.querySelector(".add-profile__modal-button");
  addProfileLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    addProfileModal.classList.add("add-profile__modal-wrapper--open");
  });

  addProfileCloseButton.addEventListener("click", function() {
    addProfileModal.classList.remove("add-profile__modal-wrapper--open");
  });
}

if (addProfileRouteWrraper.length) {
  const addProfileRouteImage = addProfileRouteWrraper[2].querySelectorAll(".add-plan__route-image");

  addProfileRouteImage[0].addEventListener("click", function() {
    addProfileRouteWrraper[2].classList.add("add-plan__route-wrapper--open");
  });

  addProfileRouteImage[1].addEventListener("click", function() {
    addProfileRouteWrraper[2].classList.remove("add-plan__route-wrapper--open");
  });
}

if (filterCountry) {
  const filterCountryToggle = filterCountry.querySelector(".filter-country__toggle");
  const filterCountryButtonClose = filterCountry.querySelector(".filter-country__button");
  filterCountryToggle.addEventListener("click", function() {
    if (filterCountry.classList.contains("filter-country--open")) {
      filterCountry.classList.remove("filter-country--open");
    } else {
      filterCountry.classList.add("filter-country--open");
    }
  });
  filterCountryButtonClose.addEventListener("click", function() {
    filterCountry.classList.remove("filter-country--open");
  });
}

if (filterCompanionWrraper.length) {
  for (let i = 0; i < filterCompanionName.length; i++) {
    filterCompanionName[i].addEventListener("click", function() {
      if (filterCompanionWrraper[i].classList.contains("filter-companion__wrapper--open")) {
        filterCompanionWrraper[i].classList.remove("filter-companion__wrapper--open");
      } else {
        filterCompanionWrraper[i].classList.add("filter-companion__wrapper--open");
      }
    });
  }
}

if (filterCompanionSubmitButton) {
  filterCompanionSubmitButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    document.location.href = "/new_companion.html";
  });
}

if (cartProfileLink) {
  const cartProfileModalResponse = document.querySelector(".cart-profile__response-wrapper");
  const cartProfileButtonClose = document.querySelector(".cart-profile__response-button");
  for (let i = 0; i < cartProfileLink.length; i++) {
    cartProfileLink[i].addEventListener("click", function(evt) {
      evt.preventDefault();
      cartProfileModalResponse.classList.add("cart-profile__response-wrapper--open");
    });
  }
  if (cartProfileButtonClose) {
    cartProfileButtonClose.addEventListener("click", function() {
      cartProfileModalResponse.classList.remove("cart-profile__response-wrapper--open");
    });
  }
}

if (cartProfilePageLink) {
  cartProfilePageLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    let cartProfileList = document.querySelector(".cart-profile__list");
    for (let i = 0; i < 4; i++) {
      let cartProfileItem = document.createElement("li");
      cartProfileItem.classList.add("cart-profile__item");
      cartProfileItem.style.height = "397px";
      cartProfileList.appendChild(cartProfileItem);
    }
  })
}

if (cartProfilePageButtonLeft && cartProfilePageButtonRight) {
  cartProfilePageButtonLeft.addEventListener("click", function() {
    document.location.href = "/previous_page_catalog.html";
  });
  cartProfilePageButtonRight.addEventListener("click", function() {
    document.location.href = "/next_page_catalog.html";
  });
}

if (addPlanSend) {
  addPlanSend.addEventListener("click", function(evt) {
    const addPlanEntertainmentError = document.querySelector(".add-plan__entertainment-error");
    const addPlanEntertainmentText = document.querySelectorAll(".add-plan__entertainment-text");
    if (addPlanEntertainmentText[0].value == "") {
      evt.preventDefault();
      addPlanEntertainmentText[0].classList.add("add-plan__entertainment-text--error");
      addPlanEntertainmentError.style.display = "flex";
    }
  });
}
