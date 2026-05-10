import { Head, useForm } from '@inertiajs/react';
import { route } from 'ziggy-js';
import OrderSummary from '@/components/cart/order-summary';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import Layout from '@/layouts/shop/layout';

export default function Create() {
    const { data, setData, post, errors } = useForm({
        customer_firstName: '',
        customer_lastName: '',
        customer_email: '',
        customer_address: '',
    });

    const submit = () => post(route('checkout.store'));

    return (
        <>
            <Head title="Bestellvorgang" />
            <Layout>
                <h1 className="mb-5 text-3xl font-bold">Bestellung</h1>
                <div className="flex">
                    <div className="mr-10 flex-1">
                        <div className="space-y-5">
                            <h2 className="text-xl font-semibold">
                                1. Rechnungs- und Lieferadresse
                            </h2>
                            <form
                                method="POST"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    submit();
                                }}
                            >
                                <FieldGroup className="grid grid-cols-2">
                                    <Field>
                                        <FieldLabel htmlFor="firstName">
                                            Vorname
                                            <span className="text-destructive">
                                                *
                                            </span>
                                        </FieldLabel>
                                        <Input
                                            value={data.customer_firstName}
                                            onChange={(e) =>
                                                setData(
                                                    'customer_firstName',
                                                    e.target.value,
                                                )
                                            }
                                            type="text"
                                            id="firstName"
                                            placeholder="John"
                                        />
                                        <InputError
                                            message={errors.customer_firstName}
                                        />
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="lastName">
                                            Nachname
                                            <span className="text-destructive">
                                                *
                                            </span>
                                        </FieldLabel>
                                        <Input
                                            value={data.customer_lastName}
                                            onChange={(e) =>
                                                setData(
                                                    'customer_lastName',
                                                    e.target.value,
                                                )
                                            }
                                            type="text"
                                            id="lastName"
                                            placeholder="Doe"
                                        />
                                        <InputError
                                            message={errors.customer_lastName}
                                        />
                                    </Field>

                                    <Field>
                                        <FieldLabel htmlFor="email">
                                            E-Mail
                                            <span className="text-destructive">
                                                *
                                            </span>
                                        </FieldLabel>
                                        <Input
                                            value={data.customer_email}
                                            onChange={(e) =>
                                                setData(
                                                    'customer_email',
                                                    e.target.value,
                                                )
                                            }
                                            type="text"
                                            id="email"
                                            placeholder="john_doe@email.com"
                                        />
                                        <InputError
                                            message={errors.customer_email}
                                        />
                                    </Field>

                                    <Field>
                                        <FieldLabel htmlFor="address">
                                            Adresse
                                            <span className="text-destructive">
                                                *
                                            </span>
                                        </FieldLabel>
                                        <Input
                                            value={data.customer_address}
                                            onChange={(e) =>
                                                setData(
                                                    'customer_address',
                                                    e.target.value,
                                                )
                                            }
                                            type="text"
                                            id="address"
                                            placeholder="Westring 306, 24116 Kiel"
                                        />
                                        <InputError
                                            message={errors.customer_address}
                                        />
                                    </Field>

                                    <div className="col-span-2">
                                        <Button type="submit">
                                            Kundendaten abschicken
                                        </Button>
                                    </div>
                                </FieldGroup>
                            </form>
                        </div>
                        <div className="hidden">
                            <h2 className="text-xl font-semibold">
                                2. Versand und Zahlungsart
                            </h2>
                            <form method="POST">
                                <Button>Zahlungsart festlegen</Button>
                            </form>
                        </div>
                        <div className="hidden">
                            <h2 className="text-xl font-semibold">
                                3. Zusammenfassung
                            </h2>
                            <form method="POST">
                                <Button>Zahlungspflichtig bestellen</Button>
                            </form>
                        </div>
                    </div>
                    <div>
                        <OrderSummary
                            itemCount={2}
                            total={10}
                            disableCheckoutBtn
                        />
                    </div>
                </div>
            </Layout>
        </>
    );
}
