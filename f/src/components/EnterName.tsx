import React, {
  useState,
  type ChangeEventHandler,
  type FormEvent,
} from "react";
import { Input } from "./ui/input";

type ChildProps = { setSubmitName: (name: string) => void };

const EnterName: React.FC<ChildProps> = ({
  setSubmitName,
}) => {
  const [name, setName] = useState<string>("");
  const handleSubmit: React.FormEventHandler<
    HTMLFormElement
  > = (e: FormEvent) => {
    e.preventDefault();
    setSubmitName(name);
  };

  return (
    <div>
      <h1>Enter Name</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="username"
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
};

export default EnterName;
