function navbtns(id)
{
    btn = document.getElementById('H' + (id).toString())
    btn.style.color = 'black';
}
function btnsrestore(id)
{
    btn = document.getElementById('H' + (id).toString())
    btn.style.color = 'white';
}
function servicemouseon(id)
{
    var elem = document.getElementById(id)
    elem.style.color = 'white';
    elem.style.backgroundColor = ' rgb(11, 73, 158)';
    elem.style.border = 'transparent';
}
function servicemouseout(id)
{
    var elem = document.getElementById(id)
    elem.style.color = 'black';
    elem.style.backgroundColor = 'white';
}
const exp = document.getElementById('exp');
const proj = document.getElementById('pros');
exp.addEventListener('mouseover',()=>{
    exp.style.backgroundColor = "rgb(11, 73, 158)";
    exp.style.color = 'white';
});
proj.addEventListener('mouseover',()=>{
    proj.style.backgroundColor = "rgb(11, 73, 158)";
    proj.style.color = 'white';
});
exp.addEventListener('mouseout',()=>
{
    exp.style.backgroundColor = "rgb(187, 187, 6)";
    exp.style.color = 'black';
});
proj.addEventListener('mouseout',()=>{
    proj.style.backgroundColor = "white";
    proj.style.color = 'black';
});
///////////////////////////////////////////////////////////////////////
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("bar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
///////////////////////////////////////////////////////////////////////

//                                           Daowd Was HERE :D
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.button');
    const cardContainer = document.querySelector('.projects');
  
    // Define an array of projects
    const projects = [
        { type: 'software', title: 'Software Project 1', description: 'This is a description for Software Project 1.', link: 'https://www.google.com/search?q=software+project+1' },
        { type: 'hardware', title: 'Hardware Project 1', description: 'This is a description for Hardware Project 1.', link: 'https://www.google.com/search?q=hardware+project+1' },
        { type: 'electronics', title: 'Electronics Project 1', description: 'This is a description for Electronics Project 1.', link: 'https://www.google.com/search?q=electronics+project+1' },
        { type: 'software', title: 'Software Project 2', description: 'This is a description for Software Project 2.', link: 'https://www.google.com/search?q=software+project+2' },
        { type: 'hardware', title: 'Hardware Project 2', description: 'This is a description for Hardware Project 2.', link: 'https://www.google.com/search?q=hardware+project+2' },
        { type: 'electronics', title: 'Electronics Project 2', description: 'This is a description for Electronics Project 2.', link: 'https://www.google.com/search?q=electronics+project+2' }
      // Add more projects as needed
    ];
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        buttons.forEach(btn => {
          btn.classList.remove('active');
          btn.style.backgroundColor = 'transparent';
        });
  
        button.classList.add('active');
        button.style.backgroundColor = "#e79b07";
  
        const selectedCategory = button.getAttribute('data-category');
  
        // Remove existing cards before adding new ones
        while (cardContainer.firstChild) {
          cardContainer.removeChild(cardContainer.firstChild);
        }
  
        // Call a function to add cards based on the selected category
        addCards(selectedCategory);
      });
    });
  
function addCards(category) {
    const matchingProjects = category === 'all' ? projects : projects.filter(project => project.type === category);

    // Remove existing cards before adding new ones
    while (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.firstChild);
    }

    matchingProjects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project';
    card.innerHTML = `
        <h3 class="title">${project.title}</h3>
        <p class="description">${project.description}</p>
        <a href="${project.link}" target="_blank" class="icon-link">
        <img src="github.png" alt="Link Icon" class="link-icon">
    </a>
    `;
    cardContainer.appendChild(card);
    });
}

// Initialize with the "All projects" button selected
addCards('all');
});
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}