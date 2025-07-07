"use client";

import { useState } from "react";
import { Button, Input, Checkbox, Form, addToast } from "@heroui/react";
import { Icon } from "@iconify/react";

import { Link } from "@/components/ui/link";
import { useAuth } from "@/shared/auth";
import { Logo } from "@/components/ui/logo";

export default function Component() {
  const { signIn } = useAuth();
  const [agreed, setAgreed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    const formData = new FormData(event.currentTarget);

    formData.append("flow", "signUp");
    signIn("password", formData)
      .catch(() =>
        addToast({
          color: "danger",
          title: "Unable to register!",
          description:
            "Either the account already exist, or the password is invalid.",
        }),
      )
      .finally(() => setSubmitting(false));
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-4 rounded-large">
        <div className="flex flex-col items-center">
          <Logo />
          <p className="text-xl font-medium">Welcome</p>
          <p className="text-small text-default-500">
            Create an account to get started
          </p>
        </div>
        <Form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="flex flex-col w-full">
            <Input
              isRequired
              autoComplete="email"
              classNames={{
                base: "-mb-[2px]",
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
              autoComplete="password"
              classNames={{
                base: "-mb-[2px]",
                inputWrapper:
                  "rounded-none data-[hover=true]:z-10 group-data-[focus-visible=true]:z-10",
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
            <Input
              isRequired
              autoComplete="password"
              classNames={{
                inputWrapper: "rounded-t-none",
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
              label="Confirm Password"
              name="confirmPassword"
              placeholder="Confirm your password"
              type={isVisible ? "text" : "password"}
              variant="bordered"
            />
          </div>
          <Checkbox
            isRequired
            className="py-4"
            isSelected={agreed}
            name="accept"
            size="sm"
            onValueChange={setAgreed}
          >
            I agree with the&nbsp;
            <Link href="/legal/terms" size="sm">
              Terms
            </Link>
            &nbsp; and&nbsp;
            <Link href="/legal/privacy" size="sm">
              Privacy Policy
            </Link>
          </Checkbox>
          <Button
            className="w-full"
            color="primary"
            isDisabled={!agreed || isSubmitting}
            type="submit"
          >
            Sign Up
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
            startContent={<Icon icon="flat-color-icons:google" width={24} />}
            variant="bordered"
          >
            Sign Up with Google
          </Button>
        </div>
        */}
        <p className="text-center text-small">
          Already have an account?&nbsp;
          <Link href="/auth/signin" size="sm">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
