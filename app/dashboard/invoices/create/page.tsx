/** app/invoices/create/page.tsx
 *
 * Function ---------------
 * What does this file do?
 * Here are the steps you'll take to create a new invoice:
 *
 * Create a form to capture the user's input.
 * Create a Server Action and invoke it from the form.
 * Inside your Server Action, extract the data from the formData object.
 * Validate and prepare the data to be inserted into your database.
 * Insert the data and handle any errors.
 * Revalidate the cache and redirect the user back to invoices page.
 * ------------------------
 *
 * Author | workflow
 * mrsdo@29signals.com | GitHub: https://github.com/mrsdo
 */

import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';

export default async function Page() {
    const customers = await fetchCustomers();

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Invoices', href: '/dashboard/invoices' },
                    {
                        label: 'Create Invoice',
                        href: '/dashboard/invoices/create',
                        active: true,
                    },
                ]}
            />
            <Form customers={customers} />
        </main>
    );
}