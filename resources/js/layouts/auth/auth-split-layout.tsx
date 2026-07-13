import { usePage } from '@inertiajs/react';
import { Bubbles } from 'lucide-react';
import type { ReactNode } from 'react';
import loginImage from '../../../images/login-hero.webp';

type AuthLayoutProps = {
    children?: ReactNode;
    name?: string;
    title?: string;
    description?: string;
};

export default function AuthSplitLayout({ children }: AuthLayoutProps) {
    const { name } = usePage().props;

    return (
        <>
            <div className="grid min-h-svh lg:grid-cols-2">
                <div className="flex flex-col gap-4 p-6 md:p-10">
                    <div className="flex justify-center gap-2 md:justify-start">
                        <a
                            href="#"
                            className="flex items-center gap-2 font-medium"
                        >
                            <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                                <Bubbles className="size-4" />
                            </div>
                            {name}
                        </a>
                    </div>
                    <div className="flex flex-1 items-center justify-center">
                        {children}
                    </div>
                </div>
                <div className="relative hidden bg-muted md:block">
                    <img
                        src={loginImage}
                        alt="A smiling woman opening the detergent drawer of a washing machine."
                        className="absolute inset-0 h-full w-full object-cover object-top dark:brightness-[0.2] dark:grayscale"
                        fetchPriority="high"
                    />
                </div>
            </div>
        </>
    );
}
