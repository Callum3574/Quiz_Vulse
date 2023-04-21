import Navbar from "@/components/Partials/Navbar";
import Footer from "@/components/Partials/Footer";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Quicksand } from "@next/font/google";

const quicksand = Quicksand({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

// Initialize the query client
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={quicksand.className}>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </QueryClientProvider>
    </main>
  );
}
