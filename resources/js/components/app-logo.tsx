import { usePage } from '@inertiajs/react';
import { Bubbles } from 'lucide-react';
import AppLogoIcon from '@/components/app-logo-icon';

export default function AppLogo() {
    const appName = usePage().props.name;

    return (
        <>
            <div className="flex aspect-square size-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
                <Bubbles className="size-4" />
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-tight font-semibold">
                    {appName}
                </span>
            </div>
        </>
    );
}
