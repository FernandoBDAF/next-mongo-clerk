"use server";

import { repoAddRemittee } from "../../api/users";

export const addRemittee = async (clerkId: string, email: string) => {
  try {
    const data = await repoAddRemittee(clerkId, email);
  } catch (error) {
    console.error(error);
  }
};
