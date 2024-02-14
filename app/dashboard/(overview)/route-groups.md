# Fixing the loading skeleton bug with route groups

- Version 1.0.0
- Last Updated February 14, 2024
- Author: "Marti Dolce @mrsdo"
- License: ISC
- Private: True
- GitHub: https://github.com/mrsdo/nextjs-dashboard-postgres
- Resource: https://nextjs.org/learn/dashboard-app/streaming

---

![](/Volumes/SERV01-DTMAC/_case_study_projects/NextJS-apps/nextjs-dashboard-postgres/public/hero/loading-page-with-skeleton.avif)

Right now, your loading skeleton will apply to the invoices and customers pages as well.

Since loading.tsx is a level higher than /invoices/page.tsx and /customers/page.tsx in the file system, it's also applied to those pages.

We can change this with Route Groups. Create a new folder called /(overview) inside the dashboard folder. Then, move your loading.tsx and page.tsx files inside the folder:

![](/Volumes/SERV01-DTMAC/_case_study_projects/NextJS-apps/nextjs-dashboard-postgres/public/hero/route-group.avif)

Now, the loading.tsx file will only apply to your dashboard overview page.

Route groups allow you to organize files into logical groups without affecting the URL path structure. When you create a new folder using parentheses (), the name won't be included in the URL path. So /dashboard/(overview)/page.tsx becomes /dashboard.

Here, you're using a route group to ensure loading.tsx only applies to your dashboard overview page. However, you can also use route groups to separate your application into sections (e.g. (marketing) routes and (shop) routes) or by teams for larger applications.


<details>
 <summary>Functional Concepts</summary>

> Learn Next.js Chapter 9 Streaming | https://nextjs.org/learn/dashboard-app/streaming

> Next.js Org Organizing routes w/o affecting the URL path | https://nextjs.org/docs/app/building-your-application/routing/route-groups#examples
</details>

