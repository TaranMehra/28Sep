import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useReducer, type FormEventHandler } from "react";
import { SendSignUpData } from "@/lib/dbOperations";
import { toast, Toaster } from "sonner";
import { Link, redirect } from "react-router-dom";

interface FormData {
  username: string;
  email: string;
  password: string;
}

type Action = { type: "UPDATE_FIELD"; field: "username" | "email" | "password"; value: string };
// | { type: "SET_EMAIL"; payload: string }
// | { type: "SET_PASSWORD"; payload: string };

const initialState: FormData = {
  username: "",
  email: "",
  password: "",
};

const reducer = (state: FormData, action: Action): FormData => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

export function SignupForm({ className, ...props }: React.ComponentProps<"div">) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const handleSubmitData: FormEventHandler = async (e) => {
  //   e.preventDefault();

  //   //sending data to server
  //   const result = await SendSignUpData(state);
  //   // console.log("after sending we got result : ", result.data.response);
  //   const { success, message } = result?.data;
  //     toast(message, {
  //       description: "Welcome To Chat App , Now You Can login ",
  //       action: {
  //         label: "Undo",
  //         onClick: () => redirect("/login"),
  //       },
  //     });
  //   if (success) {
  //     toast(message, {
  //       description: "Welcome To Chat App , Now You Can login ",
  //       action: {
  //         label: "Undo",
  //         onClick: () => redirect("/login"),
  //       },
  //     });
  //   } else {
  //     toast(message, {
  //       description: "Try Again",
  //       action: {
  //         label: "OK",
  //         onClick: () => window.location.reload(),
  //       },
  //     });
  //   }

  //   console.log("after sending we got result : ", result.data, success);

  //   // if(result.data.success)
  // };

  const handleSubmitData: FormEventHandler = async (e) => {
    e.preventDefault();

    try {
      const result = await SendSignUpData(state);
      const { success, message } = result.data;

      toast(message, {
        description: success ? "Welcome To Chat App, Now You Can login" : "Try Again",
        action: {
          label: success ? "Login" : "OK",
          onClick: () => {
            if (success) redirect("/login");
            else window.location.reload();
          },
        },
      });
    } catch (error) {
      toast(`${error}`, {
        description: "Please try again later",
      });
      // console.log('error : ', error?.response);
      // const {response} = error;
    }
  };

  return (
    <div className={cn("flex flex-col gap-6 justify-center align-middle self-center ", className)} {...props}>
      <Toaster />
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Create your account</CardTitle>
          <CardDescription>Enter your email below to create your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmitData}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Full Name</FieldLabel>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  onChange={(e) => dispatch({ type: "UPDATE_FIELD", field: "username", value: e.target.value })}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  onChange={(e) => dispatch({ type: "UPDATE_FIELD", field: "email", value: e.target.value })}
                />
              </Field>
              <Field>
                <Field>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Input
                    id="password"
                    type="password"
                    required
                    onChange={(e) => dispatch({ type: "UPDATE_FIELD", field: "password", value: e.target.value })}
                  />
                </Field>
                <FieldDescription>Must be at least 8 characters long.</FieldDescription>
              </Field>
              <Field>
                <Button type="submit">Create Account</Button>
                <FieldDescription className="text-center">
                  Already have an account? <Link to="/login">Sign in</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  );
}
