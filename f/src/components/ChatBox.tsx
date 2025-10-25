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
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

function ChatBox() {
  const [messages, setMessages] = useState<
    {
      direction: "incoming" | "outgoing" | "draft";
      message: string;
      time: string;
    }[]
  >([]);

  const lastItemRef = useRef<HTMLLIElement | null>(null);

  // auto-scroll on new message
  useEffect(() => {
    if (lastItemRef.current) {
      lastItemRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [messages]);

  // handle input change → create/modify draft
  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setMessages((prev) => {
      const copy = [...prev];

      /* when user starts typing his first alphabet type we set direction === draft, a new message
      then every alphabet trigger else , so we can show the message to user as he type and store completed message */
      if (
        !copy.length ||
        copy[copy.length - 1].direction !== "draft"
      ) {
        copy.push({
          direction: "draft",
          message: e.target.value,
          time: new Date().toLocaleTimeString(),
        });
      } else {
        copy[copy.length - 1].message = e.target.value;
        copy[copy.length - 1].time =
          new Date().toLocaleTimeString();
      }
      //returning fully completed message with direction = draft
      return copy;
    });
  };

  // submit → convert draft to outgoing
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessages((prev) => {
      const copy = [...prev]; //previus messages
      if (!copy.length) return prev; //if message array is empty
      const last = copy[copy.length - 1];
      if (
        last.direction === "draft" &&
        last.message.trim()
      ) {
        last.direction = "outgoing";
      }

      return [...copy];
    });
  };

  // simulate incoming message (for demo)
  useEffect(() => {
    if (
      messages.length &&
      messages[messages.length - 1].direction === "outgoing"
    ) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            direction: "incoming",
            message: "Got it! ✅",
            time: new Date().toLocaleTimeString(),
          },
        ]);
      });
    }
  }, [messages]);

  return (
    <div className="chat-container">
      <div className="chat-header">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>

      <div className="chat-content">
        <ul className="messages-list">
          {messages
            .filter((msg) => msg.direction !== "draft")
            .map((msg, index) => (
              <li
                key={index}
                ref={
                  index === messages.length - 1
                    ? lastItemRef
                    : null
                }
                className={`message-bubble ${msg.direction}`}
              >
                {msg.message}
                <span className="time">{msg.time}</span>
              </li>
            ))}
        </ul>
      </div>

      <div className="chat-footer">
        <form onSubmit={handleSubmit} className="chat-form">
          <Input
            type="text"
            value={
              messages[messages.length - 1]?.direction ===
              "draft"
                ? messages[messages.length - 1].message
                : ""
            }
            onChange={handleChange}
            placeholder="Type a message..."
          />
          <Button type="submit" variant="outline">
            <IoIosSend />
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ChatBox;
