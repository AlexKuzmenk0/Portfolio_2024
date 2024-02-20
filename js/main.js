// button close

const skills = document.querySelector('.op-skills'),
  items = document.querySelector('.main_projects_skills_stuff'),
  close = document.querySelector('.main_projects_skills_stuff_close');

skills.addEventListener('click', () => {
  items.classList.add('active');
});

close.addEventListener('click', () => {
  items.classList.remove('active');
});

// welcome

