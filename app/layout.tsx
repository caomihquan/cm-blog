import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s / The CM-Blog",
    default: "Welcome / The CM-Blog",
  },
  description:
    "Welcome to the CM-Blog, your go-to source for insightful articles and stories about technology and development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">{children}</div>
      </body>
    </html>
  );
}
