// "use client";
import { redirect } from 'next/navigation';

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactElement;
}) {
  const user = true;

  if (!user) {
    redirect("/auth/login");
  }
  return children;
}
