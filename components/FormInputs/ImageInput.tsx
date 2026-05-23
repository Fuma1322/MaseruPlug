import React from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import { UploadDropzone } from "@/lib/uploadthing";

export default function ImageInput({
    label,
    imageUrl = "",
    setImageUrl,
    className = "col-span-full",
    endpoint = "",
}:{
    label: string;
    imageUrl: string;
    setImageUrl: any;
    className?: string;
    endpoint: any;
}) {
  return (
    <div className={className}>
        <div className="flex justify-between items-center">
            <label
              htmlFor="image"
              className="block text-sm font-medium leading-6 text-gray-900 mb-2 "
            >
              {label}
            </label>
            {imageUrl && (
                <Button
                onClick={() => setImageUrl("")}
                type="button"
                className="flex text-xs space-x-2 bg-slate-900 rounded-md shadow text-sky-400 py-2 px-4">
                <span>Change Image</span>    
                </Button>                
            )}
        </div>
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt="course image"
                width={1000}
                height={667}
                className="w-full h-64 object-contain"
              />
            ) : (
              <div className="uploadthing-dropzone">
                <UploadDropzone
                endpoint={`${endpoint}` as any}
                onClientUploadComplete={(res: any) => {
                    setImageUrl(res[0].url);
                    //Do Something With The Response
                    toast.success("Image Upload Complete");
                    console.log("Files: ",res);
                    console.log("Upload Completed");
                }}
                onUploadError={(error) => {
                    // Do something with the error.
                  alert(`ERROR! ${error.message}`);
                }}
                />
              </div>
            )}
        </div>
  );
}