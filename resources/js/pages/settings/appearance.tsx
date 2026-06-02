import { Head } from '@inertiajs/react';
import AppearanceTabs from '@/components/appearance-tabs';
import Heading from '@/components/heading';
import { translate } from '@/hooks/use-translation';
import { edit as editAppearance } from '@/routes/appearance';

export default function Appearance() {
    return (
        <>
            <Head title={translate('Appearance settings')} />

            <h1 className="sr-only">{translate('Appearance settings')}</h1>

            <div className="space-y-6">
                <Heading
                    variant="small"
                    title={translate('Appearance settings')}
                    description={translate(
                        "Update your account's appearance settings",
                    )}
                />
                <AppearanceTabs />
            </div>
        </>
    );
}

Appearance.layout = {
    breadcrumbs: [
        {
            title: translate('Appearance settings'),
            href: editAppearance(),
        },
    ],
};
