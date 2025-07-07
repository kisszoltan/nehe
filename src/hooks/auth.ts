import { useRouter } from "next/navigation";

export const useAuth = () => {
  const router = useRouter();
  const signIn = async (flow: "password", data: FormData) => {
    if (flow === "password" && data.get("flow")?.toString() === "signUp") {
      throw Error("Registration is disabled");
    }

    if (
      flow === "password" &&
      data.get("email")?.toString() === "test@test.com"
    ) {
      storeUser(data.get("email")!.toString());
      router.replace("/");
    } else {
      throw Error("Login failed");
    }
  };
  const signOut = async () => {
    localStorage.removeItem("user");
    router.refresh();
  };

  const isAuthenticated = () => {
    if (typeof window !== "undefined") {
      return !!localStorage.getItem("user");
    }
  };

  return { signIn, signOut, isLoading: false, isAuthenticated };
};

function storeUser(email: string) {
  const user = localStorage.getItem("user");

  if (user) {
    throw Error("Already logged in");
  }
  localStorage.setItem(
    "user",
    JSON.stringify({
      email,
      image: "https://i.pravatar.cc/300?img=47",
    }),
  );
}
