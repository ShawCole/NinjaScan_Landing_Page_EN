import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/CountdownTimer";
import { ConsequenceCard } from "@/components/ConsequenceCard";
import { TriangleAlert, Timer, Users, Info, Clock, CheckCircle, Search } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { calculateTimeUntilDeadline, DEADLINE_DATE } from "@/utils/dateUtils";
import { useTranslation } from "react-i18next";

const Index = () => {
  const timeUntilDeadline = calculateTimeUntilDeadline();
  const { t } = useTranslation();

  return <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-[#1A1F2C] dark:to-[#2C3E50] text-gray-900 dark:text-white">
    {/* Sticky Warning Banner */}
    <div className="bg-red-500 text-white py-3 px-6 text-center sticky top-0 z-50">
      <p className="text-base md:text-lg font-semibold">{t('banner.warning')}</p>
    </div>

    {/* Hero Section */}
    <section className="relative pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-playfair mb-6">
          {t('hero.title')}
        </h1>
        <p className="text-xl mb-8 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          {t('hero.subtitle')}
        </p>
        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white px-12 py-8 text-2xl rounded-full shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
        >
          {t('hero.cta')}
        </Button>
        <p className="mt-3 text-sm text-gray-700 dark:text-gray-400">{t('hero.disclaimer')}</p>

        <div className="mt-16">
          <p className="text-2xl md:text-3xl mb-8 text-gray-800 dark:text-white">{t('hero.countdown.title')}</p>
          <CountdownTimer />
        </div>
      </div>
    </section>

    {/* Consequences Section */}
    <section className="pt-12 pb-20 px-4 bg-gray-50 dark:bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-playfair mb-12 text-center text-gray-900 dark:text-white">
          The Cost of Inaction
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ConsequenceCard
            icon={<TriangleAlert />}
            title="Substantial Fines"
            description="Non-compliance can result in fines of up to €100,000 per violation"
          />
          <ConsequenceCard
            icon={<Timer />}
            title="Website Shutdown"
            description="Regulators may order your website taken offline until compliance is achieved"
          />
          <ConsequenceCard
            icon={<Users />}
            title="Lost Revenue"
            description="Non-compliant products or services can be banned from the market"
          />
          <ConsequenceCard
            icon={<Info />}
            title="Legal Costs"
            description="Defending against regulatory action is expensive and time-consuming"
          />
        </div>
      </div>
    </section>

    {/* Urgency Section */}
    <section className="py-20 px-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-playfair mb-8 text-gray-900 dark:text-white">
          Only {timeUntilDeadline.days} Days Left Until the {new Date(DEADLINE_DATE).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} Deadline
        </h2>
        <p className="text-xl mb-8 text-gray-800 dark:text-gray-200 max-w-3xl mx-auto font-medium">
          Most companies will not be ready. Over 95% of websites currently fail the EAA audit—don't risk waiting until you're in the crosshairs.
        </p>
        <Button
          size="lg"
          className="bg-red-600 hover:bg-red-700 text-white px-12 py-8 text-2xl rounded-full shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
        >
          🚨 Avoid Risks Now
        </Button>
      </div>
    </section>

    {/* Solution Section */}
    <section className="pt-20 pb-12 px-4 bg-gradient-to-r from-emerald-50 to-sky-50 dark:from-green-600/20 dark:to-blue-600/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-playfair mb-12 text-center text-gray-900 dark:text-white">Meet Eco Web Ninja: Effortless, Affordable 100% Compliance</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-white/10">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Full EAA & WCAG 2.1 AA Audit</h3>
            <p className="text-gray-700 dark:text-gray-300">Checks your website against every major guideline.</p>
          </div>
          <div className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-white/10">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Instant Automated Fixes</h3>
            <p className="text-gray-700 dark:text-gray-300">Fixes most compliance issues in minutes—no tech skills needed.</p>
          </div>
          <div className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-white/10">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Clear, Easy Guidance</h3>
            <p className="text-gray-700 dark:text-gray-300">For anything needing manual attention, you'll get step-by-step, plain-language instructions.</p>
          </div>
          <div className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-white/10">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Affordable</h3>
            <p className="text-gray-700 dark:text-gray-300">Starting at just €39/month—much less than hiring a consultant or defending against a lawsuit.</p>
          </div>
          <div className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-white/10">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">It Pays For Itself</h3>
            <p className="text-gray-700 dark:text-gray-300">NinjaScan also more than pays for itself with reduced energy costs and improved SEO.</p>
          </div>
          <div className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-white/10">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Free Scan</h3>
            <p className="text-gray-700 dark:text-gray-300">NinjaScan provides a mandatory Accessibility Report for you to post on your website absolutely FREE. NinjaScan also includes a complementary Accessibility Widget.</p>
          </div>
        </div>
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white px-12 py-8 text-2xl rounded-full shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
          >
            🔎 Scan My Website Free
          </Button>
        </div>
      </div>
    </section>

    {/* Timeline Section */}
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-[#111b27] dark:to-[#1a2436]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-playfair mb-8 text-gray-900 dark:text-white max-w-4xl mx-auto">
          NinjaScan dramatically shortens your compliance timeframe saving time and money while protecting you from significant penalties
        </h2>
        <p className="text-xl mb-12 text-red-700 dark:text-red-400 font-semibold">
          Without NinjaScan, you lose time and risk penalties
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-[#202935] rounded-xl p-8 border border-gray-200 dark:border-[#2C3E50]/50 shadow-lg hover:shadow-xl">
            <Clock className="mx-auto text-blue-700 dark:text-blue-400 mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Audit
            </h3>
            <p className="text-gray-700 dark:text-gray-400/80">
              2-3 months of comprehensive review
            </p>
          </div>
          <div className="bg-white dark:bg-[#202935] rounded-xl p-8 border border-gray-200 dark:border-[#2C3E50]/50 shadow-lg hover:shadow-xl">
            <CheckCircle className="mx-auto text-green-700 dark:text-green-400 mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Remediation
            </h3>
            <p className="text-gray-700 dark:text-gray-400/80">
              4-6 months of technical fixes
            </p>
          </div>
          <div className="bg-white dark:bg-[#202935] rounded-xl p-8 border border-gray-200 dark:border-[#2C3E50]/50 shadow-lg hover:shadow-xl">
            <Search className="mx-auto text-purple-700 dark:text-purple-400 mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Testing
            </h3>
            <p className="text-gray-700 dark:text-gray-400/80">
              2-3 months of implementation
            </p>
          </div>
          <div className="bg-white dark:bg-[#202935] rounded-xl p-8 border border-gray-200 dark:border-[#2C3E50]/50 shadow-lg hover:shadow-xl">
            <Info className="mx-auto text-amber-700 dark:text-yellow-400 mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Documentation
            </h3>
            <p className="text-gray-700 dark:text-gray-400/80">
              1-2 months of policy development
            </p>
          </div>
        </div>
        <p className="mt-12 text-xl text-gray-700 dark:text-gray-400/80 font-medium">
          Start today to avoid the rush and extra costs of last-minute fixes!
        </p>
      </div>
    </section>

    {/* Pricing Section */}
    <section role="region" id="license" aria-labelledby="pricing-heading" className="py-16 px-4 md:px-12 lg:px-12 xl:px-24 bg-white/50 dark:bg-[#1A1F2C]">
      <div className="text-center pb-10">
        <h2 id="pricing-heading" className="text-3xl font-bold text-[#624BFF] mb-4">Choose Your Plan</h2>
        <hr className="border border-[#624BFF] w-60 mx-auto mb-4" />
        <p className="text-lg text-gray-600 dark:text-gray-300"><strong>Transparent annual pricing. No surprises.</strong></p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* Pro */}
        <div className="bg-white dark:bg-[#202935] p-6 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 flex flex-col hover:border-[#624BFF]">
          <div className="flex flex-col items-center text-center flex-grow">
            <i className="fa-solid fa-rocket text-3xl text-[#624BFF] mb-4"></i>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Pro</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Basic compliance for small businesses</p>
            <div className="w-max mx-auto text-center space-y-1">
              <p className="text-2xl text-gray-500 text-center">
                <span className="line-through">€699</span> <span className="text-base">/ year</span>
              </p>
              <p className="text-3xl font-bold text-[#624BFF]">
                €490 <span className="text-base font-normal text-gray-500 dark:text-gray-400">/ year</span>
              </p>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Up to 75,000 visits / month</p>
          </div>
          <div className="mt-8 flex justify-center">
            <a href="signup.html" className="bg-[#624BFF] text-white px-4 py-2 rounded-md font-semibold shadow-md transition duration-200
              hover:bg-[#7E6BFF] hover:text-white
              focus:outline focus:outline-2 focus:outline-[#624BFF]">
              Buy Now
            </a>
          </div>
          <ul className="text-sm mt-6 text-gray-600 dark:text-gray-300 space-y-2">
            <li>✓ A detailed technical Accessibility Report</li>
            <li>✓ Integrable accessibility widget</li>
            <li>✓ Accessibility Statement generator</li>
            <li>✓ Full compliance with all legal accessibility standards</li>
            <li>✓ Eco Scanner reduces your carbon footprint</li>
          </ul>
        </div>

        {/* Pro Plus */}
        <div className="bg-white dark:bg-[#202935] p-6 rounded-lg shadow-xl border-2 border-[#624BFF] flex flex-col relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#624BFF] text-white px-4 py-1 rounded-full text-sm">
            Most Popular
          </div>
          <div className="flex flex-col items-center text-center flex-grow">
            <i className="fa-solid fa-shuttle-space text-3xl text-[#624BFF] mb-4"></i>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Pro Plus</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Advanced compliance for mid-sized companies</p>
            <div className="w-max mx-auto text-center space-y-1">
              <p className="text-2xl text-gray-500 text-center">
                <span className="line-through">€1,699</span> <span className="text-base">/ year</span>
              </p>
              <p className="text-3xl font-bold text-[#624BFF]">
                €990 <span className="text-base font-normal text-gray-500 dark:text-gray-400">/ year</span>
              </p>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Up to 150,000 visits / month</p>
          </div>
          <div className="mt-8 flex justify-center">
            <a href="signup.html" className="bg-[#624BFF] text-white px-4 py-2 rounded-md font-semibold shadow-md transition duration-200
              hover:bg-[#7E6BFF] hover:text-white
              focus:outline focus:outline-2 focus:outline-[#624BFF]">
              Buy Now
            </a>
          </div>
          <ul className="text-sm mt-6 text-gray-600 dark:text-gray-300 space-y-2">
            <li>✓ A detailed technical Accessibility Report</li>
            <li>✓ Integrable accessibility widget</li>
            <li>✓ Accessibility Statement generator</li>
            <li>✓ Full compliance with all legal accessibility standards</li>
            <li>✓ Eco Scanner reduces your carbon footprint</li>
          </ul>
        </div>

        {/* Ultimate */}
        <div className="bg-white dark:bg-[#202935] p-6 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 flex flex-col hover:border-[#624BFF]">
          <div className="flex flex-col items-center text-center flex-grow">
            <i className="fa-solid fa-shuttle-space text-3xl text-[#624BFF] mb-4"></i>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Ultimate</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Full compliance for large organizations</p>
            <div className="w-max mx-auto text-center space-y-1">
              <p className="text-2xl text-gray-500 text-center">
                <span className="line-through">€3,599</span> <span className="text-base">/ year</span>
              </p>
              <p className="text-3xl font-bold text-[#624BFF]">
                €1990 <span className="text-base font-normal text-gray-500 dark:text-gray-400">/ year</span>
              </p>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Up to 500,000 visits / month</p>
          </div>
          <div className="mt-8 flex justify-center">
            <a href="signup.html" className="bg-[#624BFF] text-white px-4 py-2 rounded-md font-semibold shadow-md transition duration-200
              hover:bg-[#7E6BFF] hover:text-white
              focus:outline focus:outline-2 focus:outline-[#624BFF]">
              Buy Now
            </a>
          </div>
          <ul className="text-sm mt-6 text-gray-600 dark:text-gray-300 space-y-2">
            <li>✓ A detailed technical Accessibility Report</li>
            <li>✓ Integrable accessibility widget</li>
            <li>✓ Accessibility Statement generator</li>
            <li>✓ Full compliance with all legal accessibility standards</li>
            <li>✓ Eco Scanner reduces your carbon footprint</li>
          </ul>
        </div>

        {/* Enterprise */}
        <div className="bg-white dark:bg-[#202935] p-6 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 flex flex-col hover:border-[#624BFF]">
          <div className="flex flex-col items-center text-center flex-grow">
            <i className="fa-solid fa-satellite-dish text-3xl text-[#624BFF] mb-4"></i>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Enterprise</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Tailored solution for high-traffic needs</p>
            <div className="mt-8">
              <p className="text-2xl font-bold text-[#624BFF]">Custom Pricing</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Over 500,000 visits / month</p>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <a href="#" className="bg-[#624BFF] text-white px-4 py-2 rounded-md font-semibold shadow-md transition duration-200
              hover:bg-[#7E6BFF] hover:text-white
              focus:outline focus:outline-2 focus:outline-[#624BFF]">
              Contact Sales
            </a>
          </div>
          <ul className="text-sm mt-6 text-gray-600 dark:text-gray-300 space-y-2">
            <li>✓ A detailed technical Accessibility Report</li>
            <li>✓ Integrable accessibility widget</li>
            <li>✓ Accessibility Statement generator</li>
            <li>✓ Full compliance with all legal accessibility standards</li>
            <li>✓ Eco Scanner reduces your carbon footprint</li>
          </ul>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-20 px-4 bg-gray-100/50 dark:bg-black/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-playfair mb-12 text-center text-gray-900 dark:text-white">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white/80 dark:bg-[#202935] backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Q: What happens if I ignore this?</h3>
            <p className="text-gray-600 dark:text-gray-300">A: You risk major fines, legal trouble, and your website being taken offline.</p>
          </div>
          <div className="bg-white/80 dark:bg-[#202935] backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Q: How does Eco Web Ninja work?</h3>
            <p className="text-gray-600 dark:text-gray-300">A: We scan, fix, and guide you through every step, automatically handling most of the process.</p>
          </div>
          <div className="bg-white/80 dark:bg-[#202935] backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Q: How do I know if I'm compliant?</h3>
            <p className="text-gray-600 dark:text-gray-300">A: Run a free scan—get a clear, instant compliance report, and see your risk level.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Closing CTA Section */}
    <section className="py-20 px-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 dark:from-green-600/20 dark:to-blue-600/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-playfair mb-6 text-gray-900 dark:text-white">
          Don't Wait Until It's Too Late
        </h2>
        <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
          Check Your Website for Free and Get Compliant Before the Deadline.
        </p>
        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white px-12 py-8 text-2xl rounded-full shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
        >
          🔎 Start My Free Scan Now
        </Button>
      </div>
    </section>

    <ThemeToggle />
    <LanguageSwitcher />
  </div>;
};

export default Index;