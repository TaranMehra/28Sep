import { FetchAllUsers } from "@/lib/dbOperations";
import { useEffect, useState } from "react";
import "../styles/Chat.css";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import ShowAllUsers from "@/components/ShowAllUsers";


export type UserTypes = {
  _id: string;
  username: string;
};

function Chat() {
  const [usersList, setusersList] = useState<UserTypes[]>([]);
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
  return (
    <div className="chat-parent-container">
      <div className="chat-child-container">
        <h1>Select Users</h1>
        <div className="show-user-list-container">
          <ShowAllUsers allUsersArr={usersList} />
          {/* {usersList.map((items, index) => (
            // const {username} = items;
            <ul>
              <li className="itmes" key={index}>
                <div className="names">{items?.username}</div>
                <div className=""></div>
              </li>
            </ul>
          ))} */}
          {/* <Item>
            <ItemHeader>Item Header1</ItemHeader>
            <ItemMedia />
            <ItemContent>
              <ItemTitle>Item</ItemTitle>
              <ItemDescription>Item</ItemDescription>
            </ItemContent>
            <ItemActions />
            <ItemFooter>Item Footer</ItemFooter>
          </Item> */}

          <h1></h1>
        </div>
      </div>
    </div>
  );

  //shows the users with chat and add -in group button along list in chat
}

export default Chat;
