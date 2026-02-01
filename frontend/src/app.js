import OrderForm from "./OrderForm";
import Bottleneck from "./Bottleneck";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e3c72] to-[#2a5298] text-white">
      {/* HERO */}
      <header className="py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
          Decision-Centric MSME AI
        </h1>
        <p className="mt-4 text-white/80 text-lg">
          Smart decisions for small & medium businesses
        </p>
      </header>

      {/* DASHBOARD */}
      <main className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 pb-20">
        <OrderForm />
        <Bottleneck />
      </main>
    </div>
  );
}
