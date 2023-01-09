import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { GitHubIcon, LinkedInIcon, MailIcon } from '../components/SocialIcons'

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props} target="_blank">
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Resume({ className }: { className?: string }) {
  let resume = [
    {
      company: 'ZUUT.co',
      title: 'Co-founder & CTO',
      logo: '/images/logos/zuut.jpg',
      start: '2021',
      end: 'Present',
    },
    {
      company: 'NuWave Tech',
      title: 'Consultant Software Engineer',
      logo: '/images/logos/nuwave.jpg',
      start: '2021',
      end: 'Present',
    },
    {
      company: 'Grubhub',
      title: 'Senior Cloud Infra Engineer',
      logo: '/images/logos/grbhb_symbol_red.png',
      start: '2018',
      end: '2020',
    },
    {
      company: 'ThoughtWorks',
      title: 'Software Engineer',
      logo: '/images/logos/thoughtworks.jpg',
      start: '2016',
      end: '2018',
    },
  ]

  return (
    <div
      className={clsx(
        className,
        'flex-initial rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40'
      )}
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">History</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" fill />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Role</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.title}
              </dd>
              <dt className="sr-only">Company</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.company}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-500 dark:text-zinc-400"
                aria-label={`${role.start} until ${role.end}`}
              >
                <time dateTime={role.start}>{role.start}</time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end}>{role.end}</time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button
        href="/files/resume.pdf"
        target="_blank"
        variant="secondary"
        className="group mt-6 w-full"
      >
        View CV
      </Button>
    </div>
  )
}

const toolList = [
  {
    image: '/images/logos/cypress.jpg',
    label: 'Cypress',
  },
  {
    image: '/images/logos/docker.webp',
    label: 'Docker',
  },
  {
    image: '/images/logos/firebase.png',
    label: 'Firebase',
  },
  {
    image: '/images/logos/javascript.png',
    label: 'JavaScript',
  },
  {
    image: '/images/logos/jenkins.png',
    label: 'Jenkins',
  },
  {
    image: '/images/logos/jest.svg',
    label: 'Jest',
  },
  {
    image: '/images/logos/vercel.png',
    label: 'Next.js',
  },
  {
    image: '/images/logos/react.png',
    label: 'React',
  },
  {
    image: '/images/logos/redux.png',
    label: 'Redux',
  },
  {
    image: '/images/logos/typescript.png',
    label: 'TypeScript',
  },
  {
    image: '/images/logos/tailwind.svg',
    label: 'Tailwind',
  },
  {
    image: '/images/logos/vite.png',
    label: 'Vite',
  },
]

function Tools() {
  return (
    <div className="mt-16 flex place-content-center justify-center sm:mt-20">
      <div className="xl:space-around grid grid-cols-4 gap-4 sm:gap-14 md:grid-cols-6 xl:flex xl:grid-cols-12 xl:justify-center xl:gap-4">
        {toolList.map((tool, imageIndex) => (
          <div
            key={tool.image}
            className="aspect-square w-16 flex-none rounded-xl rounded-2xl sm:w-20 xl:aspect-[12/9]"
          >
            <div className="relative inset-0 flex h-full w-full place-content-center">
              <Image
                src={tool.image}
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                className="max-w-auto max-h-21 rounded-md object-contain"
                width="100"
                height="100"
              />
            </div>
            <div className="relative flex w-full place-content-center">
              <span className="text-[12px] dark:text-white sm:text-[12px]">
                {tool.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Luke Belliveau - professional software delivery</title>
        <meta
          name="description"
          content="Luke Belliveau is a software delivery consultant specializing in full stack web applications and services.  If you need to get something built, I can get it done."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="flex-column mt-9 flex">
        <div className="flex">
          <div className="w-full lg:w-4/5">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              let&apos;s make stuff
            </h1>

            <div className="mt-6 flex gap-6">
              <SocialLink
                href="https://github.com/lukebelliveau"
                aria-label="Follow on GitHub"
                icon={GitHubIcon}
              />
              <SocialLink
                href="https://www.linkedin.com/in/lukebelliveau/"
                aria-label="Follow on LinkedIn"
                icon={LinkedInIcon}
              />
              <SocialLink
                href="mailto:hi@lukebelliveau.dev"
                aria-label="Email hi@lukebelliveau.dev"
                icon={MailIcon}
              />
            </div>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-200">
              Hi! I&apos;m Luke. I am a software engineer serving as a delivery
              consultant specializing in full stack web applications and
              services.
            </p>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-200">
              With 7 years of experience building systems at enterprise scale,
              I&apos;ve spent the last couple of years working as an independent
              consultant.
            </p>
            <p className="mt-6 text-base font-bold text-zinc-600 dark:text-zinc-200">
              I enable software teams and entrepreneurs to meet their goals in
              designing, delivering, and maintaining software.
            </p>
            <p className="mt-6 text-base  text-zinc-600 dark:text-zinc-200">
              That means working with product teams to break ground on new
              Things, pairing with engineers to solve complex architecture
              problems, and everything in-between.
            </p>
            <p className="mt-6 text-base  text-zinc-600 dark:text-zinc-200">
              Most recently, my focus has been on building web applications with
              unique and challenging UI requirements. I&apos;ve enjoyed handling
              the full development cycle of applications, from pre-inception all
              the way past launch. Although I have lots of experience picking up
              different technologies and codebases, we all have our favorite
              tools. Here are some of mine:
            </p>
          </div>
          <div className="flex flex-col place-content-center">
            <Resume className="ml-4 hidden lg:block" />
          </div>
        </div>
        <Tools />
      </Container>
      <Container className="mt-16 md:mt-28 lg:hidden">
        <div className="mx-auto flex flex max-w-xl place-content-center gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="space-y-10">
            <Resume className="lg:hidden" />
          </div>
        </div>
      </Container>
    </>
  )
}
