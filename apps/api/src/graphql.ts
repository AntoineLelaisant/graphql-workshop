
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface IQuery {
    users(): Nullable<User>[] | Promise<Nullable<User>[]>;
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
    me(): Nullable<User> | Promise<Nullable<User>>;
}

export interface User {
    id: string;
    email: string;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
}

type Nullable<T> = T | null;
