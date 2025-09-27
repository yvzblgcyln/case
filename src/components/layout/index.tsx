import { RootLayoutProps } from "@/interfaces";
import Navbar from "../navbar";

export function DefaultLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-1">{children}</div>
    </div>
  );
}
