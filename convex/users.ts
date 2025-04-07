import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// This file contains the schema for the users table in Convex

export const getUSerById = query({
  args: { userId: v.string() },
  handler: async (ctx, { userId }) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_user_id", (query) => query.eq("userId", userId))
      .first();
    return user;
  },
});

export const updateUser = mutation({
  args: {
    userId: v.string(),
    name: v.string(),
    email: v.string(),
  },
  handler: async (ctx, { userId, name, email }) => {
    // checks if user exist
    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_user_id", (query) => query.eq("userId", userId))
      .first();

    // Update Existing User

    if (existingUser) {
      await ctx.db.patch(existingUser._id, {
        name,
        email,
      });
      return existingUser._id;
    }
    // Create New User
    const newUserId = await ctx.db.insert("users", {
      userId,
      name,
      email,
      stripeConnectId: undefined,
    });
    return newUserId;
  },
});
