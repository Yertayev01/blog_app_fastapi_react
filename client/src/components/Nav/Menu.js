const Menu = ({ items, className }) => {
  return (
    <div className={className}>
      {items.map((item) => {
        return (
          <span className="px-10 py-2 text-lg text-white border hover:border-b-2 border-green-50 border-opacity-0 active:text-green-100 hover:border-opacity-50 hover:shadow active:border-b-0 active:border-opacity-0 active:shadow-inner active:bg-green-600 active:bg-opacity-30 rounded cursor-pointer">
            {item}
          </span>
        );
      })}
    </div>
  );
};

export default Menu;
