document.addEventListener("DOMContentLoaded", () => {

  const projectsList = document.getElementById("projects-list");

  if (projectsList && typeof projects !== "undefined") {
    projects.forEach(project => {
      const card = document.createElement("article");
      card.className = "card";

      let imageHTML = "";
      if (project.image) {
        imageHTML = `<img src="${project.image}" alt="${project.title}" style="width:100%; height:190px; object-fit:contain; border-radius:6px; margin-bottom:0.8rem;">`;
      }

      card.innerHTML = `
        ${imageHTML}
        <h3>${project.title}</h3>
        <p>${project.description}</p>
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
        return;
      }

      const subject = encodeURIComponent(
        `Portfolio message from ${name}`
      );

      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
      );

      status.textContent =
        "Opening your email application. Please send your message.";

      window.location.href =
        `mailto:cadiaopinky18@gmail.com?subject=${subject}&body=${body}`;
    });
  }

});