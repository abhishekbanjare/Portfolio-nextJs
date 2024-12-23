import ThemeProviderWrapper from "../themproviderwrapper/ThemeProviderWrapper";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add Reddit Sans font from Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Reddit+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
        <Footer />
      </body>
    </html>
  );
}
