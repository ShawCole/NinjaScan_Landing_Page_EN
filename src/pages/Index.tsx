
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/CountdownTimer";
import { ConsequenceCard } from "@/components/ConsequenceCard";
import { TriangleAlert, Timer, Users, Info, Clock, CheckCircle, Search } from "lucide-react";

const Index = () => {
  return <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#2C3E50] text-white">
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
            In [COUNTRY], companies with over [EMPLOYEE_THRESHOLD] employees and more than [€TURNOVER] in annual turnover are subject to these fines under the European Accessibility Act.
          </p>
          <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg rounded-full animate-pulse">
            🔎 Check Your Website for Free Now
          </Button>
          <p className="mt-3 text-sm text-gray-400">No required to check your compliance</p>

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
            <ConsequenceCard icon={<TriangleAlert />} title="Substantial Fines" description="Non-compliance can result in fines of up to €100,000 per violation" />
            <ConsequenceCard icon={<Timer />} title="Website Shutdown" description="Regulators may order your website taken offline until compliance is achieved" />
            <ConsequenceCard icon={<Users />} title="Lost Revenue" description="Non-compliant products or services can be banned from the market" />
            <ConsequenceCard icon={<Info />} title="Legal Costs" description="Defending against regulatory action is expensive and time-consuming" />
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair mb-8">Only [X] Months Left Until the June 28, 2025 Deadline</h2>
          <p className="text-xl mb-8 text-gray-300">
            Most companies will not be ready. Over 95% of websites currently fail the EAA audit—don't risk waiting until you're in the crosshairs.
          </p>
          <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 py-6 text-lg rounded-full">
            🚨 Avoid Risks Now
          </Button>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600/20 to-blue-600/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair mb-12 text-center">Meet Eco Web Ninja: Effortless, Affordable 100% Compliance</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4">Full EAA & WCAG 2.1 AA Audit</h3>
              <p className="text-gray-300">Checks your website against every major guideline. </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4">Instant Automated Fixes</h3>
              <p className="text-gray-300">Fixes most compliance issues in minutes—no tech skills needed.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4">Clear, Easy Guidance</h3>
              <p className="text-gray-300">For anything needing manual attention, you'll get step-by-step, plain-language instructions.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4">Affordable</h3>
              <p className="text-gray-300">Starting at just €39/month—much less than hiring a consultant or defending against a lawsuit.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4">It Pays For Itself</h3>
              <p className="text-slate-50">NinjaScan also more than pays for itself with reduced energy costs and improved SEO. </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4">Free Scan</h3>
              <p className="text-gray-300">NinjaScan provides a mandatory Accessibility Report for you to post on your website absolutely FREE. NinjaScan also includes a complementary Accessibility Widget.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg rounded-full">
              🔎 Scan My Website Free
            </Button>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair mb-8">NinjaScan dramatically shortens your compliance timeframe saving time and money while protecting you from significant penalties</h2>
          <p className="text-xl mb-8 text-red-400 font-medium">Without NinjaScan, you lose time and risk penalties</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Clock className="mx-auto text-blue-500 mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">Audit</h3>
              <p className="text-gray-300">2-3 months of comprehensive review</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">Remediation</h3>
              <p className="text-gray-300">4-6 months of technical fixes</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Search className="mx-auto text-purple-500 mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">Testing</h3>
              <p className="text-gray-300">2-3 months of implementation</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Info className="mx-auto text-yellow-500 mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">Documentation</h3>
              <p className="text-gray-300">1-2 months of policy development</p>
            </div>
          </div>
          <p className="mt-8 text-xl text-slate-50">Start today to avoid the rush and extra costs of last-minute fixes!</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4">Q: What happens if I ignore this?</h3>
              <p className="text-gray-300">A: You risk major fines, legal trouble, and your website being taken offline.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4">Q: How does Eco Web Ninja work?</h3>
              <p className="text-gray-300">A: We scan, fix, and guide you through every step, automatically handling most of the process.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4">Q: How do I know if I'm compliant?</h3>
              <p className="text-gray-300">A: Run a free scan—get a clear, instant compliance report, and see your risk level.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair mb-6">
            Don't Wait Until It's Too Late
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Check Your Website for Free and Get Compliant Before the Deadline.
          </p>
          <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg rounded-full">
            🔎 Start My Free Scan Now
          </Button>
        </div>
      </section>
    </div>;
};
export default Index;
