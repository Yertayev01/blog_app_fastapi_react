import React, { FormEvent, useEffect, useMemo, useState } from "react";
import { ErrorMessage } from "./ErrorMessage";
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
  header?: JSX.Element;
  footer?: JSX.Element;
};

const Form: React.FC<FormType> = ({
  inputs,
  button,
  className,
  onSubmit,
  loading,
  error,
  header,
  footer,
}) => {
  const renderHeader = useMemo(() => {
    return <>{header}</>;
  }, [header]);

  const [formValidError, setFormValidError] = useState(false);

  useEffect(() => {
    setFormValidError(!!error?.detail);
  }, [error]);

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
    button.className = `${"border p-1 w-24 rounded-md mt-2 bg-green-500 text-white shadow active:bg-green-700 active:shadow-none"} 
        ${loading && "animate-spin shadow-none bg-blue-400 border-blue-200"}
      `;
  }

  const renderButton = useMemo(() => {
    return (
      <button
        className={`${button.className} ${loading ? "animate-spin" : ""}`}
      >
        {button.value}
      </button>
    );
  }, [button, loading]);

  const renderError = useMemo(() => {
    return (
      <ErrorMessage
        display={formValidError}
        error={error}
        setDisplay={setFormValidError}
        className={
          "bottom-6 border-l border-t lg:bottom-16 py-1 px-2 animate-fade-in-down-1/4s text-sm"
        }
      />
    );
  }, [formValidError, error]);

  const renderFooter = useMemo(() => {
    return <>{footer}</>;
  }, [footer]);

  if (!className)
    className =
      "relative border-l border-t border-green-400 border-opacity-40 rounded-lg px-28 py-20 lg:px-36 lg:py-28 flex flex-col items-center justify-center shadow-md animate-fade-in-down-1/2s";

  return (
    <form className={className} onSubmit={onSubmit}>
      {renderHeader}
      {renderInputs}
      {renderButton}
      {renderError}
      {renderFooter}
    </form>
  );
};

export default Form;
