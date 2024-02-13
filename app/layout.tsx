import '@/app/ui/global.css';
import {baseFont, inter} from '@/app/ui/fonts';
import { ThemeProviders } from '@/app/ui/theme-providers';
import { siteConfig } from '@/data/config/site.settings';
import { Metadata } from 'next';
import M29Logo from "@/app/ui/m29-logo";

const style: string[] = [];

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.siteUrl),
    title: {
        default: siteConfig.title,
        template: `%s | ${siteConfig.title}`,
    },
    description: siteConfig.description,
    openGraph: {
        title: siteConfig.title,
        description: siteConfig.description,
        url: './',
        siteName: siteConfig.title,
        images: [siteConfig.socialBanner],
        locale: 'en_US',
        type: 'website',
    },
    alternates: {
        canonical: './',
        types: {
            'application/rss+xml': `${siteConfig.siteUrl}/feed.xml`,
        },
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    twitter: {
        title: siteConfig.title,
        card: 'summary_large_image',
        images: [siteConfig.socialBanner],
    },
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html
          lang={siteConfig.language}
          className={`${baseFont.variable} scroll-smooth`}
          suppressHydrationWarning
      >
      <head>
          <style>
              {`
          :root, :before, :after {
            ${style.join(';')}
          }
        `}
          </style>

          <link
              rel="apple-touch-icon"
              sizes="76x76"
              href="/favicons/apple-touch-icon.png"
          />
          <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/favicons/favicon-32x32.png"
          />
          <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicons/manifest.webmanifest"/>
          <link
              rel="mask-icon"
              href="/favicons/safari-pinned-tab.svg"
              color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="#000000"/>

      </head>
      <body className={`${inter.className} flex flex-col bg-white text-black antialiased min-h-screen`}>
      <ThemeProviders>
          <div className="flex flex-col bg-white text-black antialiased min-h-screen">


              {children}
          </div>
      </ThemeProviders>
      </body>
      </html>
);
}