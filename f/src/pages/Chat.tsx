import { FetchAllUsers } from "@/lib/dbOperations";
import { useEffect, useState } from "react";

function Chat() {
  const [usersList, setusersList] = useState(null);
  useEffect(() => {
    (async () => {
      const usersArr = await FetchAllUsers();
      const usersList = usersArr.data.data;
      if (usersList) {
        setusersList(usersList);
        console.log("the usersArr :", usersList);
      }
    })();
  }, []); //even if i don't provide null array it's still getting refreshed
  return <div>Chat</div>;

  //shows the users with chat and add -in group button along list in chat
}

export default Chat;
