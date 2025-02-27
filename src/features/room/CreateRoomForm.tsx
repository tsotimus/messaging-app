"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import TextInput from "@/components/form/TextInput"
import { Button } from "@/components/ui/button"
import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod"


export const FormSchema = z.object({
    name: z.string(),
})  

export type FormData = z.infer<typeof FormSchema>

const CreateRoomForm = () => {

    const methods = useForm<FormData>({
        resolver: zodResolver(FormSchema),
        mode: "onChange"
    })

    const {handleSubmit, formState: {isValid}} = methods

    const onSubmit = (data: FormData) => {
        console.log(data)
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