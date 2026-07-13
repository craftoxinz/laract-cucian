import { Form, Head } from '@inertiajs/react';
import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import { Button } from '@/components/shadcn/button';
import {
    Field,
    FieldGroup,
    FieldLabel,
    FieldDescription,
} from '@/components/shadcn/field';
import { Input } from '@/components/shadcn/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/shadcn/select';
import { Spinner } from '@/components/shadcn/spinner';
import TextLink from '@/components/text-link';
import { login } from '@/routes';
import { store } from '@/routes/register';

const genderItems = [
    { label: 'Select a gender', value: null },
    { label: 'Male', value: 'male' },
    { label: 'female', value: 'female' },
];

type Props = {
    status?: string;
    canResetPassword?: boolean;
};

export default function Register({ status, canResetPassword }: Props) {
    return (
        <>
            <Head title="Sign up" />

            <div className="w-full max-w-lg">
                <Form
                    {...store.form()}
                    resetOnSuccess={['password', 'password_confirmation']}
                    disableWhileProcessing
                    className="flex flex-col gap-6"
                >
                    {({ processing, errors }) => (
                        <FieldGroup>
                            <div className="flex flex-col items-center gap-1 text-center">
                                <h1 className="text-2xl font-bold">
                                    Create your account
                                </h1>
                                <p className="text-sm text-balance text-muted-foreground">
                                    Fill in the form below to create your
                                    account
                                </p>
                            </div>
                            <div className="grid gap-4 md:grid-cols-2">
                                <Field>
                                    <FieldLabel htmlFor="name">
                                        Full Name
                                    </FieldLabel>
                                    <Input
                                        id="name"
                                        type="text"
                                        name="name"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="name"
                                        placeholder="Your full name"
                                    />
                                    <InputError message={errors.name} />
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="email">
                                        Email
                                    </FieldLabel>
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        required
                                        tabIndex={3}
                                        autoComplete="email"
                                        placeholder="Your email address"
                                    />
                                    <InputError message={errors.email} />
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="gender">
                                        Gender
                                    </FieldLabel>
                                    <Select
                                        items={genderItems}
                                        name="gender"
                                        required
                                    >
                                        <SelectTrigger id="gender" tabIndex={4}>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {genderItems.map((item) => (
                                                <SelectItem
                                                    key={item.value}
                                                    value={item.value}
                                                >
                                                    {item.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <InputError message={errors.gender} />
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="phone_number">
                                        Phone Number
                                    </FieldLabel>
                                    <Input
                                        id="phone_number"
                                        type="tel"
                                        name="phone_number"
                                        required
                                        tabIndex={4}
                                        autoComplete="tel"
                                        placeholder="Your phone number"
                                    />
                                    <InputError message={errors.phone_number} />
                                </Field>
                            </div>
                            <Field>
                                <FieldLabel htmlFor="password">
                                    Password
                                </FieldLabel>
                                <PasswordInput
                                    id="password"
                                    name="password"
                                    required
                                    tabIndex={5}
                                    autoComplete="new-password"
                                    placeholder="Your password"
                                />
                                {errors.password ? (
                                    <InputError message={errors.password} />
                                ) : (
                                    <FieldDescription>
                                        Must be at least 8 characters long.
                                    </FieldDescription>
                                )}
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="password_confirmation">
                                    Confirm Password
                                </FieldLabel>
                                <PasswordInput
                                    id="password_confirmation"
                                    name="password_confirmation"
                                    required
                                    tabIndex={6}
                                    autoComplete="new-password"
                                    placeholder="Your confirm password"
                                />
                                {errors.password ? (
                                    ''
                                ) : (
                                    <FieldDescription>
                                        Please confirm your password.
                                    </FieldDescription>
                                )}
                            </Field>
                            <Field>
                                <Button
                                    type="submit"
                                    tabIndex={7}
                                    disabled={processing}
                                >
                                    {processing && <Spinner />}
                                    Create Account
                                </Button>
                            </Field>
                            <Field>
                                <FieldDescription className="text-center">
                                    Already have an account?{' '}
                                    <TextLink href={login()} tabIndex={8}>
                                        Sign in
                                    </TextLink>
                                </FieldDescription>
                            </Field>
                        </FieldGroup>
                    )}
                </Form>
            </div>
        </>
    );
}
