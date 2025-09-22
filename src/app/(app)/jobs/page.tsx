import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { jobs } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Input } from "@/components/ui/input";
import { Briefcase, MapPin, ArrowRight } from "lucide-react";

export default function JobsPage() {
    const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';
    const getImageHint = (id:string) => PlaceHolderImages.find(img => img.id === id)?.imageHint || '';

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Job Board</h1>
                <p className="text-muted-foreground">Find your next career opportunity with our curated job postings.</p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
                <Input placeholder="Search job titles or companies..." className="flex-1" />
                <Input placeholder="Location (e.g., Remote, New York)" className="flex-1" />
                <Button>Search Jobs</Button>
            </div>
            
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
                {jobs.map(job => (
                    <Card key={job.id} className="flex flex-col sm:flex-row">
                                                <div className="p-4 sm:p-6 flex items-center justify-center sm:border-r">
                                                    {getImage(job.imageId) ? (
                                                        <Image
                                                            alt={`${job.company} logo`}
                                                            className="rounded-lg object-contain"
                                                            height={80}
                                                            width={80}
                                                            src={getImage(job.imageId)}
                                                            data-ai-hint={getImageHint(job.imageId)}
                                                        />
                                                    ) : null}
                                                </div>
                        <div className="p-4 sm:p-6 flex flex-col flex-1">
                            <div className="flex-1">
                                <CardTitle className="text-lg">{job.title}</CardTitle>
                                <div className="text-sm text-muted-foreground mt-1 space-y-1">
                                    <div className="flex items-center gap-2">
                                        <Briefcase className="h-4 w-4" />
                                        <span>{job.company}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4" />
                                        <span>{job.location}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <Button className="w-full sm:w-auto">
                                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
