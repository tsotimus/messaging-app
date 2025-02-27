import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod"

const FormSchema = z.object({
    message: z.string()
})

type FormData = z.infer<typeof FormSchema>

const MessageForm = () => {

    const methods = useForm<FormData>({
        mode: "onChange",
        resolver: zodResolver(FormSchema)
    })

    const {handleSubmit, formState: {isValid}} = methods;

    const onSubmit = (data:FormData) => {
        console.log(data)
    }

    return (
        <FormProvider {...methods}>
             <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Button disabled={!isValid} variant="outline" type="submit">Enter</Button>
            </form>
        </FormProvider>
    )
}

export default MessageForm