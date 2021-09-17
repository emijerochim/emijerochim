const scrollToId = (section) => {
  const element = document.getElementById(section);
  const target = element.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top: target,
    behavior: "smooth",
  });
};

export default scrollToId;
