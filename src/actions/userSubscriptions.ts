"use server";

import { eq } from "drizzle-orm";

import { db } from "@/db";
import { users } from "@/db/schema";

export async function createSubscription({
  stripeCustomerId,
}: {
  stripeCustomerId: string;
}) {
  try {
    await db
      .update(users)
      .set({
        subscribed: true,
      })
      .where(eq(users.stripeCustomerId, stripeCustomerId));
  } catch (error) {
    console.error("Subscription create error:", error);
  }
}

export async function deleteSubscription({
  stripeCustomerId,
}: {
  stripeCustomerId: string;
}) {
  try {
    await db
      .update(users)
      .set({
        subscribed: false,
      })
      .where(eq(users.stripeCustomerId, stripeCustomerId));
  } catch (error) {
    console.error("Subscription delete error:", error);
  }
}


export async function getUserSubscription({ userId }: { userId: string }) {
  const user = await db.query.users.findFirst({
    where: eq(users.id, userId),
  });

  return user?.subscribed;
}