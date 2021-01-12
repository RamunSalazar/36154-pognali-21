const transportButton = document.querySelectorAll('.direction-form__transport-button');
const navigationToggle = document.querySelector('.page-header__navigation-toggle');
const navigation = document.querySelector('.page-header__navigation-top');
const addProfileLink = document.querySelector('.add-profile_link');
const addProfileModal = document.querySelector('.add-profile__modal-wrapper');
const addProfileCloseButton = addProfileModal.querySelector('.add-profile__modal-button');

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

navigationToggle.addEventListener('click', function() {
  if (navigation.classList.contains('page-header__navigation-top--open')) {
    navigation.classList.remove('page-header__navigation-top--open');
  } else {
    navigation.classList.add('page-header__navigation-top--open');
  }
});

addProfileLink.addEventListener('click', function(evt) {
  evt.preventDefault();
  addProfileModal.classList.add('add-profile__modal-wrapper--open');
});

addProfileCloseButton.addEventListener('click', function() {
  addProfileModal.classList.remove('add-profile__modal-wrapper--open');
});
