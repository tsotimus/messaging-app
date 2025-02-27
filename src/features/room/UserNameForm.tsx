import { FormProvider, useForm } from "react-hook-form"
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import TextInput from "@/components/form/TextInput"
import { Button } from "@/components/ui/button"
import { useLocalStorage } from "@uidotdev/usehooks";
import { USERNAME_KEY } from "./constants"

const FormSchema = z.object({
    username: z.string()
})

type FormData = z.infer<typeof FormSchema>

const UserNameForm = () => {
    const [,setUserName] = useLocalStorage<string | null>(USERNAME_KEY, null)

    const methods = useForm<FormData>({
        mode: "onChange",
        resolver: zodResolver(FormSchema)
    })

    const {handleSubmit, formState: {isValid}} = methods;

    const onSubmit = (data: FormData) => {
        setUserName(data.username)
    }

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <TextInput label="Username" name="username" rules={{required: true}} placeholder="Your username.."/>
                <Button disabled={!isValid} variant="outline" type="submit">Enter</Button>
            </form>
        </FormProvider>
    )
}

export default UserNameForm