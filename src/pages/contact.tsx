import Head from 'next/head'
import Image from 'next/image'
import { Container } from '../components/Container'
import { useFormspark } from '@formspark/use-formspark'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import { GitHubIcon, LinkedInIcon, MailIcon } from '../components/SocialIcons'
import clsx from 'clsx'
import Link from 'next/link'

export function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <Link
      href={href}
      className={clsx(
        className,
        'group flex text-sm font-medium text-zinc-800 transition hover:text-orange-500 dark:text-zinc-200 dark:hover:text-orange-500'
      )}
      target="_blank"
    >
      <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-orange-500" />
      <span className="ml-1 hidden sm:block">{children}</span>
    </Link>
  )
}

const showToast = () =>
  toast(`Thanks for the shout, I'll get back to you soon!`)

export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm()

  const [submit, submitting] = useFormspark({
    formId: 'ow7HV4J2',
  })

  const onSubmit = async (data) => {
    await submit({ data })
    showToast()
    reset()
  }

  return (
    <>
      <Head>
        <title>About - Luke Belliveau</title>
        <meta
          name="description"
          content="Contact Luke to get full stack web applications built. Luke Belliveau is a software delivery consultant specializing in full stack web applications and services."
        />
      </Head>
      <Container className="mt-16 sm:mt-20">
        <div className="relative bg-white dark:bg-inherit">
          <div className="lg:absolute lg:inset-0">
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <Image
                className="h-56 w-full rounded-2xl object-cover lg:absolute lg:h-full "
                src={'/images/iceland.jpeg'}
                fill
                aria-label="Luke in Iceland, 2018"
                alt="Luke in Iceland, 2018"
              />
            </div>
          </div>
          <div className="relative rounded-2xl bg-black/[.70] py-4 px-6 sm:py-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:bg-transparent lg:px-0 lg:py-8">
            <div className="lg:pr-8">
              <div className="mx-auto max-w-md py-8 sm:max-w-lg lg:mx-0">
                <h2 className="text-4xl font-bold tracking-tight text-zinc-100 dark:text-zinc-100 sm:text-5xl lg:text-inherit">
                  getting Things done
                </h2>
                <p className="mt-4 text-lg text-zinc-200 dark:text-zinc-200 sm:mt-3 lg:text-inherit">
                  I&apos;m currently taking contract work, and open to a part or
                  full-time role. I would love to hear about your software
                  delivery needs. Shoot me a message!
                </p>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                >
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-zinc-200 dark:text-zinc-200 lg:text-gray-700"
                    >
                      First name *
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        {...register('firstName')}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-zinc-200 dark:text-zinc-200 lg:text-gray-700 "
                    >
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        {...register('lastName')}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-zinc-200 dark:text-zinc-200 lg:text-gray-700"
                    >
                      Email *
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        required
                        {...register('email')}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-zinc-200 dark:text-zinc-200 lg:text-gray-700"
                    >
                      Company
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="company"
                        id="company"
                        autoComplete="organization"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        {...register('company')}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-zinc-200 dark:text-zinc-200 lg:text-gray-700"
                      >
                        Phone
                      </label>
                    </div>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        aria-describedby="phone-description"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        {...register('phone')}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label
                        htmlFor="how-can-we-help"
                        className="block text-sm font-medium text-zinc-200 dark:text-zinc-200 lg:text-gray-700"
                      >
                        What can I do for you?
                      </label>
                    </div>
                    <div className="mt-1">
                      <textarea
                        id="how-can-we-help"
                        name="how-can-we-help"
                        aria-describedby="how-can-we-help-description"
                        rows={4}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        defaultValue={''}
                        {...register('message')}
                      />
                    </div>
                  </div>
                  <fieldset className="sm:col-span-2">
                    <legend className="block text-sm font-medium text-zinc-200 dark:text-zinc-200 lg:text-gray-700">
                      Expected budget
                    </legend>
                    <div className="mt-4 grid grid-cols-1 gap-y-4">
                      <div className="flex items-center">
                        <input
                          id="budget-under-5k"
                          name="budget"
                          defaultValue="under_5k"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          {...register('budget_under_5k')}
                        />
                        <label htmlFor="budget-under-5k" className="ml-3">
                          <span className="block text-sm text-zinc-200 dark:text-zinc-200 lg:text-gray-700">
                            Less than $5K
                          </span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="budget-5k-20k"
                          name="budget"
                          defaultValue="5k-20k"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          {...register('budget_5k-20k')}
                        />
                        <label htmlFor="budget-5k-20k" className="ml-3">
                          <span className="block text-sm text-zinc-200 dark:text-zinc-200 lg:text-gray-700">
                            $5K – $20K
                          </span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="budget-20k-100k"
                          name="budget"
                          defaultValue="20k-100k"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          {...register('budget_20k-100k')}
                        />
                        <label htmlFor="budget-20k-100k" className="ml-3">
                          <span className="block text-sm text-zinc-200 dark:text-zinc-200 lg:text-gray-700">
                            $20K – $100K
                          </span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="budget-over-100k"
                          name="budget"
                          defaultValue="over_100k"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          {...register('budget_over_100k')}
                        />
                        <label htmlFor="budget-over-100k" className="ml-3">
                          <span className="block text-sm text-zinc-200 dark:text-zinc-200 lg:text-gray-700">
                            $100K+
                          </span>
                        </label>
                      </div>
                    </div>
                  </fieldset>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="how-did-you-hear-about-us"
                      className="block text-sm font-medium text-zinc-200 dark:text-zinc-200 lg:text-gray-700"
                    >
                      How did you find me :)?
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="how-did-you-hear-about-us"
                        id="how-did-you-hear-about-us"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="text-right sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-orange-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex w-full justify-around lg:justify-start">
            <SocialLink
              href="https://github.com/lukebelliveau"
              icon={GitHubIcon}
              className="mt-4"
            >
              GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/lukebelliveau/"
              icon={LinkedInIcon}
              className="mt-4 pl-4"
            >
              LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:hi@lukebelliveau.dev"
              icon={MailIcon}
              className="mt-4 pl-4"
            >
              hi@lukebelliveau.dev
            </SocialLink>
          </div>
        </div>
      </Container>
      <Toaster position="bottom-left" />
    </>
  )
}
