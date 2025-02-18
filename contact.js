document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission
  
      const formData = new FormData(form);
  
      fetch("contact.php", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.text())
        .then((data) => {
          alert(data); // Show response message
          form.reset(); // Reset form after submission
        })
        .catch((error) => console.error("Error:", error));
    });
  });
  