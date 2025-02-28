"use client"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { SignOutButton, useClerk, useUser,  } from "@clerk/nextjs"
import Link from "next/link"

const NAV = () => {
    const { isSignedIn } = useUser()
    const { signOut } = useClerk()
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
                                <Button variant="outline" className="cursor-pointer" onClick={() => signOut()}>Sign Out</Button>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                ): null
            }
            
        </div>
    )
}

export default NAV