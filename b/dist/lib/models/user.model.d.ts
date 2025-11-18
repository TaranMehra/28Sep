export declare const UserSignUpStoreFunction: (username: string, email: string, password: string) => Promise<import("mongoose").Document<unknown, {}, {
    username?: string | null;
    email?: string | null;
    password?: string | null;
}, {}, import("mongoose").DefaultSchemaOptions> & {
    username?: string | null;
    email?: string | null;
    password?: string | null;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const findUserByUsername: (username: string) => Promise<(import("mongoose").Document<unknown, {}, {
    username?: string | null;
    email?: string | null;
    password?: string | null;
}, {}, import("mongoose").DefaultSchemaOptions> & {
    username?: string | null;
    email?: string | null;
    password?: string | null;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
export declare const GetAllUsersFunc: () => Promise<(import("mongoose").Document<unknown, {}, {
    username?: string | null;
    email?: string | null;
    password?: string | null;
}, {}, import("mongoose").DefaultSchemaOptions> & {
    username?: string | null;
    email?: string | null;
    password?: string | null;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
})[]>;
//# sourceMappingURL=user.model.d.ts.map