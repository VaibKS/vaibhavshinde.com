export default function Container({ className, children }) {
  return (
    <div className={`w-full max-w-3xl p-6 mx-auto ${className}`}>
      {children}
    </div>
  );
}
