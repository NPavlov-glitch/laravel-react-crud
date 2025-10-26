import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Link, Head, usePage } from '@inertiajs/react';
import { Megaphone } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Products',
        href: '/products',
    },
];

interface PageProps{
    flash: {
        message?: string
    }
}

export default function Index() {

    const { flash } = usePage().props as PageProps;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product" />
            <div className='m-4'>
                <Link href='/products/create'>
                    <Button>
                        Create a Product
                    </Button>
                </Link>
            </div>

            <div className='m-4'>
                <div>
                    {flash.message && (
                        <Alert>
                            <Megaphone />
                            <AlertTitle>Notification!</AlertTitle>
                            <AlertDescription>
                                {flash.message}
                            </AlertDescription>
                        </Alert>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
