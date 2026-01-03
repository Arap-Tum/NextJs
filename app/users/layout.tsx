export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="text-red-700"> THis is user Route</h1>
      {children}
    </div>
  );
}
