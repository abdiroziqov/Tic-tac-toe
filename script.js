function openTab(evt, tabId) {
    // Hide all tab contents
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
      tabContents[i].classList.remove("show");
    }
  
    // Deactivate all tab buttons
    const tabButtons = document.getElementsByClassName("tab-button");
    for (let i = 0; i < tabButtons.length; i++) {
      tabButtons[i].classList.remove("active");
    }
  
  
    // Activate the clicked tab button
    evt.currentTarget.classList.add("active");
  }
  
  // Open the default tab on page load
  document.getElementsByClassName("tab-button")[0].classList.add("active");
  