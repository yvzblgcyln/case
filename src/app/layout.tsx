import "../styles";
import { Toaster } from "sonner";
import { RootLayoutProps } from "@/interfaces";
import { metaData, geistMono, geistSans } from "@/consts";
import { QueryProvider } from "@/components/providers";

export const metadata = metaData;

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster richColors />
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
