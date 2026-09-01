document.addEventListener("DOMContentLoaded", function () {
  var menuToggle = document.getElementById("menu-toggle");
  var btnExit = document.querySelector(".btn-exit");

  menuToggle.addEventListener("change", function () {
    if (this.checked) {
      document.body.style.overflow = "hidden";
      btnExit.style.display = "block";
    } else {
      document.body.style.overflow = "";
      btnExit.style.display = "none";
    }
  });

  btnExit?.addEventListener("click", function () {
    menuToggle.checked = false;
    var event = new Event("change");
    menuToggle.dispatchEvent(event);
  });

  var counters = document.querySelectorAll("[data-counter]");
  var reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (counters.length && !reduceMotion && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }

          var counter = entry.target;
          var target = Number(counter.textContent.trim());
          var duration = 1200;
          var startTime;

          function updateCounter(timestamp) {
            if (!startTime) {
              startTime = timestamp;
            }

            var progress = Math.min((timestamp - startTime) / duration, 1);
            var easedProgress = 1 - Math.pow(1 - progress, 3);
            counter.textContent = Math.round(target * easedProgress);

            if (progress < 1) {
              window.requestAnimationFrame(updateCounter);
            }
          }

          counter.textContent = "0";
          window.requestAnimationFrame(updateCounter);
          observer.unobserve(counter);
        });
      },
      { threshold: 0.5 },
    );

    counters.forEach(function (counter) {
      observer.observe(counter);
    });
  }
});
