"use client";

import { useFormState, useFormStatus } from "react-dom";
import { getAutomatedFeedback, type State } from "./actions";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Star, Sparkles, Wand2 } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          Generate Feedback
        </>
      )}
    </Button>
  );
}

export default function FeedbackPage() {
  const initialState: State = { message: null, errors: {} };
  const [state, dispatch] = useFormState(getAutomatedFeedback, initialState);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Automated Assignment Feedback</CardTitle>
          <CardDescription>
            Fill in the details below to generate AI-powered feedback for a
            student's submission.
          </CardDescription>
        </CardHeader>
        <form action={dispatch}>
          <CardContent className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
               <div className="space-y-2">
                <Label htmlFor="studentName">Student Name</Label>
                <Input id="studentName" name="studentName" placeholder="e.g., Jane Doe" />
                 {state.errors?.studentName && <p className="text-sm font-medium text-destructive">{state.errors.studentName}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="assignmentTitle">Assignment Title</Label>
                <Input id="assignmentTitle" name="assignmentTitle" placeholder="e.g., Essay on Photosynthesis" />
                 {state.errors?.assignmentTitle && <p className="text-sm font-medium text-destructive">{state.errors.assignmentTitle}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="studentSubmission">Student Submission</Label>
              <Textarea
                id="studentSubmission"
                name="studentSubmission"
                placeholder="Paste the student's submission text here."
                className="min-h-[100px]"
              />
               {state.errors?.studentSubmission && <p className="text-sm font-medium text-destructive">{state.errors.studentSubmission}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="instructorInstructions">Instructor Instructions</Label>
              <Textarea
                id="instructorInstructions"
                name="instructorInstructions"
                placeholder="Paste the original assignment instructions here."
                className="min-h-[100px]"
              />
               {state.errors?.instructorInstructions && <p className="text-sm font-medium text-destructive">{state.errors.instructorInstructions}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="successCriteria">Success Criteria / Rubric</Label>
              <Textarea
                id="successCriteria"
                name="successCriteria"
                placeholder="Provide the rubric or success criteria for the assignment."
                className="min-h-[100px]"
              />
               {state.errors?.successCriteria && <p className="text-sm font-medium text-destructive">{state.errors.successCriteria}</p>}
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </form>
      </Card>
      
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="text-primary" /> Generated Feedback
          </CardTitle>
          <CardDescription>
            The generated feedback and score will appear here.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col items-center justify-center space-y-4 p-8 bg-muted/50 rounded-b-lg">
          {state.feedback ? (
            <div className="w-full space-y-4 text-sm">
                <div className="flex items-center justify-between bg-background p-4 rounded-lg">
                    <p className="font-medium">Suggested Score</p>
                    <div className="flex items-center gap-1 text-2xl font-bold text-primary">
                        {state.score}
                        <span className="text-sm font-normal text-muted-foreground">/ 100</span>
                    </div>
                </div>
              <h3 className="font-semibold">Feedback:</h3>
              <div className="prose prose-sm max-w-none p-4 bg-background rounded-lg whitespace-pre-wrap">{state.feedback}</div>
            </div>
          ) : (
            <div className="text-center text-muted-foreground">
              <p>{state.message || "Awaiting submission details..."}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
