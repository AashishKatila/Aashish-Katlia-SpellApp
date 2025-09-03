export const Error = ({
  message = "Something went wrong.",
}: {
  message?: string;
}) => (
  <div className="flex flex-col justify-center items-center h-64 text-center">
    <h2 className="h2 mb-2 text-red-600">Error</h2>
    <p className="body mb-4">{message}</p>
  </div>
);
