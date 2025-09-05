// ===== Configurable Settings =====
const updateButtonVisible = false; // Set to false to hide, true to show
const updateLink = "https://your-update-link.com"; // Replace with your update link

// ===== Core Logic =====
(function () {
  const container = document.getElementById("updateButtonContainer");
  if (!container) return;

  if (updateButtonVisible) {
    // Create button
    const btn = document.createElement("button");
    btn.innerText = "Update Available";
    btn.style.padding = "10px 20px";
    btn.style.background = "#ff5722";
    btn.style.color = "#fff";
    btn.style.border = "none";
    btn.style.borderRadius = "6px";
    btn.style.cursor = "pointer";
    btn.style.fontSize = "1rem";
    btn.style.animation = "jiggle 0.8s infinite";

    // Click action
    btn.onclick = () => {
      window.location.href = updateLink;
    };

    // Add CSS animation dynamically
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes jiggle {
        0% { transform: rotate(0deg); }
        25% { transform: rotate(-3deg); }
        50% { transform: rotate(3deg); }
        75% { transform: rotate(-3deg); }
        100% { transform: rotate(0deg); }
      }
    `;
    document.head.appendChild(style);

    // Insert into container
    container.appendChild(btn);
  } else {
    // Keep container empty (button hidden)
    container.innerHTML = "";
  }
})();
