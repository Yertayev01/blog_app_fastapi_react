const offClickHelper = (ref, offClick) => {
  const listener = (event) => {
    if (!ref.current || ref.current.contains(event.target)) {
      return;
    }
    offClick();
  };
  document.addEventListener("mousedown", listener);
  return () => {
    document.removeEventListener("mousedown", listener);
  };
};

module.exports = { offClickHelper };
