const scrollToId = async (section) => {
  const element = document.getElementById(section);
  const target = element.getBoundingClientRect().top + window.scrollY;

  await window.scrollTo({
    top: target,
    behavior: "smooth",
  });
};

export default scrollToId;
