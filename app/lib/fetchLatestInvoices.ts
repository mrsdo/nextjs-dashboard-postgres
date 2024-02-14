/** lib/fetchLatestInvoices.ts
 *
 * Function ---------------
 * What does this file do?
 * Fetches Latest Invoices limit 5
 * ------------------------
 *
 * Author | workflow
 * mrsdo@29signals.com | GitHub: https://github.com/mrsdo
 */
import { sql } from '@vercel/postgres';
import {
    LatestInvoiceRaw,
    CustomerField,
    CustomersTableType,
    InvoiceForm,
    InvoicesTable,
    User,
    Revenue,
} from './definitions';
import { formatCurrency } from './utils';

export async function fetchLatestInvoices() {
    try {
        const data = await sql<LatestInvoiceRaw>`
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
             JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
        LIMIT 5`;

        const latestInvoices = data.rows.map((invoice) => ({
            ...invoice,
            amount: formatCurrency(invoice.amount),
        }));
        return latestInvoices;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch the latest invoices.');
    }
}