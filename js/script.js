function createPanel() {
  // define new elements
//   const button = document.createElement('button');
  const button = document.querySelector('button');
  const panel = document.createElement('div');
  const home = document.createElement('p');
  const projects = document.createElement('p');
  const aboutMe = document.createElement('p');
  const resume = document.createElement('p');
  const contact = document.createElement('p');
  
  // Setup structure of elements
  panel.appendChild(home);
  panel.appendChild(projects);
  panel.appendChild(aboutMe);
  panel.appendChild(resume);
  panel.appendChild(contact);

  
  // set class names
//   button.classList.add('button');
  panel.classList.add('panel');
  
//   const open = '\u25bc';
//   const close = '\u25b2';
  // set text content
//   button.textContent = &#9776;
  home.textContent = 'Home';
  projects.textContent = 'Projects';
  aboutMe.textContent = 'About Me';
  resume.textContent = 'Resume';
  contact.textContent = 'Contact';
  
  

  button.addEventListener('click', event => {
    // console.log('button clicked', event.target)
    // 1. toggle hide-btn on BOTH buttons
    // buttonOpen.classList.toggle('hide-btn')
    // buttonClose.classList.toggle('hide-btn')
    // 2. Change visibility of the content w/ 'toggle-on'
    panel.classList.toggle('toggle-on');
    event.stopPropagation();
  })
  
  return panel
}

const accordion = document.querySelector('.menu');


// accordion.appendChild(createPanel());