import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { user } from "@/lib/data";

export function UserNav() {
  const { data: session } = useSession();
  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
  };
  const displayName = session?.user?.name || user.name;
  const displayEmail = session?.user?.email || user.email;
  const displayAvatar = session?.user?.image || user.avatar;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-9 w-9">
            <AvatarImage src={displayAvatar} alt={`@${displayName}`} />
            <AvatarFallback>{displayName?.charAt(0)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1 max-w-[300px] break-words">
            <p className="text-sm font-medium leading-tight" title={displayName}>{displayName}</p>
            <p className="text-xs leading-tight text-muted-foreground break-words whitespace-normal" title={displayEmail}>
              {displayEmail}
            </p>
          </div>
        </DropdownMenuLabel>
        
        <DropdownMenuItem onClick={handleLogout}>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
