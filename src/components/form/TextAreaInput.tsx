import {Controller, RegisterOptions, useFormContext} from "react-hook-form"
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";


interface TextAreaInputProps {
    name: string;
    rules: RegisterOptions
    label?: string
    placeholder?: string;
    defaultValue?:string;
}

// Not really reusable, but it's a quick solution for now
const TextAreaInput = ({name, rules, label, placeholder, defaultValue}:TextAreaInputProps) => {

    const {control} = useFormContext()
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            defaultValue={defaultValue ?? ""}
            render={({ field: { onChange, value } }) => (
                <fieldset className="space-y-2 w-full">
                    {
                        label && (
                            <Label htmlFor={name}>{label}</Label>
                        )
                    }
                    <Textarea 
                        rows={4} 
                        value={value as string} 
                        onChange={onChange} 
                        name={name} 
                        placeholder={placeholder}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                e.currentTarget.form?.requestSubmit();
                            }
                        }}
                    />
                </fieldset>
              )}
        />
        
    )
}

export default TextAreaInput;