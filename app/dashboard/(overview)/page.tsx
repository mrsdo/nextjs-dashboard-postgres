/** dashboard/page.jsx
 *
 * Function ---------------
 * What does this file do?
 * Page is an async component. This allows you to use await to fetch data.
 * There are also 3 components which receive data:
 *   <Card>,
 *   <RevenueChart>,
 *   and <LatestInvoices>
 *
 * ------------------------
 *
 * Author | workflow
 * mrsdo@29signals.com | GitHub: https://github.com/mrsdo
 */
//import { Card } from '@/app/ui/dashboard/cards';
import CardWrapper from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { roboto } from '@/app/ui/fonts';
import { Suspense } from 'react';
import {
    RevenueChartSkeleton,
    LatestInvoicesSkeleton,
    CardsSkeleton,
} from '@/app/ui/skeletons';
//import {fetchCardData} from "@/app/lib/data";

export default async function Page() {
   // const revenue = await fetchRevenue();
   // const latestInvoices = await fetchLatestInvoices();
   /* const {
        numberOfInvoices,
        numberOfCustomers,
        totalPaidInvoices,
        totalPendingInvoices,
    } = await fetchCardData();*/
    // @ts-ignore
    return (
        <main>
            <h1 className={`${roboto.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {/*<Card title="Collected" value={totalPaidInvoices} type="collected"/>
                    <Card title="Pending" value={totalPendingInvoices} type="pending"/>
            <Card title="Total Invoices" value={numberOfInvoices} type="invoices"/>
            <Card
                title="Total Customers"
                value={numberOfCustomers}
                type="customers"
            />*/}
                <Suspense fallback={<CardsSkeleton />}>
                    <CardWrapper />
                </Suspense>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                {/*{<RevenueChart revenue={revenue}/>}*/}
                {/* Chapter 9 using Suspense */}
                <Suspense fallback={<RevenueChartSkeleton />}>
                    <RevenueChart />
                </Suspense>
                {/*{<LatestInvoices latestInvoices={latestInvoices}/>}*/}
                <Suspense fallback={<LatestInvoicesSkeleton />}>
                    <LatestInvoices />
                </Suspense>

            </div>
        </main>
    );
}