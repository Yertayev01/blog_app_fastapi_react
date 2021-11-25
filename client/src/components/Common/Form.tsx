import React, { FormEvent, useMemo } from "react";
import Input, { InputProps } from "./Input";

export type formErrorType = {
  detail: string | null;
};

type FormType = {
  inputs: InputProps[];
  button: { value: string; className?: string };
  onSubmit: (e: FormEvent) => void;
  loading: boolean;
  className?: string;
  error?: formErrorType;
};

const Form: React.FC<FormType> = ({
  inputs,
  button,
  className,
  onSubmit,
  loading,
  error,
  children,
}) => {
  const renderInputs = useMemo(
    () =>
      inputs.map((input) => {
        return (
          <Input
            key={input.title}
            title={input.title}
            inputState={input.inputState}
            onChange={input.onChange}
            type={input.type}
            classNames={input.classNames}
          />
        );
      }),
    [inputs]
  );

  if (!button?.className) {
    button.className =
      "border p-1 w-24 rounded-md mt-2 bg-green-500 text-white shadow active:bg-green-700 active:shadow-none";
  }

  const renderButton = useMemo(() => {
    return (
      <button className={button.className}>
        {loading ? "..." : button.value}
      </button>
    );
  }, [button, loading]);

  const renderError = useMemo(() => {
    return (
      <>
        {error?.detail && (
          <span className="bottom-2 border-l border-t border-red-200 lg:bottom-10 bg-yellow-100 py-1 px-2 rounded text-red-700 m2-62 text-sm absolute shadow">
            {error.detail}
          </span>
        )}
      </>
    );
  }, [error]);

  if (!className)
    className =
      "relative border-l border-t border-green-400 border-opacity-40 rounded-lg px-16 py-12 lg:px-32 lg:py-24 flex flex-col items-center justify-center shadow-md";

  return (
    <form className={className} onSubmit={onSubmit}>
      {renderInputs}
      {renderButton}
      {renderError}
      {children}
    </form>
  );
};

export default Form;
