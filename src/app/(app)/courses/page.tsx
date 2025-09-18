import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { courses } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlusCircle } from "lucide-react";

export default function CoursesPage() {
    const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';
    const getImageHint = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageHint || '';

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Course Catalog</h1>
                    <p className="text-muted-foreground">Explore our wide range of courses and start learning today.</p>
                </div>
                 <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Create New Course
                </Button>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
                <Input placeholder="Search courses..." className="max-w-sm" />
                <Select>
                    <SelectTrigger className="w-full md:w-[180px]">
                        <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="programming">Programming</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="data-science">Data Science</SelectItem>
                    </SelectContent>
                </Select>
                 <Select>
                    <SelectTrigger className="w-full md:w-[180px]">
                        <SelectValue placeholder="All Levels" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {courses.map(course => (
                    <Card key={course.id} className="flex flex-col overflow-hidden">
                        <CardHeader className="p-0">
                             <Image
                                alt={course.title}
                                className="object-cover w-full h-48"
                                height="200"
                                width="300"
                                src={getImage(course.imageId)}
                                data-ai-hint={getImageHint(course.imageId)}
                            />
                        </CardHeader>
                        <CardContent className="p-4 flex-1">
                            <CardTitle className="text-lg mb-2">{course.title}</CardTitle>
                            <CardDescription className="text-sm line-clamp-3">{course.description}</CardDescription>
                            <p className="text-xs text-muted-foreground mt-2">By {course.instructor}</p>
                        </CardContent>
                        <CardFooter className="p-4 pt-0">
                            <Button className="w-full" variant={course.enrolled ? "secondary" : "default"}>
                                {course.enrolled ? 'Go to Course' : 'Enroll Now'}
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
