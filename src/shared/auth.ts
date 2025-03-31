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
      router.replace("/");
    } else {
      throw Error("Login failed");
    }
  };

  return { signIn, isLoading: false, isAuthenticated: false };
};
