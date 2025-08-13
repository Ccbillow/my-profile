export default function initTechStackTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  if (!tabButtons.length || !tabPanels.length) return;

  tabButtons.forEach((btn, i) => {
    if (i === 0) btn.classList.add('active');
    else btn.classList.remove('active');
  });

  tabPanels.forEach((panel, i) => {
    if (i === 0) panel.classList.add('active');
    else panel.classList.remove('active');
  });

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabId = button.dataset.tab;
      if (!tabId) return;

      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      tabPanels.forEach(panel => panel.classList.remove('active'));

      setTimeout(() => {
        const activePanel = document.getElementById(tabId);
        if (activePanel) {
          activePanel.classList.add('active');
        }
      }, 350);
    });
  });
}
