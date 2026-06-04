import { router } from '@inertiajs/react';
import { route } from 'ziggy-js';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';

interface DeleteProductDialogProps {
    id: number;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function DeleteProductDialog({
    id,
    open,
    onOpenChange,
}: DeleteProductDialogProps) {
    function handleDelete() {
        router.delete(route('admin.products.destroy', { product: id }));
    }

    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Produkt löschen?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Diese Aktion kann nicht rückgängig gemacht werden.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Abbrechen</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete}>
                        Löschen
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
