import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/CountdownTimer";
import { ConsequenceCard } from "@/components/ConsequenceCard";
import { TriangleAlert, Timer, Users, Info, Clock, CheckCircle, Search } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { PricingToggle } from "@/components/PricingToggle";
import { calculateTimeUntilDeadline, DEADLINE_DATE } from "@/utils/dateUtils";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { getPrice } from "@/constants/pricing";

const Index = () => {
  const timeUntilDeadline = calculateTimeUntilDeadline();
  const { t, i18n } = useTranslation();
  const [isYearly, setIsYearly] = useState(true);
  const isGerman = i18n.language === 'de';

  // Force yearly pricing for German language
  useEffect(() => {
    if (isGerman) {
      setIsYearly(true);
    }
  }, [isGerman]);

  const renderPricing = (plan: 'pro' | 'proPlus' | 'ultimate') => {
    const actualPrice = getPrice(plan, isYearly);
    const mockPrice = getPrice(plan, isYearly, true);
    const periodKey = isYearly ? 'year' : 'month';

    return (
      <div className="w-max mx-auto text-center space-y-1">
        <p className="text-2xl text-gray-500 text-center">
          <span className="line-through">{mockPrice}</span>
          <span className="text-base">{" "}{t(`pricing.period.${periodKey}`)}</span>
        </p>
        <p className="text-3xl font-bold text-[#624BFF]">
          {actualPrice}
          <span className="text-base font-normal text-gray-500 dark:text-gray-400">{" "}{t(`pricing.period.${periodKey}`)}</span>
        </p>
      </div>
    );
  };

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
          {t('consequences.title')}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ConsequenceCard
            icon={<TriangleAlert />}
            title={t('consequences.cards.fines.title')}
            description={t('consequences.cards.fines.description')}
          />
          <ConsequenceCard
            icon={<Timer />}
            title={t('consequences.cards.shutdown.title')}
            description={t('consequences.cards.shutdown.description')}
          />
          <ConsequenceCard
            icon={<Users />}
            title={t('consequences.cards.revenue.title')}
            description={t('consequences.cards.revenue.description')}
          />
          <ConsequenceCard
            icon={<Info />}
            title={t('consequences.cards.legal.title')}
            description={t('consequences.cards.legal.description')}
          />
        </div>
      </div>
    </section>

    {/* Urgency Section */}
    <section className="py-20 px-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-playfair mb-8 text-gray-900 dark:text-white">
          {t('urgency.title', {
            days: timeUntilDeadline.days,
            deadline: `${new Date(DEADLINE_DATE + 'T00:00:00Z').toLocaleDateString('en-US', {
              month: 'long',
              timeZone: 'UTC'
            })} 28th`
          })}
        </h2>
        <p className="text-xl mb-8 text-gray-800 dark:text-gray-200 max-w-3xl mx-auto font-medium">
          {t('urgency.description')}
        </p>
        <Button
          size="lg"
          className="bg-red-600 hover:bg-red-700 text-white px-12 py-8 text-2xl rounded-full shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
        >
          {t('urgency.cta')}
        </Button>
      </div>
    </section>

    {/* Solution Section */}
    <section className="pt-20 pb-12 px-4 bg-gradient-to-r from-emerald-50 to-sky-50 dark:from-green-600/20 dark:to-blue-600/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-playfair mb-12 text-center text-gray-900 dark:text-white">
          {t('solution.title')}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(t('solution.features', { returnObjects: true })).map(([key, feature]: [string, any]) => (
            <div key={key} className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white px-12 py-8 text-2xl rounded-full shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
          >
            {t('solution.cta')}
          </Button>
        </div>
      </div>
    </section>

    {/* Timeline Section */}
    <section className="pt-20 pb-12 px-4 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-[#111b27] dark:to-[#1a2436]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-playfair mb-8 text-gray-900 dark:text-white max-w-4xl mx-auto">
          {t('timeline.title')}
        </h2>
        <p className="text-xl mb-12 text-red-700 dark:text-red-400 font-semibold">
          {t('timeline.subtitle')}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(t('timeline.steps', { returnObjects: true })).map(([key, step]: [string, any]) => (
            <div key={key} className="bg-white dark:bg-[#202935] rounded-xl p-8 border border-gray-200 dark:border-[#2C3E50]/50 shadow-lg hover:shadow-xl">
              {key === 'audit' && <Clock className="mx-auto text-blue-700 dark:text-blue-400 mb-4" size={48} />}
              {key === 'remediation' && <CheckCircle className="mx-auto text-green-700 dark:text-green-400 mb-4" size={48} />}
              {key === 'testing' && <Search className="mx-auto text-purple-700 dark:text-purple-400 mb-4" size={48} />}
              {key === 'documentation' && <Info className="mx-auto text-amber-700 dark:text-yellow-400 mb-4" size={48} />}
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-400/80">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-xl text-gray-700 dark:text-gray-400/80 font-medium">
          {t('timeline.conclusion')}
        </p>
      </div>
    </section>

    {/* Pricing Section */}
    <section role="region" id="license" aria-labelledby="pricing-heading" className="pt-8 pb-16 px-4 md:px-12 lg:px-12 xl:px-24 bg-white/50 dark:bg-[#1A1F2C]">
      <div className="text-center pb-10">
        <h2 id="pricing-heading" className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t('pricing.title')}</h2>
        <hr className="border border-[#624BFF] w-60 mx-auto mb-4" />
        {!isGerman && <PricingToggle isYearly={isYearly} onToggle={setIsYearly} />}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* Pro */}
        <div className="bg-white dark:bg-[#202935] p-6 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 flex flex-col hover:border-[#624BFF]">
          <div className="flex flex-col items-center text-center flex-grow">
            <i className="fa-solid fa-rocket text-3xl text-[#624BFF] mb-4"></i>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t('pricing.plans.pro.name')}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">{t('pricing.plans.pro.description')}</p>
            {renderPricing('pro')}
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{t('pricing.plans.pro.limit')}</p>
          </div>
          <div className="mt-8 flex justify-center">
            <a href="signup.html" className="bg-[#624BFF] text-white px-4 py-2 rounded-md font-semibold shadow-md transition duration-200 hover:bg-[#7E6BFF] hover:text-white focus:outline focus:outline-2 focus:outline-[#624BFF]">
              {t('pricing.plans.pro.cta')}
            </a>
          </div>
          <ul className="text-sm mt-6 text-gray-600 dark:text-gray-300 space-y-2">
            {Object.values(t('pricing.features', { returnObjects: true })).map((feature: string, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Pro Plus */}
        <div className="bg-white dark:bg-[#202935] p-6 rounded-lg shadow-xl border-2 border-[#624BFF] flex flex-col relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#624BFF] text-white px-6 py-1 rounded-full text-sm whitespace-nowrap">
            {t('pricing.plans.proPlus.tag')}
          </div>
          <div className="flex flex-col items-center text-center flex-grow">
            <i className="fa-solid fa-shuttle-space text-3xl text-[#624BFF] mb-4"></i>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t('pricing.plans.proPlus.name')}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">{t('pricing.plans.proPlus.description')}</p>
            {renderPricing('proPlus')}
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{t('pricing.plans.proPlus.limit')}</p>
          </div>
          <div className="mt-8 flex justify-center">
            <a href="signup.html" className="bg-[#624BFF] text-white px-4 py-2 rounded-md font-semibold shadow-md transition duration-200 hover:bg-[#7E6BFF] hover:text-white focus:outline focus:outline-2 focus:outline-[#624BFF]">
              {t('pricing.plans.proPlus.cta')}
            </a>
          </div>
          <ul className="text-sm mt-6 text-gray-600 dark:text-gray-300 space-y-2">
            {Object.values(t('pricing.features', { returnObjects: true })).map((feature: string, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Ultimate */}
        <div className="bg-white dark:bg-[#202935] p-6 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 flex flex-col hover:border-[#624BFF]">
          <div className="flex flex-col items-center text-center flex-grow">
            <i className="fa-solid fa-shuttle-space text-3xl text-[#624BFF] mb-4"></i>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t('pricing.plans.ultimate.name')}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">{t('pricing.plans.ultimate.description')}</p>
            {renderPricing('ultimate')}
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{t('pricing.plans.ultimate.limit')}</p>
          </div>
          <div className="mt-8 flex justify-center">
            <a href="signup.html" className="bg-[#624BFF] text-white px-4 py-2 rounded-md font-semibold shadow-md transition duration-200 hover:bg-[#7E6BFF] hover:text-white focus:outline focus:outline-2 focus:outline-[#624BFF]">
              {t('pricing.plans.ultimate.cta')}
            </a>
          </div>
          <ul className="text-sm mt-6 text-gray-600 dark:text-gray-300 space-y-2">
            {Object.values(t('pricing.features', { returnObjects: true })).map((feature: string, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Enterprise */}
        <div className="bg-white dark:bg-[#202935] p-6 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 flex flex-col hover:border-[#624BFF]">
          <div className="flex flex-col items-center text-center flex-grow">
            <i className="fa-solid fa-satellite-dish text-3xl text-[#624BFF] mb-4"></i>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t('pricing.plans.enterprise.name')}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">{t('pricing.plans.enterprise.description')}</p>
            <div className="mt-8">
              <p className="text-2xl font-bold text-[#624BFF]">{t('pricing.plans.enterprise.price')}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{t('pricing.plans.enterprise.limit')}</p>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <a href="#" className="bg-[#624BFF] text-white px-4 py-2 rounded-md font-semibold shadow-md transition duration-200 hover:bg-[#7E6BFF] hover:text-white focus:outline focus:outline-2 focus:outline-[#624BFF]">
              {t('pricing.plans.enterprise.cta')}
            </a>
          </div>
          <ul className="text-sm mt-6 text-gray-600 dark:text-gray-300 space-y-2">
            {Object.values(t('pricing.features', { returnObjects: true })).map((feature: string, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-20 px-4 bg-gray-100/50 dark:bg-black/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-playfair mb-12 text-center text-gray-900 dark:text-white">{t('faq.title')}</h2>
        <div className="space-y-6">
          <div className="bg-white/80 dark:bg-[#202935] backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{t('faq.questions.ignore.question')}</h3>
            <p className="text-gray-600 dark:text-gray-300">{t('faq.questions.ignore.answer')}</p>
          </div>
          <div className="bg-white/80 dark:bg-[#202935] backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{t('faq.questions.howItWorks.question')}</h3>
            <p className="text-gray-600 dark:text-gray-300">{t('faq.questions.howItWorks.answer')}</p>
          </div>
          <div className="bg-white/80 dark:bg-[#202935] backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{t('faq.questions.compliance.question')}</h3>
            <p className="text-gray-600 dark:text-gray-300">{t('faq.questions.compliance.answer')}</p>
          </div>
        </div>
      </div>
    </section>

    {/* Closing CTA Section */}
    <section className="py-20 px-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 dark:from-green-600/20 dark:to-blue-600/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-playfair mb-6 text-gray-900 dark:text-white">
          {t('closingCta.title')}
        </h2>
        <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
          {t('closingCta.description')}
        </p>
        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white px-12 py-8 text-2xl rounded-full shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
        >
          {t('closingCta.cta')}
        </Button>
      </div>
    </section>

    <ThemeToggle />
    <LanguageSwitcher />
  </div>;
};

export default Index;