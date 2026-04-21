import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

type RadioButtonProps = {
    labelName: string;
    value: string;
    id: string;
};

export function RadioButton({ labelName, value, id }: RadioButtonProps) {
    return (
        <RadioGroup>
            <div className="flex gap-2">
                <RadioGroupItem value={value} id={id} />
                <Label htmlFor={id}>{labelName}</Label>
            </div>
        </RadioGroup>
    );
}
