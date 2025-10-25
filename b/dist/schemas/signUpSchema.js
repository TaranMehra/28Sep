import z from "zod";
export const signUpSchema = z.object({
    username: z.string().min(5, "Username must 5 chars long"), //minimum length should 5
    email: z.email(),
    password: z.string().min(5, "Your Password must 5 characters long"),
});
//# sourceMappingURL=signUpSchema.js.map