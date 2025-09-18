"use server";

import { generateAssignmentFeedback } from "@/ai/flows/automated-assignment-feedback";
import { z } from "zod";

const FormSchema = z.object({
  studentName: z.string().min(1, "Student name is required."),
  assignmentTitle: z.string().min(1, "Assignment title is required."),
  studentSubmission: z.string().min(10, "Submission must be at least 10 characters."),
  instructorInstructions: z.string().min(10, "Instructions must be at least 10 characters."),
  successCriteria: z.string().min(10, "Success criteria must be at least 10 characters."),
});

export type State = {
  message?: string | null;
  errors?: {
    studentName?: string[];
    assignmentTitle?: string[];
    studentSubmission?: string[];
    instructorInstructions?: string[];
    successCriteria?: string[];
  };
  feedback?: string;
  score?: number;
};

export async function getAutomatedFeedback(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = FormSchema.safeParse({
    studentName: formData.get("studentName"),
    assignmentTitle: formData.get("assignmentTitle"),
    studentSubmission: formData.get("studentSubmission"),
    instructorInstructions: formData.get("instructorInstructions"),
    successCriteria: formData.get("successCriteria"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing or invalid fields. Failed to generate feedback.",
    };
  }

  try {
    const result = await generateAssignmentFeedback(validatedFields.data);
    return {
      message: "Feedback generated successfully.",
      feedback: result.feedback,
      score: result.score,
    };
  } catch (error) {
    console.error(error);
    return {
      message: "An error occurred while generating feedback. Please try again.",
    };
  }
}
