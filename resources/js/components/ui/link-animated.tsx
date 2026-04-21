import { cn } from "@/lib/utils";
import { Link } from "@inertiajs/react";
import { ReactNode } from "react";

type LinkAnimatedProps = {
    href: string;
    children: ReactNode;
    className?: string;
}

export default function LinkAnimated({href, children, className}: LinkAnimatedProps) {
    return (
        <Link href={href} 
            className="relative text-black hover:text-blue-800 cursor-pointer transition-all ease-in-out 
            before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 
            before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] 
            after:transition-[width] after:ease-in-out after:duration-500 after:absolute after:bg-gray-400 
            after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
        >
            <span className={cn(className)}>{children}</span>
        </Link>
    );
}