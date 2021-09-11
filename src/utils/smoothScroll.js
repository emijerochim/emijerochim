const smoothScroll = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
};

export default smoothScroll;
