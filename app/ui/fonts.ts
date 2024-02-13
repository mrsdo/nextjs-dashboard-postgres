/** app/ui/fonts.ts
 *
 * Function ---------------
 * Imports Google Fonts
 *
 * ------------------------
 *
 * Author | workflow
 * mrsdo@29signals.com | GitHub: https://github.com/mrsdo
 */

import {Inter, Lusitana} from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
});