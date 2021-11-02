const Input = ({ title, inputState, onChange, type }) => {
  return (
    <label className="flex flex-col text-green-600">
      {title}
      <input
        className="border mb-2"
        value={inputState}
        onChange={onChange}
        type={type}
      />
    </label>
  );
};

export default Input;
