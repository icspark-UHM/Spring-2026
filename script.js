// Responsive nav
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.classList.toggle('open');
  });
}

// Display current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Editable "Information and Updates" text (persist in localStorage)
const editable = document.querySelector('.editable');
const saveStatus = document.getElementById('save-status');
const lastModifiedSpan = document.getElementById('last-modified');

const STORAGE_KEY = 'infoCardContent';
const DATE_KEY = 'infoCardModified';
const saved = localStorage.getItem(STORAGE_KEY);
const savedDate = localStorage.getItem(DATE_KEY);
if (saved) {
  editable.innerHTML = saved;
}
if (savedDate) {
  lastModifiedSpan.textContent = savedDate;
}

// Debounce save
let saveTimer;
editable.addEventListener('input', () => {
  saveStatus.textContent = 'Saving...';
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    localStorage.setItem(STORAGE_KEY, editable.innerHTML.trim());
    const today = new Date().toLocaleDateString();
    localStorage.setItem(DATE_KEY, today);
    lastModifiedSpan.textContent = today;
    saveStatus.textContent = 'Saved.';
    setTimeout(() => (saveStatus.textContent = ''), 2000);
  }, 500);
});

// Add button example (could open modal, etc.)
const addBtn = document.querySelector('.add-btn');
if (addBtn) {
  addBtn.addEventListener('click', () => {
    alert('Add new module/card action here.');
  });
}
