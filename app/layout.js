
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./components/HeaderFol/Header";
import Hero from "./components/Hero";
import NextBreadcrumb from "./components/Breadcrumb/Breadcrumb";
import BootstrapClient from "./components/BootstrapClient";
import { AOSInit } from "./lib/aos-anima";

import '@fortawesome/fontawesome-free/css/all.css';
import { montserrat, postsen, rock } from "@/fonts/font";

import "./globals.css";













// const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "wp next js",
  description: "integrated next.js with wordpress",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <AOSInit />
      <body className={`${rock.variable} ${montserrat.variable} ${postsen.variable}`}>
        
       <Header />
       <Hero />
       <NextBreadcrumb 
       homeElement={'Home'}
       separator={<span className="mx-3"> | </span>}
       activeClasses='breacrumb-active-item'
       containerClasses='breadcrumb  ' 
       listClasses='breadcrumb-item'
       capitalizeLinks
       />
        {children}
        <BootstrapClient />
        </body>
    </html>
  );
}
