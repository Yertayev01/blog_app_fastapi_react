const Input = ({ title, inputState, onChange, type }) => {
  return (
    <label className="flex flex-col text-green-600">
      {title}
      <input
        className="border border-green-100 mb-2 mt-1 px-2 shadow"
        value={inputState}
        onChange={onChange}
        type={type}
      />
    </label>
  );
};

export default Input;
