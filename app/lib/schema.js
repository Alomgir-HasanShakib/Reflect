import { z } from "zod";

export const journalSchema = z.object({
  title: z.string().min(1, "Title is Required"),
  content: z.string().min(1, "content is Required"),
  mood: z.string().min(1, "mood is Required"),
  collection: z.string().optional(),
});
