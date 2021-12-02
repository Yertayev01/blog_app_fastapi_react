import { ChangeEventHandler } from "react";

export type InputProps = {
  title: string;
  inputState: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  type?: string;
  classNames?: { label: string; input: string };
};

const Input = ({
  title,
  inputState,
  onChange,
  type,
  classNames,
}: InputProps) => {
  if (!classNames?.label && !classNames?.input) {
    classNames = {
      label: "flex flex-col text-green-600",
      input: "border border-green-100 mb-2 mt-1 px-2 shadow",
    };
  }
  return (
    <label className={classNames.label}>
      {title}
      <input
        name={title}
        className={classNames.input}
        value={inputState}
        onChange={onChange}
        type={type}
      />
    </label>
  );
};

export default Input;
