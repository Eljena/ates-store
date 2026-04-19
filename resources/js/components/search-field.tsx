import { Search } from 'lucide-react';
import { Button } from './ui/button';
import { Field } from './ui/field';
import { Input } from './ui/input';

export function SearchField() {
    return (
        <Field orientation="horizontal" className="gap-0">
            <Input
                className="rounded-full rounded-r-none"
                type="search"
                placeholder="Suchen..."
            />
            <Button className="rounded-full rounded-l-none">
                <Search />
            </Button>
        </Field>
    );
}
