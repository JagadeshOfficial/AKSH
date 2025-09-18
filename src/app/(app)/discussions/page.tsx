import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { discussions } from "@/lib/data";
import { PlusCircle, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function DiscussionsPage() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Discussions</CardTitle>
          <CardDescription>
            Engage with your peers and instructors. Ask questions and share your knowledge.
          </CardDescription>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Start New Discussion
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Topic</TableHead>
              <TableHead>Course</TableHead>
              <TableHead>Author</TableHead>
              <TableHead className="text-center">Replies</TableHead>
              <TableHead>Last Reply</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {discussions.map((discussion) => (
              <TableRow key={discussion.id}>
                <TableCell className="font-medium hover:text-primary cursor-pointer">{discussion.title}</TableCell>
                <TableCell>{discussion.course}</TableCell>
                <TableCell>{discussion.author}</TableCell>
                <TableCell className="text-center">
                    <div className="flex items-center justify-center gap-1">
                        <MessageSquare className="h-4 w-4 text-muted-foreground"/>
                        {discussion.replies}
                    </div>
                </TableCell>
                <TableCell>{discussion.lastReply}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
