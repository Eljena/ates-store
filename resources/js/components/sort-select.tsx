import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from './ui/select';

type SortSelectProps = {
    value?: string;
    onValueChange?: (value: string) => void;
};

export function SortSelect({ value, onValueChange }: SortSelectProps) {
    return (
        <Select value={value} onValueChange={onValueChange}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Sortieren nach ..." />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="price-asc">Preis aufsteigend</SelectItem>
                    <SelectItem value="price-desc">Preis absteigend</SelectItem>
                    <SelectItem value="name-asc">
                        Artikelname von A - Z
                    </SelectItem>
                    <SelectItem value="name-desc">
                        Artikelname von Z - A
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
