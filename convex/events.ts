import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getQuery = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("events")
      .filter((query) => query.eq(query.field("is_cancelled"), undefined))
      .collect();
  },
});
