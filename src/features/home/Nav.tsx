"use client"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { SignOutButton, useUser } from "@clerk/nextjs"
import Link from "next/link"

const NAV = () => {
    const {isSignedIn} = useUser()
    return (
        <div className="flex justify-between items-center w-full px-40 py-4">
            {
                isSignedIn ? (
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
                ): null
            }
            
        </div>
    )
}

export default NAV