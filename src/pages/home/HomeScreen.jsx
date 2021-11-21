import { CheckIcon } from '@heroicons/react/outline'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline'
import logo from "../../assets/logo.png";
import job from "../../assets/job.jpg"

function HomeScreen() {
  const type = [
    {
      name: 'Company',
      href: '/co/login',
      priceMonthly: 49,
      description: 'For recruiter who are looking to open new opportunity or find the right people to scale up their business',
      features: [
        'Track recruitment process',
        'Customized recruitment steps provided for personal assessment, HR interview, etc.',
        'Hold a live workshop',
      ],
    },
    {
      name: 'Job Seekers',
      href: '/login',
      priceMonthly: 79,
      description: 'For people that wanted to find new opportunity and level up their knowledge from various industry knowledge',
      features: [
        'Job opportunity recomendation',
        'Easy job application proccess in one app',
        'Professional CV maker',
      ],
    },
  ]

  return (
    <>
      <div className="relative bg-customwhite">
        <Popover className="relative bg-customwhite shadow">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                  <div className="flex justify-start lg:w-0 lg:flex-1">
                    <a href="/">
                      <span className="sr-only">Workflow</span>
                      <img
                        className="h-8 w-auto sm:h-10"
                        src={logo}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="-mr-2 -my-2 md:hidden">
                    <Popover.Button className="bg-customwhite rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                  <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                    <a href="/login" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                      Log in
                    </a>
                    <a
                      href="/signin"
                      className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary"
                    >
                      Sign in
                    </a>
                  </div>
                </div>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  static
                  className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
                >
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                    <div className="pt-5 pb-6 px-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <img
                            className="h-8 w-auto"
                            src={logo}
                            alt="Workflow"
                          />
                        </div>
                        <div className="-mr-2">
                          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Close menu</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                    </div>
                    <div className="py-6 px-5 space-y-6">
                      <div>
                        <a
                          href="/login"
                          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                          Login
                        </a>
                        <p className="mt-6 text-center text-base font-medium text-gray-500">
                          Dont have account?&nbsp;
                          <a href="/signin" className="text-primary">
                            Sign in
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        <main className="lg:relative">
          <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
            <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block text-primary ">Findind jobs</span>{' '}
                <span className="block text-third ">has never been easier</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                We help you meet your job by simplifying the process and help you level up your knowledge
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#category"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src={job}
              alt=""
            />
          </div>
        </main>
      </div>
      <div className="bg-fourth" id="category">
        <div className="pt-12 sm:pt-16 lg:pt-24">
          <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
              <p className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                The right needs for you
              </p>
              <p className="text-xl text-gray-300">
                Choose whatever you need, for your business or career
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
          <div className="relative">
            <div className="absolute inset-0 h-3/4 bg-fourth" />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
                {type.map((tier) => (
                  <div key={tier.name} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                      <div className="mt-4 flex items-baseline text-6xl font-extrabold text-primary">
                        {tier.name}
                      </div>
                      <p className="mt-5 text-lg text-gray-500">{tier.description}</p>
                    </div>
                    <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                      <ul className="space-y-4">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon className="h-6 w-6 text-green-500" aria-hidden="true" />
                            </div>
                            <p className="ml-3 text-base text-gray-700">{feature}</p>
                          </li>
                        ))}
                      </ul>
                      <div className="rounded-md shadow">
                        <a
                          href={tier.href}
                          className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-fourth"
                          aria-describedby="tier-standard"
                        >
                          Get started
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeScreen;