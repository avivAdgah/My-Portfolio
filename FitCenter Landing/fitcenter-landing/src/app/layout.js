import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

const siteUrl = "https://fitcenter.co.il";
const siteName = "FitCenter";
const description =
  "FitCenter is a modern gym in Tel Aviv offering personal training, group classes, nutrition plans, yoga, cardio, and CrossFit. Join today and start your fitness journey.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FitCenter | Gym & Personal Training in Tel Aviv",
    template: "%s | FitCenter",
  },
  description,
  keywords: [
    "gym Tel Aviv",
    "personal training",
    "group fitness classes",
    "nutrition plans",
    "yoga",
    "CrossFit",
    "fitness center",
  ],
  authors: [{ name: siteName }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: "FitCenter | Gym & Personal Training in Tel Aviv",
    description,
    images: [
      {
        url: "/images/HeroCover.webp",
        width: 1200,
        height: 630,
        alt: "Athlete training at FitCenter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FitCenter | Gym & Personal Training in Tel Aviv",
    description,
    images: ["/images/HeroCover.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: siteName,
  description,
  url: siteUrl,
  telephone: "+972-50-123-4567",
  email: "info@fitcenter.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Fitness St.",
    addressLocality: "Tel Aviv",
    addressCountry: "IL",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "06:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "06:00",
      closes: "15:00",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
