import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

type CounterFieldProps = {
    maxNumber: number;
    initialValue?: number;
    onChange?: (value: number) => void;
};

export function CounterField({
    maxNumber,
    initialValue = 1,
    onChange,
}: CounterFieldProps) {
    const [counter, setCounter] = useState(initialValue);

    function increment() {
        const next = Math.min(counter + 1, maxNumber);
        setCounter(next);
        onChange?.(next);
    }

    function decrement() {
        const next = Math.max(counter - 1, 1);
        setCounter(next);
        onChange?.(next);
    }

    return (
        <div className="flex">
            <Button className="rounded-r-none" onClick={decrement}>
                -
            </Button>
            <Input
                className="w-14 rounded-none text-center"
                value={counter}
                readOnly
            />
            <Button className="rounded-l-none" onClick={increment}>
                +
            </Button>
        </div>
    );
}
