import { Link } from '@inertiajs/react';
import { Edit, MoreHorizontal, Trash } from 'lucide-react';
import { useState } from 'react';
import { route } from 'ziggy-js';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DeleteProductDialog } from './delete-product-dialog';

export default function ProductActions({ id }: { id: number }) {
    const [deleteOpen, setDeleteOpen] = useState(false);

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                        <Link href={route('admin.products.edit', id)}>
                            <Edit />
                            Bearbeiten
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        className="text-red-500"
                        onClick={() => setDeleteOpen(true)}
                    >
                        <Trash className="text-red-500" />
                        Löschen
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <DeleteProductDialog
                id={id}
                open={deleteOpen}
                onOpenChange={setDeleteOpen}
            />
        </>
    );
}
