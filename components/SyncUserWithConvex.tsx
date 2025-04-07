"use client";
import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
const SyncUserWithConvex = () => {
  const { user } = useUser();

  const updateUser = useMutation(api.users.updateUser);

  useEffect(() => {
    if (!user) return;

    // Check if user is already synced with Convex

    const syncUser = async () => {
      try {
        await updateUser({
          userId: user.id,
          name: `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim(),
          email: user.emailAddresses[0]?.emailAddress ?? "",
        });
      } catch (error) {
        console.error("Error syncing user with Convex:", error);
      }
    };
    syncUser();
  }, [user, updateUser]);

  return null;
};

export default SyncUserWithConvex;
