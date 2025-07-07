"use client";

import { useParams } from "next/navigation";

import { useUser } from "@/hooks/user";

export default function DashboardPage() {
  const user = useUser();
  const { username } = useParams();

  return user?.username === username ? (
    <>Welcome to your dashboard</>
  ) : (
    <>Public profile of user &apos;{username}&apos;</>
  );
}
