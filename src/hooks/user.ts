import { User } from "@/types";

export const useUser = () => {
  if (typeof window !== "undefined") {
    const userStr = localStorage.getItem("user");

    if (!userStr) return;

    return JSON.parse(userStr) as User;
  }
};
