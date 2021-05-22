export default function Container({ className, children }) {
  return (
    <div className={`w-full max-w-2xl p-6 md:px-0 mx-auto ${className}`}>
      {children}
    </div>
  );
}
