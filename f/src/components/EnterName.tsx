import React, { useState, type ChangeEventHandler, type FormEvent } from "react";
import { Input } from "./ui/input";
import { SignupForm } from "./signup-form";

type ChildProps = { setSubmitName: (name: string) => void };

const EnterName: React.FC<ChildProps> = ({  }) => {
  const [name, setName] = useState<string>("");
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e: FormEvent) => {
    e.preventDefault();
    // setSubmitName(name);
  };

  return (
    <div className="flex justify-center align-center bg-amber-23 h-screen w-screen  p-14 box-border">
      {/* <SignupForm /> */}
    </div>
  );
};

export default EnterName;
