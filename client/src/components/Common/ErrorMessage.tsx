type ErrorMessageProps = {
  display: boolean;
  setDisplay: (bool: boolean) => void;
  error?: { detail: string | null };
  className?: string;
};

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  display,
  error,
  setDisplay,
  className,
}) => {
  return (
    <>
      {display && (
        <span
          onClick={() => setDisplay(false)}
          className={`border-red-200  bg-yellow-100 text-red-700 rounded absolute shadow cursor-pointer z-50 ${className}`}
        >
          {error?.detail}
        </span>
      )}
    </>
  );
};
