const changeTemOnPageEl = document.querySelector('body');
const changeCheckboxEl = document.querySelector('#theme-switch-toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};





changeCheckboxEl.addEventListener('change', changeTemOnClick);
currentCheckPosition();



function changeTemOnClick(evt) {

  if (evt.target.checked) {
    localStorage.setItem('theme', Theme.DARK);
   changeTemOnPageEl.classList.add(Theme.DARK);
    changeTemOnPageEl.classList.remove(Theme.LIGHT);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    changeTemOnPageEl.classList.add(Theme.LIGHT);
   changeTemOnPageEl.classList.remove(Theme.DARK);
  }
}



function currentCheckPosition() {
    const checkTheme = localStorage.getItem('theme');

    if (checkTheme !== Theme.DARK) {
        localStorage.setItem('theme', Theme.LIGHT);
        changeTemOnPageEl.classList.add(Theme.LIGHT);
    } else {
        changeTemOnPageEl.classList.add(checkTheme);
        changeCheckboxEl.checked = true;
    }
}