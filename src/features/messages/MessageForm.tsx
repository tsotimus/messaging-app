import TextAreaInput from "@/components/form/TextAreaInput"
import { Button } from "@/components/ui/button"
import { useUser } from "@clerk/nextjs"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod"

const FormSchema = z.object({
    message: z.string()
})

type FormData = z.infer<typeof FormSchema>

const MessageForm = () => {

    const {user} = useUser()

    const methods = useForm<FormData>({
        mode: "onChange",
        resolver: zodResolver(FormSchema)
    })

    const {handleSubmit, formState: {isValid}} = methods;

    const onSubmit = (data:FormData) => {
        if(!user?.id)return;

        // const 
        console.log(data)
    }

    return (
        <FormProvider {...methods}>
             <form onSubmit={handleSubmit(onSubmit)} className="space-x-8 flex flex-row items-center">
                <TextAreaInput name="message" placeholder="Enter your message" rules={{required: true}} />
                <Button className="h-16 w-30" disabled={!isValid} variant="outline" type="submit">Send</Button>
            </form>
        </FormProvider>
    )
}

export default MessageForm