import HeaderLanding from "@/components/header/header-landing";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="relative w-full ">{children}</div>;
}
