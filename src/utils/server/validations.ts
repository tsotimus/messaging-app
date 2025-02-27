import { z } from "zod";

export const IDSchema = z.string()

export type ID = z.infer<typeof IDSchema>