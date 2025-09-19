import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, UserPlus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const users = [
  { id: 'usr1', name: 'Alex Doe', email: 'alex.doe@example.com', role: 'student', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d', status: 'Active', joined: '2023-01-15' },
  { id: 'usr2', name: 'Jane Smith', email: 'jane.smith@example.com', role: 'student', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026705d', status: 'Active', joined: '2023-02-20' },
  { id: 'usr3', name: 'Dr. Ada Lovelace', email: 'ada.lovelace@example.com', role: 'instructor', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026706d', status: 'Active', joined: '2022-11-10' },
  { id: 'usr4', name: 'Bob Johnson', email: 'bob.j@example.com', role: 'student', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026707d', status: 'Inactive', joined: '2023-03-05' },
  { id: 'usr5', name: 'Dr. Tim Berners-Lee', email: 'tim.bl@example.com', role: 'instructor', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026708d', status: 'Active', joined: '2022-10-01' },
  { id: 'usr6', name: 'Charlie Brown', email: 'charlie.b@example.com', role: 'student', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026709d', status: 'Active', joined: '2023-04-12' },
];

export default function AllUsersPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">User Management</h1>
          <p className="text-muted-foreground">
            View and manage all users on the platform.
          </p>
        </div>
        
      </div>
      <Card>
        <CardHeader>
          <CardTitle>All Users</CardTitle>
          <CardDescription>
            A list of all registered users.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <Badge variant={user.status === 'Active' ? 'default' : 'secondary'}>
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button aria-haspopup="true" size="icon" variant="ghost">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>View Profile</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          Suspend
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
