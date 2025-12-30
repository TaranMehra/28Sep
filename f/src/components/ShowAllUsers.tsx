import React, { useMemo, useState } from "react";
import { Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import "../styles/ShowAllUsers.css";
import type { UserTypes } from "@/pages/Chat";
import { Input } from "@/components/ui/input";

// type ShowAllUsersProps = {
//   allUsersArr: [];
// };
type ShowAllUsersProps = {
  allUsersArr: UserTypes[];
};

function ShowAllUsers({ allUsersArr }: ShowAllUsersProps) {
  const [search, setSearch] = useState("");

  if (!allUsersArr) {
    return null;
  }
  const FilterUsersResult = useMemo(() => {
    if (!search) return allUsersArr;
    return allUsersArr.filter((user) => user.username.toLowerCase().includes(search));
  }, [allUsersArr, search]);
  return (
    <div className="ShowAllUsers-container">
      <div className="search-container">
        {/* <h1>Select To share File</h1> <br /> */}
        <div className="flex w-full max-w-sm items-center gap-2">
          <Input type="email" placeholder="Seach" onChange={(e) => setSearch(e.target.value)} />

          {/* <Button type="submit" variant="outline"> */}
          {/* Search */}
          {/* </Button> */}
        </div>
      </div>
      <ul className="ul-allusers">
        {FilterUsersResult?.map((name, index) => (
          <Item key={index} variant="outline" className="list-items">
            <ItemMedia>
              <Avatar className="size-10">
                <AvatarImage src="https://github.com/evilrabbit.png" />
                <AvatarFallback>User</AvatarFallback>
              </Avatar>
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{name?.username}</ItemTitle>
              {/* <ItemDescription>Last seen 5 months ago</ItemDescription> */}
            </ItemContent>
            <ItemActions>
              <Button size="icon-sm" variant="outline" className="rounded-full" aria-label="Invite">
                <Plus />
              </Button>
            </ItemActions>
          </Item>
        ))}
      </ul>
    </div>
  );
}

export default ShowAllUsers;
