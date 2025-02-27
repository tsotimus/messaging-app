import {Controller, RegisterOptions, useFormContext} from "react-hook-form"
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";


interface TextInputProps {
    name: string;
    rules: RegisterOptions
    label: string
    placeholder?: string;
    defaultValue?:string;
}

const TextInput = ({name, rules, label, placeholder, defaultValue}:TextInputProps) => {

    const {control} = useFormContext()
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            defaultValue={defaultValue ?? ""}
            render={({ field: { onChange, value } }) => (
                <fieldset className="space-y-2">
                    <Label htmlFor={name}>{label}</Label>
                    <Textarea value={value as string} onChange={onChange} name={name} placeholder={placeholder}/>
                </fieldset>
              )}
        />
        
    )
}

export default TextInput;