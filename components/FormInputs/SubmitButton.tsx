import { Loader2 } from 'lucide-react';
import React from 'react'
import { Button } from '../ui/button';

type SubmitButtonProps = {
title: string;
buttonType?: "button" | "submit" | "reset" | undefined
isLoading: boolean;
LoadingTitle: string;
}
export default function SubmitButton({title, buttonType="submit", isLoading=false, LoadingTitle}: SubmitButtonProps) {
  return (
   <>
   {isLoading ? (
     <Button disabled>
     <Loader2 className='w-4 h-4 mr-2 animate-spin'/>
     {LoadingTitle}
   </Button>

   ):(
    <Button type={buttonType} className='bg-[#25D366] hover:bg-[#25D366]/90 text-white'>
      {title}
    </Button>
   )}
   </>
  )
}