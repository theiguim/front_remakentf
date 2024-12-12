import type { Metadata } from "next";
import "../styles/Global.scss"
import "bootstrap/dist/css/bootstrap.min.css"

export const metadata: Metadata = {
  title: "Onebitflix",
  description: "Tenha acesso aos melhores conteúdos de programaão de uma forma simples e fácil!",
  icons: "/favicon.svg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
