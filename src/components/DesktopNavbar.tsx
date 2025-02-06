import { BellIcon, HomeIcon, UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SignInButton, UserButton } from "@clerk/nextjs";
import ModeToggle from "./ModeToggle";
import { currentUser } from "@clerk/nextjs/server";

async function DesktopNavbar() {
    const user = await currentUser();
    return (
        <div className="hidden md:flex items-center space-x-4">
            <ModeToggle />
        </div>
    )
}

export default DesktopNavbar