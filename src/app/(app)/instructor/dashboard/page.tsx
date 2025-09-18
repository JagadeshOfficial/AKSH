import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FilePlus, Edit, Eye, Users, BarChart } from "lucide-react";

export default function InstructorDashboard() {
  const recentSubmissions = [
    { student: "Charlie Brown", assignment: "Build a Personal Portfolio", course: "Web Development Bootcamp", date: "2024-09-19" },
    { student: "Diana Prince", assignment: "Basic Syntax and Variables", course: "Introduction to Programming", date: "2024-09-14" },
    { student: "Ethan Hunt", assignment: "Implement a Simple Neural Network", course: "AI and Machine Learning", date: "2024-09-24" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,254</div>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Submissions to Grade</CardTitle>
            <Edit className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">3 pending for Web Dev Bootcamp</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">82%</div>
            <p className="text-xs text-muted-foreground">Average across all courses</p>
          </CardContent>
        </Card>
        <Card className="flex flex-col">
            <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-center gap-2">
                 <Button><FilePlus className="mr-2 h-4 w-4"/> Upload Content</Button>
                 <Button variant="secondary"><Edit className="mr-2 h-4 w-4"/> Create Assignment</Button>
            </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Student Submissions</CardTitle>
          <CardDescription>Review the latest work from your students.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Assignment</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentSubmissions.map((submission, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{submission.student}</TableCell>
                  <TableCell>{submission.assignment}</TableCell>
                  <TableCell>{submission.course}</TableCell>
                  <TableCell>{submission.date}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">
                        <Eye className="mr-2 h-4 w-4" />
                        View & Grade
                    </Button>
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
