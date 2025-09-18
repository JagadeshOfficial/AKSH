import { courses, assignments } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function DashboardPage() {
  const enrolledCourses = courses.filter(c => c.enrolled);
  const upcomingAssignments = assignments.filter(a => !a.submitted).slice(0, 3);
  const recentGrades = assignments.filter(a => a.submitted && a.grade).slice(0, 3);

  const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';
  const getImageHint = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageHint || '';

  return (
    <div className="grid gap-6">
      {/* Student Dashboard Section */}
      <Card>
        <CardHeader>
          <CardTitle>Student Dashboard</CardTitle>
          <CardDescription>
            All your student activities and progress.
          </CardDescription>
        </CardHeader>
        
      </Card>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>My Courses</CardTitle>
            <CardDescription>Continue your learning journey.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {enrolledCourses.map(course => (
              <div key={course.id} className="flex items-center gap-4">
                <Image
                  alt={course.title}
                  className="rounded-md object-cover"
                  height="64"
                  width="64"
                  src={getImage(course.imageId)}
                  data-ai-hint={getImageHint(course.imageId)}
                />
                <div className="flex-1">
                  <p className="font-medium truncate">{course.title}</p>
                  <Progress value={course.progress} className="h-2 mt-1" />
                  <p className="text-xs text-muted-foreground mt-1">{course.progress}% complete</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Upcoming Assignments</CardTitle>
            <Link href="#" className="text-sm text-primary hover:underline">View All</Link>
          </CardHeader>
          <CardContent>
             <Table>
                <TableBody>
                    {upcomingAssignments.map(assignment => (
                        <TableRow key={assignment.id}>
                            <TableCell>
                                <div className="font-medium">{assignment.title}</div>
                                <div className="text-sm text-muted-foreground">{assignment.course}</div>
                            </TableCell>
                            <TableCell className="text-right">Due {assignment.dueDate}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
             </Table>
          </CardContent>
        </Card>
        <Card className="xl:col-span-1">
          <CardHeader>
            <CardTitle>Recent Grades</CardTitle>
            <CardDescription>
              Check out your latest results.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Assignment</TableHead>
                  <TableHead className="text-right">Grade</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentGrades.map((assignment) => (
                  <TableRow key={assignment.id}>
                    <TableCell>
                        <div className="font-medium">{assignment.title}</div>
                        <div className="text-sm text-muted-foreground">{assignment.course}</div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Badge variant={assignment.grade > 89 ? 'default' : 'secondary'} className="bg-green-500/20 text-green-700 hover:bg-green-500/30 dark:bg-green-500/10 dark:text-green-400">
                        {assignment.grade}%
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
