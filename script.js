document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("toggle-theme");
    const body = document.body;
    const themeText = document.getElementById("theme-text");
  
    function updateThemeText(theme) {
      themeText.textContent = theme === "dark" ? "Светлая тема" : "Темная тема";
    }
  
    toggle.addEventListener("click", () => {
      const currentTheme = body.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      body.setAttribute("data-theme", newTheme);
      updateThemeText(newTheme);
    });
  
    updateThemeText(body.getAttribute("data-theme"));
  });

  document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
  });