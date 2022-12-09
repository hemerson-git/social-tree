document.addEventListener("DOMContentLoaded", () => {
  particlesJS.load("particles-js", "assets/particles.json", function () {
    console.log("callback - particles.js config loaded");
  });

  // Share Icon
  const btnShare = document.querySelector("#share");

  btnShare.addEventListener("click", async () => shareSocialTree());
});

async function shareSocialTree() {
  const isMobile = innerWidth <= 720;
  const url = location.href;
  const successBackground =
    "linear-gradient(to right, var(--success-300), var(--success-500))";
  const errorBackground =
    "linear-gradient(to right, var(--danger-300), var(--danger-500))";

  // if (!isMobile) {
  //   try {
  //     await navigator.clipboard.writeText(url);
  //     showToastMessage(`Link copied to clipboard!`, {
  //       background: successBackground,
  //     });
  //   } catch (e) {
  //     showToastMessage(
  //       "Could not copy this link to clipboard, please try again!",
  //       {
  //         background: errorBackground,
  //       }
  //     );
  //   }

  //   return;
  // }

  // if (isMobile) {
  try {
    await navigator.share({
      title: "Hemerson Social Tree",
      text: "Share this link",
      url,
      files: [],
    });
  } catch (e) {
    showToastMessage(
      "Something went wrong while sharing this link, please try again!",
      { background: errorBackground }
    );
  }
  // }
}

function showToastMessage(msg, style) {
  Toastify({
    text: msg,
    position: "right",
    gravity: "bottom",
    stopOnFocus: true,
    style: {
      borderRadius: ".5rem",
      ...style,
    },
  }).showToast();
}
