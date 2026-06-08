import { createUploadthing, type FileRouter } from "uploadthing/next";
import { cookies } from "next/headers";
import { verifyAdmin } from "@/lib/admin";

const f = createUploadthing();

export const ourFileRouter = {
  businessImages: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 12,
    },
  })

    .middleware(async () => {
      const cookieStore = await cookies();
      await verifyAdmin();
      const adminAuth = cookieStore.get("admin-auth");

      if (!adminAuth) {
        throw new Error("Unauthorized");
      }

      return {
        role: "admin",
      };
    })

    .onUploadComplete(async ({ metadata }) => {
      console.log(
        `Upload completed by ${metadata.role}`
      );

      return {
        uploadedBy: "MaseruPlug",
      };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;