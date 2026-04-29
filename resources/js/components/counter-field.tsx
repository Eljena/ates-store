import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

type CounterFieldProps = {
    maxNumber: number;
};

export function CounterField({ maxNumber }: CounterFieldProps) {
    const [counter, setCounter] = useState(1);

    function increment() {
        setCounter((current) => Math.min(current + 1, maxNumber));
    }

    function decrement() {
        setCounter((current) => Math.max(current - 1, 1));
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
