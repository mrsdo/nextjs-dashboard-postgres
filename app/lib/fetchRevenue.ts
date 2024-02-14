/** lib/fetchRevenue.ts
 *
 * Function ---------------
 * What does this file do?
 * Fetches revenue data
 * ------------------------
 *
 * Author | workflow
 * mrsdo@29signals.com | GitHub: https://github.com/mrsdo
 */
import { sql } from '@vercel/postgres';
import {
    Revenue,
} from './definitions';
import { formatCurrency } from './utils';

export async function fetchRevenue() {
    // Add noStore() here to prevent the response from being cached.
    // This is equivalent to in fetch(..., {cache: 'no-store'}).

    try {
        // Artificially delay a response for demo purposes.
        // Don't do this in production :)

        console.log('Fetching revenue data...');
        // await new Promise((resolve) => setTimeout(resolve, 3000));

        const data = await sql<Revenue>`SELECT * FROM revenue`;

        console.log('Data fetch completed after 3 seconds.');

        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}
