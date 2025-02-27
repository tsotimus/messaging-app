"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import TextInput from "@/components/form/TextInput"
import { Button } from "@/components/ui/button"
import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod"
import axios from "axios"
import useSWRMutation from "swr/mutation"
import { RoomRequest } from "@/types/room"
import { toast } from "sonner"


export const FormSchema = z.object({
    name: z.string(),
})  

export type FormData = z.infer<typeof FormSchema>

async function sendMessage(url:string, { arg }: { arg: RoomRequest }) {
    await axios.post(url,arg)
}

interface CreateRoomFormProps {
    onSuccess: () => void
}

const CreateRoomForm = ({onSuccess}: CreateRoomFormProps) => {

    const { trigger } = useSWRMutation('api/v1/room', sendMessage)

    const methods = useForm<FormData>({
        resolver: zodResolver(FormSchema),
        mode: "onChange"
    })

    const {handleSubmit, formState: {isValid}} = methods

    const onSubmit = (data: FormData) => {
        console.log(data)

        trigger({
            name: data.name

        }).then(()=>{
            methods.reset()
            onSuccess()
            toast.success("Room created successfully")
        }).catch((err)=>{
            console.log(err)
            toast.error("Failed to create room")
        })
    }

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <TextInput name="name" placeholder="Room Name" rules={{required: true}} label="Room Name" />
                <Button variant="outline" disabled={!isValid} type="submit">Create</Button>
            </form>
        </FormProvider>
    )
}

export default CreateRoomForm   