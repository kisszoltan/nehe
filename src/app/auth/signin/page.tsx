"use client";

import { FormEvent, useState } from "react";
import { Button, Input, Link, Form, addToast } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useSearchParams } from "next/navigation";

import { useAuth } from "@/shared/auth";
import { Logo } from "@/components/logo";

export default function Component() {
  const queryParams = useSearchParams();
  const { signIn } = useAuth();
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    const formData = new FormData(event.currentTarget);

    formData.append("flow", "signIn");
    formData.append("redirectTo", queryParams.get("ref") ?? "/");

    signIn("password", formData).catch((_) => {
      addToast({
        description: "Login failed",
        color: "danger",
      });
      setSubmitting(false);
    });
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-4 rounded-large">
        <div className="flex flex-col items-center">
          <Logo />
          <p className="text-xl font-medium">Welcome Back</p>
          <p className="text-small text-default-500">
            Log in to your account to continue
          </p>
        </div>
        <Form
          className="flex flex-col"
          validationBehavior="native"
          onSubmit={handleSubmit}
        >
          <Input
            isRequired
            autoComplete="username"
            classNames={{
              base: "-mb-2.5",
              inputWrapper:
                "rounded-b-none data-[hover=true]:z-10 group-data-[focus-visible=true]:z-10",
            }}
            label="Email Address"
            name="email"
            placeholder="Enter your email"
            type="email"
            variant="bordered"
          />
          <Input
            isRequired
            classNames={{
              inputWrapper:
                "rounded-t-none data-[hover=true]:z-10 group-data-[focus-visible=true]:z-10",
            }}
            endContent={
              <button type="button" onClick={toggleVisibility}>
                {isVisible ? (
                  <Icon
                    className="pointer-events-none text-2xl text-default-400"
                    icon="solar:eye-closed-linear"
                  />
                ) : (
                  <Icon
                    className="pointer-events-none text-2xl text-default-400"
                    icon="solar:eye-bold"
                  />
                )}
              </button>
            }
            label="Password"
            name="password"
            placeholder="Enter your password"
            type={isVisible ? "text" : "password"}
            variant="bordered"
          />
          {/*
          <div className="flex w-full items-center justify-between px-1 py-2">
            <Checkbox name="remember" size="sm">
              Remember me
            </Checkbox>
            <Link className="text-default-500" href="#" size="sm">
              Forgot password?
            </Link>
          </div>
             */}
          <Button
            className="w-full"
            color="primary"
            disabled={isSubmitting}
            isLoading={isSubmitting}
            type="submit"
          >
            Sign In
          </Button>
        </Form>
        {/*
        <div className="flex items-center gap-4 py-2">
          <Divider className="flex-1" />
          <p className="shrink-0 text-tiny text-default-500">OR</p>
          <Divider className="flex-1" />
        </div>
        <div className="flex flex-col gap-2">
          <Button
            disabled={isSubmitting}
            startContent={<Icon icon="flat-color-icons:google" width={24} />}
            variant="bordered"
          >
            Continue with Google
          </Button>
        </div>
        */}
        <p className="text-center text-small">
          Need to create an account?&nbsp;
          <Link href="/auth/signup" size="sm">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
