import { Checkbox } from './ui/checkbox';
import { Field, FieldGroup, FieldLabel } from './ui/field';

type CheckboxWithLabelProps = {
    labelName: string;
    value: string;
    id: string;
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
};

export default function CheckboxWithLabel({
    labelName,
    value,
    id,
    checked,
    onCheckedChange,
}: CheckboxWithLabelProps) {
    return (
        <FieldGroup className="mx-auto w-56">
            <Field orientation="horizontal">
                <Checkbox
                    id={id}
                    name={value}
                    checked={checked}
                    onCheckedChange={onCheckedChange}
                />
                <FieldLabel htmlFor={id}>{labelName}</FieldLabel>
            </Field>
        </FieldGroup>
    );
}
