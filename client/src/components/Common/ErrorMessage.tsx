type ErrorMessageProps = {
  display: boolean;
  setDisplay: (bool: boolean) => void;
  error?: { detail: string | null };
  className?: string;
  overrideClasses?: boolean;
};

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  display,
  error,
  setDisplay,
  className,
  overrideClasses = false,
}) => {
  const defaultClasses =
    "border-red-200  bg-yellow-100 text-red-700 rounded absolute shadow cursor-pointer z-50";
  const classes = overrideClasses
    ? className
    : `${defaultClasses} ${className}`;

  return (
    <>
      {display && (
        <span onClick={() => setDisplay(false)} className={classes}>
          {error?.detail}
        </span>
      )}
    </>
  );
};
