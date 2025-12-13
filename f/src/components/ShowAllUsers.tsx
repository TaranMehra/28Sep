import React from "react";
import { Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";

type ShowAllUsersProps = {
  allUsersArr: [];
};

function ShowAllUsers({ allUsersArr }: ShowAllUsersProps) {
  if (!allUsersArr) {
    return null;
  }
  return (
    <div className="ShowAllUsers-container">
      <ul>
        {allUsersArr.map((name, index) => (
          <Item key={index} variant="outline">
        <ItemMedia>
          <Avatar className="size-10">
            <AvatarImage src="https://github.com/evilrabbit.png" />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Evil Rabbit</ItemTitle>
          <ItemDescription>Last seen 5 months ago</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button
            size="icon-sm"
            variant="outline"
            className="rounded-full"
            aria-label="Invite"
          >
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
