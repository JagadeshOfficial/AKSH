'use server';

/**
 * @fileOverview An AI agent for generating automated feedback for student assignments.
 *
 * - generateAssignmentFeedback - A function that generates feedback for a student assignment.
 * - GenerateAssignmentFeedbackInput - The input type for the generateAssignmentFeedback function.
 * - GenerateAssignmentFeedbackOutput - The return type for the generateAssignmentFeedback function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAssignmentFeedbackInputSchema = z.object({
  studentName: z.string().describe('The name of the student who submitted the assignment.'),
  assignmentTitle: z.string().describe('The title of the assignment.'),
  studentSubmission: z.string().describe('The text of the student submission.'),
  instructorInstructions: z.string().describe('The original instructions provided to the student for the assignment.'),
  successCriteria: z.string().describe('The criteria for successfully completing the assignment.'),
});
export type GenerateAssignmentFeedbackInput = z.infer<
  typeof GenerateAssignmentFeedbackInputSchema
>;

const GenerateAssignmentFeedbackOutputSchema = z.object({
  feedback: z.string().describe('The AI-generated feedback for the student assignment.'),
  score: z.number().describe('The AI-generated score for the student assignment.'),
});
export type GenerateAssignmentFeedbackOutput = z.infer<
  typeof GenerateAssignmentFeedbackOutputSchema
>;

export async function generateAssignmentFeedback(
  input: GenerateAssignmentFeedbackInput
): Promise<GenerateAssignmentFeedbackOutput> {
  return generateAssignmentFeedbackFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAssignmentFeedbackPrompt',
  input: {schema: GenerateAssignmentFeedbackInputSchema},
  output: {schema: GenerateAssignmentFeedbackOutputSchema},
  prompt: `You are an AI assistant that specializes in giving feedback to students based on their submissions.

  You will take into account the student's submission, the original assignment instructions, and the success criteria to provide helpful and constructive feedback, along with an AI-generated score.

  Student Name: {{{studentName}}}
  Assignment Title: {{{assignmentTitle}}}
  Student Submission: {{{studentSubmission}}}
  Instructor Instructions: {{{instructorInstructions}}}
  Success Criteria: {{{successCriteria}}}

  Provide feedback and a score based on the information above.
  `,
});

const generateAssignmentFeedbackFlow = ai.defineFlow(
  {
    name: 'generateAssignmentFeedbackFlow',
    inputSchema: GenerateAssignmentFeedbackInputSchema,
    outputSchema: GenerateAssignmentFeedbackOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
