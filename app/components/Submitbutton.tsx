'use client'

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom"

export default function SubmitButton(){
const {pending}=useFormStatus();
return <>
{pending?<Button disabled className="w-fit">
    <Loader2 className="mr-2 w-4 h-4 animate-spin"/>
    Please wait...
</Button>:<Button type="submit">
    Save now
    </Button>}
</>
}