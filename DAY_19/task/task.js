console.log("Dynamic Tab Project");

// Select parent elements
const tabHeaders = document.querySelector(".tab-headers");
const tabContents = document.querySelectorAll(".content");
const tabs = document.querySelectorAll(".tab");

// Function to switch tabs
function switchToTab(tabNumber) {
  // Remove active from all tabs
  tabs.forEach((tab) => tab.classList.remove("active"));
  tabContents.forEach((content) => content.classList.remove("active"));

  // Add active to selected tab
  const selectedTab = document.querySelector(`.tab[data-tab="${tabNumber}"]`);
  const selectedContent = document.querySelector(
    `.content[data-tab="${tabNumber}"]`
  );

  if (selectedTab && selectedContent) {
    selectedTab.classList.add("active");
    selectedContent.classList.add("active");

    // Dispatch custom event
    const tabChangeEvent = new CustomEvent("tabChanged", {
      detail: { tabName: selectedTab.textContent },
    });
    document.dispatchEvent(tabChangeEvent);
  }
}

// Event delegation for tab clicks
tabHeaders.addEventListener("click", function (e) {
  if (e.target.classList.contains("tab")) {
    e.stopPropagation(); // optional advanced control
    const tabNumber = e.target.dataset.tab;
    switchToTab(tabNumber);
  }
});

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  if (e.key === "1") switchToTab(1);
  if (e.key === "2") switchToTab(2);
  if (e.key === "3") switchToTab(3);
});

// Listen for custom event
document.addEventListener("tabChanged", function (e) {
  console.log(`Tab Changed to: ${e.detail.tabName}`);
});
