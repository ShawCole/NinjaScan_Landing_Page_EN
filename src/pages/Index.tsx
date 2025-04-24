
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/CountdownTimer";
import { ConsequenceCard } from "@/components/ConsequenceCard";
import { warning, timer, users, info } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#2C3E50] text-white">
      {/* Sticky Warning Banner */}
      <div className="bg-red-500 text-white py-2 px-4 text-center sticky top-0 z-50">
        <p className="text-sm font-medium">🚨 Most websites aren't compliant with the new EU law</p>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-playfair mb-6">
            You could be fined up to <span className="text-red-500">€100,000</span> if you aren't compliant
          </h1>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Companies with over 50 employees and more than €2 million in annual turnover are subject to these fines under the European Accessibility Act.
          </p>
          <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg rounded-full animate-pulse">
            🔎 Check Your Website for Free Now
          </Button>

          <div className="mt-16">
            <p className="text-xl mb-4">Time Remaining Until Deadline:</p>
            <CountdownTimer />
          </div>
        </div>
      </section>

      {/* Consequences Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair mb-12 text-center">The Cost of Inaction</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ConsequenceCard
              icon={<warning />}
              title="Substantial Fines"
              description="Non-compliance can result in fines of up to €100,000 per violation"
            />
            <ConsequenceCard
              icon={<timer />}
              title="Website Shutdown"
              description="Regulators may order your website taken offline until compliance is achieved"
            />
            <ConsequenceCard
              icon={<users />}
              title="Lost Revenue"
              description="Non-compliant products or services can be banned from the market"
            />
            <ConsequenceCard
              icon={<info />}
              title="Legal Costs"
              description="Defending against regulatory action is expensive and time-consuming"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair mb-6">
            Don't Wait Until It's Too Late
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Check your website now and get compliant before the deadline.
          </p>
          <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg rounded-full">
            🔎 Start My Free Scan Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
