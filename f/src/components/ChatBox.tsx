import "../styles/ChatBox.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IoIosSend } from "react-icons/io";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  useState,
  type ChangeEvent,
  type FormEvent,
  type FormEventHandler,
} from "react";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

function ChatBox() {
  const [message, setMessage] = useState<string>("");
  const [sendingMessages, setSendingMessages] = useState<
    string[]
  >(["1"]);

  //   const handleSubmit = (
  //     e: FormEvent<HTMLFormElement>
  //   ) => {};

  /* const handleSubmit: FormEventHandler<HTMLFormElement> = (
    e
  ) => {
    e.preventDefault();
    };
    
    either declare func type using handler or object as below*/
  const handleSubmit = (
    e: FormEvent<HTMLFormElement>
    //FormEvent telling parameter object type
  ) => {
    e.preventDefault();
    console.log("Submitted value:", message);
    setSendingMessages((prev) => [...prev, message]);
    setMessage("");
  };

  //updating message
  const handelChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setMessage(e?.target?.value);
  };
  return (
    <div className="chat-container">
      <div className="chat-header">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="chat-content">
        <ul className="incoming-messages-ul">
          {sendingMessages?.map(
            (value, index) => (
              // <Alert className="message-box">

              <li className="messages-li" key={index}>
                {value}
              </li>
            )

            // </Alert>
          )}
        </ul>
        <ul className="outgoing-messages-ul">
          {sendingMessages?.map((value, index) => (
            <li className="messages-li" key={index}>
              {value}
            </li>
          ))}
        </ul>
      </div>
      <div className="chat-footer">
        <form
          onSubmit={handleSubmit}
          className="chat-footer"
        >
          <Input
            className="input-box-div"
            type="type"
            value={message}
            onChange={(e) => handelChange(e)}
          />
          <Button
            className="send-arrow-div"
            type="submit"
            variant="outline"
          >
            <IoIosSend />
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ChatBox;
