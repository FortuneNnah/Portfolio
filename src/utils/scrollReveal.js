export const observeElements = (selector = "[data-scroll-reveal]") => {
  const elements = document.querySelectorAll(selector);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  elements.forEach((el) => observer.observe(el));
};

export const observeCountUp = (selector = "[data-count-up]") => {
  const elements = document.querySelectorAll(selector);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        const endValue = parseInt(entry.target.textContent, 10);
        const duration = 2000;
        const increment = endValue / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= endValue) {
            entry.target.textContent = endValue;
            clearInterval(timer);
            entry.target.dataset.animated = "true";
          } else {
            entry.target.textContent = Math.floor(current);
          }
        }, 16);

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach((el) => observer.observe(el));
};
