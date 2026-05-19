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
            className={cn(
                "relative inline-block whitespace-nowrap cursor-pointer text-blue-primary transition-all ease-in-out hover:text-(--link-hover)",
                "before:absolute before:bottom-0 before:left-1/2 before:h-px before:w-0 before:origin-center before:bg-(--link-hover) before:transition-[width] before:duration-700 before:ease-in-out hover:before:w-1/2",
                "after:absolute after:right-1/2 after:bottom-0 after:h-px after:w-0 after:origin-center after:bg-(--link-hover) after:transition-[width] after:duration-500 after:ease-in-out hover:after:w-1/2",
                className
            )}
        >
            {children}
        </Link>
    );
}