import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { courses } from "@/lib/data";
import { QrCode } from "lucide-react";

export default function PaymentPage() {
  return (
    <div className="max-w-4xl mx-auto">
        <Card>
            <CardHeader>
                <CardTitle>Course Enrollment Payment</CardTitle>
                <CardDescription>Securely pay for your next course and start learning.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="course">Select Course</Label>
                        <Select>
                            <SelectTrigger id="course">
                                <SelectValue placeholder="Choose a course to enroll" />
                            </SelectTrigger>
                            <SelectContent>
                                {courses.filter(c => !c.enrolled).map(course => (
                                    <SelectItem key={course.id} value={course.id}>
                                        {course.title}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="card-number">Card Number</Label>
                        <Input id="card-number" placeholder="**** **** **** ****" />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="expiry-date">Expires</Label>
                            <Input id="expiry-date" placeholder="MM/YY" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="cvc">CVC</Label>
                            <Input id="cvc" placeholder="***" />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="zip">ZIP</Label>
                            <Input id="zip" placeholder="12345" />
                        </div>
                    </div>
                    <Button className="w-full">Pay Now ($99.00)</Button>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4 bg-muted/50 p-8 rounded-lg">
                    <p className="text-center font-medium">Or scan to pay</p>
                    <div className="bg-background p-4 rounded-lg border shadow-sm">
                        <QrCode className="h-32 w-32" />
                    </div>
                    <p className="text-sm text-muted-foreground text-center">Use your mobile device's camera to scan the code.</p>
                </div>
            </CardContent>
        </Card>
    </div>
  );
}
