import { db } from "@/db";
import { users } from "@/db/schema";
import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { eq } from "drizzle-orm";
import { NextRequest } from "next/server";
export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req);

    // Do something with payload
    // For this guide, log payload to console
    const eventType = evt.type;

    if (eventType === "user.created") {
      await db.insert(users).values({
        clerkId: evt.data.id,
        name: `${evt.data.first_name} ${evt.data.last_name}`,
        imageUrl: evt.data.image_url,
      });
    }

    if (eventType === "user.deleted") {
      if (!evt.data.id) {
        return new Response("No user id provided", { status: 400 });
      }

      await db.delete(users).where(eq(users.clerkId, evt.data.id));
    }

    if (eventType === "user.updated") {
      if (!evt.data.id) {
        return new Response("No user id provided", { status: 400 });
      }

      await db
        .update(users)
        .set({
          name: `${evt.data.first_name} ${evt.data.last_name}`,
          imageUrl: evt.data.image_url,
        })
        .where(eq(users.clerkId, evt.data.id));
    }

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }
}
