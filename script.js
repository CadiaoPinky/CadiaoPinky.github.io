document.addEventListener("DOMContentLoaded", () => {

  
  const projects = [
    {
      title: "Simple Personal Portfolio",
      description: "A personal website built with HTML and CSS.",
      image: "simple portfolio.png",
      link: "https://github.com/CadiaoPinky/Simple-Portfolio" 
    },
    {
      title: "Login Page",
      description: "A Login Page built with HTML and CSS.",
      image: "login page.png",
      link: "https://github.com/CadiaoPinky/Login-Page" 
    },
     {
      title: "Sleep Log",
      description: "A simple sleep log for students. Record when you went to bed and when you woke up, and see your average sleep.",
      image: "sleeplog.png",
      link: "https://github.com/CadiaoPinky/Sleep-Log" 
    } 
  ];

 
  const projectsList = document.getElementById("projects-list");

  if (projectsList) {
    projectsList.replaceChildren();

    projects.forEach(project => {
      const card = document.createElement("article");
      card.className = "card";

      let imageHTML = "";
      if (project.image) {
        imageHTML = `<img src="${project.image}" alt="${project.title}" class="project-img">`;
      }

     
      let linkHTML = "";
      if (project.link) {
        linkHTML = `<a href="${project.link}" target="_blank" rel="noopener" class="btn project-link">View Project</a>`;
      }

      card.innerHTML = `
        ${imageHTML}
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        ${linkHTML}
      `;

      projectsList.appendChild(card);
    });
  }

 
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        status.textContent = "Please complete all fields.";
        status.className = "error";
        return;
      }

      const subject = encodeURIComponent(
        `Portfolio message from ${name}`
      );

      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
      );

      status.className = "";
      status.textContent =
        "Opening your email application. Please send your message.";

      window.location.href =
        `mailto:cadiaopinky18@gmail.com?subject=${subject}&body=${body}`;
    });
  }

});
