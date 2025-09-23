"use client";

import { useAuth } from "@/components/sessionprovider";
import { useRouter } from "next/navigation";
import supadata from "@/lib/supabaseclient";
import { useEffect } from "react";

export default function Homepage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth/sign-in"); // redirect if not signed in
    }
  }, [user, loading, router]);

  const handleLogout = async () => {
    await supadata.auth.signOut();
    router.push("/auth/sign-in");
  };

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>You must be signed in to view this page.</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Welcome 🎉</h1>
      {user && <p className="mt-2">Signed in as: {user.email}</p>}

      <button
        onClick={handleLogout}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}
