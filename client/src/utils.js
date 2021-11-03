const offClickHelper = (ref, offClick) => {
  const listener = (event) => {
    console.log("event", event.target);
    if (!ref.current || ref.current.contains(event.target)) {
      if (ref.current.contains(event.target)) console.log("clicked ref child");
      return;
    }
    console.log("closed");
    offClick();
  };
  document.addEventListener("mousedown", listener);
  document.addEventListener("touchstart", listener);
  return () => {
    document.removeEventListener("mousedown", listener);
    document.removeEventListener("touchstart", listener);
  };
};

module.exports = { offClickHelper };
