export const safeScroll = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    const rect = el.getBoundingClientRect();
    const scrollTop = window.scrollY + rect.top - 100;
    window.scrollTo({
      top: scrollTop,
      behavior: "smooth",
    });
  }
};
