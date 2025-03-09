'use client';

import { motion } from 'framer-motion';
import { fadeIn, slideIn } from '@/lib/animations';
import { Card, CardContent } from '@/components/ui/card';
import React, { useRef, useState, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import HeadingSection from '@/components/common/heading-section';

const StartupPage = () => {
  const steps = [
    {
      id: 1,
      title: 'Registration & Onboarding',
      description: `Register and become a verified member of BAIN and provide your investment preferences and areas of interest, so we can tailor opportunities that match your criteria.

As a new investor joining BAIN, you'll be guided through our comprehensive onboarding process. This begins with creating your investor profile where you'll specify your investment focus areas, preferred sectors, and investment capacity. This information helps us match you with startups that align with your specific interests and expertise.

Our verification process ensures that all members of our network meet certain criteria, maintaining the high quality of our investor community. Once verified, you'll gain access to exclusive investor resources, including market insights, investment guides, and networking opportunities with fellow angel investors in the BAIN community.`,
      image: '/investor.png',
    },
    {
      id: 2,
      title: 'Access Exclusive Deal Flow',
      description: `Once registered, you gain immediate access to our curated deal flow of promising startups, complete with comprehensive due diligence reports and investment briefs.

BAIN takes pride in our rigorous startup selection process. Only about 10% of startups that apply to our network make it through our initial screening. This ensures that the opportunities presented to you have already been vetted for viability, innovation potential, and market opportunity.

Each startup in our deal flow comes with detailed documentation, including business plans, financial projections, market analysis, and team credentials. Our due diligence process assesses everything from legal standing to competitive landscape, saving you valuable time in the early evaluation stages. You'll receive regular updates on new opportunities that match your specified investment criteria.`,
      image: '/investor1.png',
    },
    {
      id: 3,
      title: 'Evaluation & Engage',
      description: `Review detailed startup profiles and pitch decks. Attend our investor pitch events and interactive sessions where you can meet startup founders and ask critical questions.

BAIN hosts regular pitch events both online and in-person where selected startups present their business models and growth plans. These events provide a unique opportunity to see multiple investment opportunities in one setting and engage directly with founding teams.

Beyond formal pitches, we facilitate one-on-one meetings between investors and entrepreneurs to explore potential partnerships in greater depth. Our team can help coordinate these meetings and provide guidance on what questions to ask and areas to explore.

We also organize sector-specific roundtables where investors with similar interests can share insights and collectively evaluate opportunities in particular industries or technology areas. This collaborative approach enhances the evaluation process through shared expertise and diverse perspectives.`,
      image: '/investor2.png',
    },
    {
      id: 4,
      title: 'Invest & Manage Your Portfolio',
      description: `Choose the startups that align with your vision. With our portfolio management services, track the performance of your investments and receive ongoing strategic support.

Once you've identified startups you wish to invest in, BAIN facilitates the investment process with standardized documentation and transparent terms. Our investment minimum typically starts at $5,000, allowing for accessible entry points while encouraging meaningful commitment.

After investing, you gain access to our portfolio management platform where you can track key performance indicators, milestone achievements, and financial updates from all your investments in one centralized dashboard.

BAIN encourages active involvement from our investors. You can choose to mentor startups, open doors to your network, or provide strategic guidance in areas of your expertise. This hands-on involvement not only benefits the startups but can significantly impact your investment outcomes.

We provide regular portfolio review sessions where you can discuss your investments with our team, reassess strategies, and decide on follow-on investment opportunities when startups reach new growth stages.`,
      image: '/investor3.png',
    },
    {
      id: 5,
      title: 'Exit & Reap Rewards',
      description: `Our expert team assists in planning exit strategies, ensuring you are well-positioned to maximize returns when it's time to exit your investment.

While angel investing is a long-term commitment, BAIN provides strategic support throughout the entire investment lifecycle, including the critical exit phase. Our team works with both investors and startups to identify optimal exit timing and opportunities.

We assist in navigating acquisition offers, preparing for potential IPOs, or exploring secondary market options for your shares. Our extensive network includes connections to larger venture capital firms, corporate strategic buyers, and other exit partners.

BAIN also provides valuation guidance and negotiation support to help maximize your returns when exit opportunities arise. Our historical data and market insights help inform exit decisions to achieve the best possible outcomes.

For investors interested in reinvesting gains, we offer seamless opportunities to redeploy capital into new promising startups within our network, creating a sustainable cycle of investment and returns within the Nepal startup ecosystem.`,
      image: '/investor3.png',
    },
  ];

  const [activeStep, setActiveStep] = useState(1);
  const [expandedSteps, setExpandedSteps] = useState<Record<number, boolean>>({});
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = 0; i < stepRefs.current.length; i++) {
        const step = stepRefs.current[i];
        if (step) {
          const stepTop = step.offsetTop;
          const stepBottom = stepTop + step.offsetHeight;

          if (scrollPosition >= stepTop && scrollPosition < stepBottom) {
            setActiveStep(i + 1);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToStep = (stepId: number) => {
    const step = stepRefs.current[stepId - 1];
    if (step) {
      step.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleExpand = (stepId: number) => {
    setExpandedSteps((prev) => ({
      ...prev,
      [stepId]: !prev[stepId],
    }));
  };

  const getFirstParagraph = (description: string) => description.split('\n\n')[0];

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center justify-center">
          <ol className="flex items-center space-x-2">
            <li>
              <a href="/" className="text-base font-medium text-gray-900">
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-gray-900 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
                <span className="ml-2 text-base font-medium text-gray-500">Investor Guide</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Header Section */}
        <div className="max-w-xl mx-auto text-center mt-8">
          <motion.div variants={fadeIn}>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
              Investor to Invest in startups
            </h1>
            <p className="text-lg text-gray-600">
              BAIN makes investing in startups simple, giving Angel investors access to promising
              startups and a steady deal-flow.
            </p>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 mt-12 lg:grid-cols-12 lg:gap-x-12 gap-y-8">
          {/* Sidebar */}
          <div className="lg:col-span-2 lg:self-start lg:sticky lg:top-6">
            <ul className="flex flex-col space-y-4">
              {steps.map((step) => (
                <motion.li
                  key={step.id}
                  whileHover={{ x: 4 }}
                  className={`cursor-pointer transition-all duration-200 p-3 rounded-lg ${
                    activeStep === step.id ? 'bg-primary text-white' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => scrollToStep(step.id)}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-bold">{step.id}</span>
                    <span>{step.title}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                ref={(el) => {
                  stepRefs.current[index] = el;
                }}
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mb-16"
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-w-16 aspect-h-9 mb-6">
                      <img
                        src={step.image}
                        alt={`Step ${step.id}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">{step.title}</h2>
                      <div className="prose max-w-none">
                        <p className="text-gray-600">
                          {expandedSteps[step.id]
                            ? step.description
                            : getFirstParagraph(step.description)}
                        </p>
                      </div>
                      <button
                        onClick={() => toggleExpand(step.id)}
                        className="mt-4 text-primary font-semibold flex items-center gap-2"
                      >
                        {expandedSteps[step.id] ? 'Show Less' : 'Read More'}
                        <ChevronDownIcon
                          className={`w-4 h-4 transform transition-transform ${
                            expandedSteps[step.id] ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Social Share Sidebar */}
          <div className="lg:col-span-2 lg:self-start lg:sticky lg:top-6">
            <ul className="flex lg:flex-col items-center space-y-4">
              {/* Add your social share buttons here */}
              {/* Example for one button */}
              <li>
                <button className="inline-flex items-center justify-center w-10 h-10 text-gray-900 transition-all duration-200 border border-gray-200 rounded-full hover:bg-gray-900 hover:text-white">
                  <span className="sr-only">Share</span>
                  {/* Add icon here */}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupPage;
