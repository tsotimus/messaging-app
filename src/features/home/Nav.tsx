"use client"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { SignOutButton } from "@clerk/nextjs"
import Link from "next/link"

const NAV = () => {
    return (
        <div className="flex justify-between items-center w-full px-40 py-4">
            <NavigationMenu className="flex justify-between items-center w-full">
                <NavigationMenuList className="flex justify-between items-center w-full">
                <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    All Rooms
                    </NavigationMenuLink>
                </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <SignOutButton/>
                </NavigationMenuItem>
                </NavigationMenuList>   
            </NavigationMenu>
        </div>
    )
}

export default NAV