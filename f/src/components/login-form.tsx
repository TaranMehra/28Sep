import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useReducer, type FormEventHandler } from "react";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";
import { AuthSessionGet, SendLoginData } from "@/lib/dbOperations";
import { toast } from "sonner";

interface FormData {
  username: string;
  password: string;
}

const intialValue = {
  username: "",
  password: "",
};

type ActionBluePrint = { type: "UPDATE_FORM"; value: string; field: "username" | "password" };

function reducer(state: FormData, action: ActionBluePrint) {
  switch (action.type) {
    case "UPDATE_FORM":
      return { ...state, [action.field]: action.value };
  }
}

export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
  const navigate = useNavigate();
  const handleFormSubmitData: FormEventHandler = async (e) => {
    e.preventDefault();
    try {
      const result = await SendLoginData(state);
      // console.log("what back SendLoginData gave us", result);
      const { user } = result;
      if (user) {
        // console.log("user is presenttttt :::resutl is : ", user);
        if (user) navigate("/chat");
        // const {  } = result.data;
        // toast("Welcome", {
        //   action: {
        //     label: user ? "Home" : "OK",
        //     onClick: () => {
        //       if (user) redirect("/chat");
        //       else window.location.reload();
        //     },
        //   },
        // });
      }
    } catch (error) {
      toast(`${error}`, {
        description: "Please try again later",
      });
      console.log("error : ", error);
      // const {response} = error;
    }
  };

  const [state, dispatch] = useReducer(reducer, intialValue);
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleFormSubmitData}>
            {/* <form action="/auth/signin" method="POST"> */}
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="Username">Username</FieldLabel>
                <Input
                  id="username"
                  type="username"
                  placeholder="user1234"
                  required
                  onChange={(e) => dispatch({ type: "UPDATE_FORM", field: "username", value: e.target.value })}
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a href="#" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="text"
                  required
                  onChange={(e) => dispatch({ type: "UPDATE_FORM", field: "password", value: e.target.value })}
                />
              </Field>
              <Field>
                <Button type="submit">Login</Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <Link to="/sign-up">Sign up</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
