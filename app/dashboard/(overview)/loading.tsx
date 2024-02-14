/** app/dashboard/loading.tsx
 *
 * Function ---------------
 * What does this file do?
 * loading.tsx is a special Next.js file built on top of Suspense, it allows
 * you to create fallback UI to show as a replacement while page content loads.
 * Since <SideNav> is static, it's shown immediately. The user can interact with
 * <SideNav> while the dynamic content is loading.
 * The user doesn't have to wait for the page to finish loading before navigating
 * away (this is called interruptable navigation).
 * ------------------------
 *
 * Author | workflow
 * mrsdo@29signals.com | GitHub: https://github.com/mrsdo
 */
import DashboardSkeleton from '@/app/ui/skeletons';
export default function Loading() {
    return <DashboardSkeleton />;
}