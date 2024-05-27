"use client";
import { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Marquee from "react-fast-marquee";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from 'next/link'

const finance = [
  {
    name: "Unsecured Debt Products",
    description: "Get a better understanding of your traffic",
    href: "/financial-instruments/unsecured-debt-products", 
    icon: ChartPieIcon,
  },
  {
    name: "Secured Funding Debt",
    description: "Speak directly to your customers",
    href: "/financial-instruments/secured-funding-funds",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Loan For Professional",
    description: "Your customers’ data will be safe and secure",
    href: "/financial-instruments/loan-for-professionals",
    icon: FingerPrintIcon,
  },
  {
    name: "Corporate Finance",
    description: "Connect with third-party tools",
    href: "/financial-instruments/corporate-finance",
    icon: SquaresPlusIcon,
  },
  {
    name: "Structured Debt Financing",
    description: "Build strategic funnels that will convert",
    href: "/financial-instruments/structured-debt-financing",
    icon: ArrowPathIcon,
  },
  {
    name: "MSMEs Loan",
    description: "Speak directly to your customers",
    href: "/financial-instruments/msme-loan",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Private Equity",
    description: "Your customers’ data will be safe and secure",
    href: "/financial-instruments/private-equity",
    icon: FingerPrintIcon,
  },
  {
    name: "Private Debt",
    description: "Connect with third-party tools",
    href: "/financial-instruments/private-debt",
    icon: SquaresPlusIcon,
  },
  {
    name: "Project Report for Funding",
    description: "Build strategic funnels that will convert",
    href: "/financial-instruments/project-report-for-funding",
    icon: ArrowPathIcon,
  },
  {
    name: "View All Products",
    description: "Build strategic funnels that will convert",
    href: "/financial-instruments",
    icon: ArrowPathIcon,
  },
];

const casestudies = [
  {
    name: "Project Finance ",
    description: "Get a better understanding of your traffic",
    href: "/case-studies/project-finance-case-study",
  },
  {
    name: "Debt Syndication Process",
    description: "Speak directly to your customers",
    href: "/case-studies/debt-syndication-process",
  },
  {
    name: " Process of Trade Financing",
    description: "Your customers’ data will be safe and secure",
    href: "/case-studies/process-of-trading-finance",
  },
  {
    name: "Bill Discounting Facility",
    description: "Connect with third-party tools",
    href: "/case-studies/process-of-bill-discounting",
  },
  {
    name: "Foreign Currency ",
    description: "Get a better understanding of your traffic",
    href: "/case-studies/foreign-currency-funding-process",
  },
  {
    name: "Factoring Fund Execution",
    description: "Speak directly to your customers",
    href: "/case-studies/factoring-funding-solution",
  },
  {
    name: "Sugar Pledge Loan ",
    description: "Your customers’ data will be safe and secure",
    href: "/case-studies/process-of-sugar-pledge-loan",
  },
  {
    name: "LC Discounting",
    description: "Connect with third-party tools",
    href: "/case-studies/letter-of-credit-discounting-process",
  },
  {
    name: "Bank Guarantee  ",
    description: "Build strategic funnels that will convert",
    href: "/case-studies/bank-guarantee-process",
  },
  {
    name: "Unsecured Funding ",
    description: "Build strategic funnels that will convert",
    href: "/case-studies/unsecured-funding-process",
  },
  {
    name: "Machinery Loan",
    description: "Connect with third-party tools",
    href: "/case-studies/execution-process-to-get-a-machinery-loan",
  },
  {
    name: "CGTMSE Loan ",
    description: "Build strategic funnels that will convert",
    href: "/case-studies/cgtmse-loan-process",
  },
  {
    name: "Working Capital Loan",
    description: "Build strategic funnels that will convert",
    href: "/case-studies/working-capital-financing-solution",
  },
  {
    name: "LRD Loan Process",
    description: "Build strategic funnels that will convert",
    href: "/case-studies/lrd-funding-process",
  },
  {
    name: "Loan Against Property ",
    description: "Build strategic funnels that will convert",
    href: "/case-studies/loan-against-property-process",
  },
];

const resources = [
  {
    name: "Blog",
    description: "Get a better understanding of your traffic",
    href: "/blog",
    
  },
  {
    name: "Company Profile",
    description: "Get a better understanding of your traffic",
    href: "/company-profile-download",
    
  },
  {
    name: "Career",
    description: "Get a better understanding of your traffic",
    href: "/careers",
    
  },
  
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition =
        window === undefined
          ? null
          : (window.scrollY as number | null | undefined | any);
      setScrollPosition(currentPosition);

      // Change the background color when scroll position reaches 250px
      if (currentPosition > 150) {
        setBackgroundColor("backdrop-blur-[80px]");
      } else {
        setBackgroundColor("bg-transparent");
      }
    };

    // Attach the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const [servicesOpen, setServicesOpen] = useState(false);
  const [industryOpen, setIndustryOpen] = useState(false);
  const [insightsOpen, setInsightsOpen] = useState(false);

  // Function to handle hover event and open the corresponding dropdown
  const handleHover = (menuType: string, isOpen: boolean) => {
    switch (menuType) {
      case "Financial Instruments":
        setServicesOpen(isOpen);
        setIndustryOpen(false);
        setInsightsOpen(false);
        break;
      case "Case Studies":
        setIndustryOpen(isOpen);
        setServicesOpen(false);
        setInsightsOpen(false);
        break;
      case "resources":
        setInsightsOpen(isOpen);
        setServicesOpen(false);
        setIndustryOpen(false);
        break;
      default:
        setServicesOpen(false);
        setIndustryOpen(false);
        setInsightsOpen(false);
        break;
    }
  };

  return (
    <header className={`${backgroundColor}  w-[100vw] text-black z-50`}>
      <nav
        className="mx-auto flex md:max-w-7xl items-center justify-between p-3 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link className="no-underline" href="/">
            <div className="flex flex-row gap-[0.2rem]">
              <h1 className="text-black text-[40px] font-bold ">ShiGora</h1>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
        <Link
            href="/"
            className="text-md text-black font-semibold leading-6 no-underline"
          >
            Home
          </Link>
          <Popover className="relative">
            <Popover.Button
              onMouseEnter={() => handleHover("services", true)}
              onMouseLeave={() => handleHover("services", false)}
              className="flex items-center gap-x-1 text-md font-semibold leading-6  hover:text-gradient outline-none"
            >
              Financial Instruments
              <ChevronDownIcon
                className="h-5 w-5 flex-none"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute bg-gray-50  w-[250px] font-semibold text-[#7c7c7c] z-10">
                
                <div className="">
                  {finance.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 border-y-[1px] rounded-sm  text-sm leading-6 hover:bg-gray-300"
                    >
                      <div className="flex-auto px-2">
                        <Link
                          href={item.href}
                          className="block no-underline text-gray-400"
                        >
                          {item.name}
                          <span className="absolute inset-0 " />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Popover className="relative">
            <Popover.Button
              onMouseEnter={() => handleHover("services", true)}
              onMouseLeave={() => handleHover("services", false)}
              className="flex items-center gap-x-1 text-md font-semibold leading-6   hover:text-gradient outline-none"
            >
              Case Studies
              <ChevronDownIcon
                className="h-5 w-5 flex-none"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute bg-gray-50 font-semibold w-[220px] text-[#7c7c7c] z-10">
                
                <div className="">
                  {casestudies.map((item) => (
                    <div
                      key={item.name}
                      className="group  relative flex items-center gap-x-6 rounded-sm border-y-[1px] text-sm  hover:bg-gray-300"
                    >
                      <div className="flex-auto px-2">
                        <Link
                          href={item.href}
                          className="  no-underline text-gray-400"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          
          <a href="/contact-us" className="text-md font-semibold leading-6 text-black no-underline">
            Contact Us
          </a>
          <Popover className="relative">
            <Popover.Button
              onMouseEnter={() => handleHover("services", true)}
              onMouseLeave={() => handleHover("services", false)}
              className="flex items-center gap-x-1 text-md font-semibold leading-6   hover:text-gradient outline-none"
            >
              Resources
              <ChevronDownIcon
                className="h-5 w-5 flex-none"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute bg-gray-50 font-semibold w-[200px] text-[#7c7c7c] z-10">
                
                <div className="">
                  {resources.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-sm border-b-[1px] text-sm  hover:bg-gray-300"
                    >
                      <div className="flex-auto px-2">
                        <Link
                          href={item.href}
                          className=" text-gray-400 no-underline "
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
      </nav>
      <div className="px-2">
        <Marquee pauseOnHover>
          <p className='text-[#5E5E5E] text-[17px] '>
              Terkar Capital is a Registered Brand of <b>Terkar Global Financial Development Private Limited.</b>
          </p>
        </Marquee>
      </div>
      <Dialog
        as="div"
        className="lg:hidden bg-[#09160E]"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10 " />
        <Dialog.Panel className="fixed inset-y-0 right-0 w-full overflow-y-auto  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-[#fff]  z-[60]">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 font-bold text-[28px]">
              {/* <span className="sr-only">Terkar</span> */}
              Shigora
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font- leading-7  hover:bg-gray-200">
                        Financial Instruments
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {finance.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm f leading-7 hover:bg-gray-200"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base  leading-7 hover:bg-gray-200">
                        Case Studies
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {casestudies.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm  leading-7  hover:bg-gray-200"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base  leading-7  hover:bg-gray-200">
                        Insights
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {resources.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm  leading-7  hover:bg-gray-200"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  href="/company-profile-download"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7  hover:bg-gray-200"
                >
                  Company
                </Link>
                <Link
                  href="/contact-us"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7  hover:bg-gray-200"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
