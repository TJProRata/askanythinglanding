import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  waitlist: defineTable({
    email: v.string(),
    createdAt: v.number(),
  })
    .index("by_email", ["email"])
    .index("by_createdAt", ["createdAt"]),
});
