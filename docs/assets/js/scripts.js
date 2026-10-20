const themeToggle = document.querySelector("#theme-toggle");
const shareButton = document.querySelector("#share");
const toastRegion = document.querySelector("#toast-region");
const toastTitle = document.querySelector("#toast-title");
const toastDescription = document.querySelector("#toast-description");

document.querySelector("#year").textContent = String(new Date().getFullYear());

/* ---------- Theme ---------- */

function currentTheme() {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const next = theme === "dark" ? "light" : "dark";
  themeToggle.setAttribute("aria-label", `Switch to ${next} theme`);
}

applyTheme(currentTheme());

themeToggle.addEventListener("click", () => {
  const next = currentTheme() === "dark" ? "light" : "dark";
  applyTheme(next);
  try {
    localStorage.setItem("theme", next);
  } catch {
    // Private windows may block storage; the theme still changes for this visit
  }
});

/* ---------- Share ---------- */

let toastTimer;

function showToast(title, description) {
  toastTitle.textContent = title;
  toastDescription.textContent = description;
  toastRegion.hidden = false;
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toastRegion.hidden = true;
  }, 4000);
}

shareButton.addEventListener("click", async () => {
  const shareData = {
    title: "Hemerson Oliveira · Links",
    text: "Portfolio, design system, projects and contact.",
    url: location.href,
  };

  // Phones get the native share sheet; everyone else gets the link copied
  if (navigator.share && navigator.canShare?.(shareData)) {
    try {
      await navigator.share(shareData);
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }

  try {
    await navigator.clipboard.writeText(location.href);
    showToast("Link copied", "Paste it anywhere to share this page.");
  } catch {
    showToast("Couldn't copy the link", location.href);
  }
});
