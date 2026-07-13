import { Form, Head, Link } from '@inertiajs/react';
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
import { Spinner } from '@/components/shadcn/spinner';
import TextLink from '@/components/text-link';
import { register } from '@/routes';
import { store } from '@/routes/login';

type Props = {
    status?: string;
    canResetPassword?: boolean;
};

export default function Login({ status, canResetPassword }: Props) {
    return (
        <>
            <Head title="Log in" />

            <div className="w-full max-w-xs">
                <Form {...store.form()} className="flex flex-col gap-6">
                    {({ processing, errors }) => (
                        <>
                            <FieldGroup>
                                <div className="flex flex-col items-center gap-1 text-center">
                                    <h1 className="text-2xl font-bold">
                                        Login to your account
                                    </h1>
                                    <p className="text-sm text-balance text-muted-foreground">
                                        Enter your email below to login to your
                                        account
                                    </p>
                                </div>
                                <Field>
                                    <FieldLabel htmlFor="email">
                                        Email
                                    </FieldLabel>
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="email"
                                        placeholder="Enter your email"
                                    />
                                    <InputError message={errors.email} />
                                </Field>
                                <Field>
                                    <div className="flex items-center">
                                        <FieldLabel htmlFor="password">
                                            Password
                                        </FieldLabel>
                                        <Link
                                            href="#"
                                            className="ml-auto text-sm underline-offset-4 hover:underline"
                                            tabIndex={4}
                                        >
                                            Forgot your password?
                                        </Link>
                                    </div>
                                    <PasswordInput
                                        id="password"
                                        name="password"
                                        required
                                        tabIndex={2}
                                        autoComplete="current-password"
                                        placeholder="Enter your password"
                                    />
                                    <InputError message={errors.password} />
                                </Field>
                                <Field>
                                    <Button
                                        type="submit"
                                        tabIndex={3}
                                        disabled={processing}
                                    >
                                        {processing && <Spinner />}
                                        Login
                                    </Button>
                                </Field>
                                <Field>
                                    <FieldDescription className="text-center">
                                        Don&apos;t have an account?{' '}
                                        <TextLink
                                            href={register()}
                                            tabIndex={5}
                                        >
                                            Sign up
                                        </TextLink>
                                    </FieldDescription>
                                </Field>
                            </FieldGroup>
                        </>
                    )}
                </Form>
            </div>
        </>
    );
}
