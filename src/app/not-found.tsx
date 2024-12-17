export default function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{ minHeight: "calc(100vh - 193px)" }}
    >
      <h1 className="mb-4 text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600">
        We couldn’t find the page you’re looking for.
      </p>
    </div>
  );
}
