export default function videoCover() {
  const videoCovers = document.querySelectorAll(".video-cover");
  const videoElements = document.querySelectorAll(".video");

  if (!videoCovers || videoCovers.length === 0) {
    return;
  }

  videoCovers.forEach((videoCover) => {
    videoCover.addEventListener("click", function (event) {
      event.preventDefault();

      const currentCover = this;
      const videoElement = currentCover.parentElement.querySelector(".video");

      if (videoElement && videoElement.tagName === "VIDEO") {
        videoElements.forEach((video) => {
          if (video !== videoElement) {
            video.pause();
          }
        });

        videoElement.play().catch((error) => {
          console.error("Error playing video:", error);
        });

        currentCover.classList.replace("opacity-100", "opacity-0");
        currentCover.classList.replace("pointer-events-auto", "pointer-events-none");
      } else {
        console.warn("No corresponding video element found for this cover");
      }
    });
  });
}
