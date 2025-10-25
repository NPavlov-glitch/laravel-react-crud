import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Link, Head } from '@inertiajs/react';
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create a New Product',
        href: '/products/create',
    },
];

export default function Index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create a New Product" />
            <div className='w-8/12 p-4'>
                <form className='space-y-4' action="">
                    <div className='gap-1.5'>
                        <Label htmlFor='product name'>Name</Label>
                        <Input placeholder='Products Name'></Input>
                    </div>

                    <div className='gap-1.5'>
                        <Label htmlFor='product price'>Price</Label>
                        <Input placeholder='Price'></Input>
                    </div>

                    <div className='gap-1.5'>
                        <Label htmlFor='product description'>Description</Label>
                        <Textarea placeholder='Description'></Textarea>
                    </div>

                    <Button type="submit">Add Product</Button>
                </form>
            </div>
        </AppLayout>
    );
}
