import TextAreaInput from "@/components/form/TextAreaInput"
import { Button } from "@/components/ui/button"
import { MessageRequest } from "@/types/message"
import { useUser } from "@clerk/nextjs"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod"
import useSWRMutation from 'swr/mutation'
import useGetMessages from "./useGetMessages"


const FormSchema = z.object({
    message: z.string()
})

type FormData = z.infer<typeof FormSchema>


async function sendMessage(url:string, { arg }: { arg: MessageRequest }) {
    await axios.post(url,arg)
  }

const MessageForm = () => {

    const { trigger } = useSWRMutation('api/v1/message', sendMessage)

    const {user} = useUser()

    const methods = useForm<FormData>({
        mode: "onChange",
        resolver: zodResolver(FormSchema)
    })

    const {handleSubmit, formState: {isValid}} = methods;

    const onSubmit = async(data:FormData) => {
        if(!user?.id)return;

        const optimisticMessage = {
            id: "optimistic_" + Math.random().toString(36).substring(2, 15),
            text: data.message,
            createdBy: user.id,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        
        await trigger({
            text: data.message,
            createdBy: user.id
        }, {
            optimisticData: (current) => [...(current ?? []), optimisticMessage],
            rollbackOnError: true,
            populateCache: false,
            revalidate: true
        }).then(()=>{
            methods.reset()
        }).catch((err)=>{
            console.log(err)
        })


   
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

