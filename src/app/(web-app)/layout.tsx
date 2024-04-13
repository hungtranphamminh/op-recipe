import Footer from "@/components/footer/footer-main";
import MainHeader from "@/components/header/header-main";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative w-full bg-white">
      <MainHeader />
      {children}
      <Footer />
    </div>
  );
}
