export default function initProjectToggle() {
  const toggleButtons = document.querySelectorAll(".toggle-btn");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const foldableSection = button.nextElementSibling;

      if (!foldableSection) return;

      const isVisible = foldableSection.classList.contains("show");

      foldableSection.classList.toggle("show", !isVisible);
      button.textContent = isVisible
        ? "Show Details"
        : "Hide Details";
    });
  });
}
