"use client"


import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { PropsWithChildren } from "react"
import UserNameForm from "../room/UserNameForm"
import { useLocalStorage } from "@uidotdev/usehooks"
import { USERNAME_KEY } from "../room/constants"

const AuthLayout = ({children}:PropsWithChildren) => {

    const [username,] = useLocalStorage(USERNAME_KEY, null)

    return (
        <>
            {
                username && (<>{children}</>)
            }
            <Dialog open={!username}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>We need your username</DialogTitle>
                    </DialogHeader>
                    <UserNameForm/>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default AuthLayout