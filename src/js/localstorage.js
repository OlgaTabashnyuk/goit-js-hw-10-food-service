const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchThemeRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

switchThemeRef.addEventListener('change', changeTheme);

function changeTheme() {
  if (switchThemeRef.checked) {
    bodyRef.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
    bodyRef.classList.remove(Theme.LIGHT);
  } else {
    bodyRef.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
    bodyRef.classList.remove(Theme.DARK);
  }
}

function saveTheme() {
  if (localStorage.getItem('theme') === Theme.DARK) {
    switchThemeRef.checked = true;
    bodyRef.classList.add(Theme.DARK);
  } else {
    switchThemeRef.checked = false;
    bodyRef.classList.add(Theme.LIGHT);
  }
}
saveTheme();
