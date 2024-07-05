import { signIn } from 'next-auth/client';
import { signOut } from 'next-auth/react';
import { signIn } from 'next-auth/react';
import NextAuth from "next-auth";

export const {handlers ,signIn,signOut,auth} = NextAuth({
    providers:[],
})