import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon, MailIcon } from '@/components/SocialIcons'

import reactLogo from '@/images/photos/react.png'
import reduxLogo from '@/images/photos/redux.png'
import gitLogo from '@/images/photos/git.png'
import tsLogo from '@/images/photos/typescript.png'
import jsLogo from '@/images/photos/javascript.png'
import viteLogo from '@/images/photos/vite.png'
import jestLogo from '@/images/photos/jest.svg'
import nextLogo from '@/images/photos/next.png'
import cypressLogo from '@/images/photos/cypress.jpg'
import tailwindLogo from '@/images/photos/tailwind.svg'
import jenkinsLogo from '@/images/photos/jenkins.png'
import vercelLogo from '@/images/photos/vercel.png'
import dockerLogo from '@/images/photos/docker.webp'
import firebaseLogo from '@/images/photos/firebase.png'

import zuutLogo from '@/images/photos/zuut.jpg'
import nuwaveLogo from '@/images/photos/nuwave.jpg'
import grubhubLogo from '@/images/photos/grbhb_symbol_red.png'
import thoughtworksLogo from '@/images/photos/thoughtworks.jpg'
import ibmLogo from '@/images/photos/ibm.png'

import { formatDate } from '@/lib/formatDate'
import next from 'next'

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

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props} target="_blank">
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Resume() {
  let resume = [
    {
      company: 'ZUUT.co',
      title: 'Co-founder & CTO',
      logo: zuutLogo,
      start: '2021',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'NuWave Technologies',
      title: 'Software Engineer Consultant',
      logo: nuwaveLogo,
      start: '2021',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Grubhub',
      title: 'Senior Cloud Infra Engineer',
      logo: grubhubLogo,
      start: '2018',
      end: '2020',
    },
    {
      company: 'ThoughtWorks',
      title: 'Senior Software Engineer',
      logo: thoughtworksLogo,
      start: '2016',
      end: '2018',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

const toolList = [
  {
    image: vercelLogo,
    label: 'Next.js \\\\ Vercel',
  },
  {
    image: dockerLogo,
    label: 'Docker',
  },

  {
    image: tsLogo,
    label: 'TypeScript',
  },
  {
    image: jsLogo,
    label: 'JavaScript',
  },
  {
    image: viteLogo,
    label: 'Vite',
  },
  {
    image: firebaseLogo,
    label: 'Firebase',
  },
  {
    image: tailwindLogo,
    label: 'Tailwind CSS \\\\ UI',
  },
  {
    image: jenkinsLogo,
    label: 'Jenkins',
  },
  {
    image: reactLogo,
    label: 'React',
  },
  {
    image: reduxLogo,
    label: 'Redux',
  },
  {
    image: jestLogo,
    label: 'Jest',
  },
  {
    image: cypressLogo,
    label: 'Cypress',
  },
]

function Tools() {
  return (
    <div className="mt-16 flex place-content-center sm:mt-20">
      <div className="grid grid-cols-4 gap-10 md:grid-cols-4 2xl:grid-cols-6">
        {toolList.map((tool, imageIndex) => (
          <div
            key={tool.image.src}
            className="aspect-square w-16 flex-none rounded-xl sm:w-40 sm:rounded-2xl"
          >
            <div className="relative inset-0 flex h-full w-full place-content-center">
              <Image
                src={tool.image}
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                className="max-w-auto  max-h-21"
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
          content="I'm Luke Belliveau, a software delivery consultant splitting time between Boston and Hungary. I am a full stack developer with 7 years of experience taking software products from inception to launch and beyond. If you need to get something built, I can get it done."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            let&apos;s make stuff.
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
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Hi! I&apos;m Luke. I am a full stack software engineer currently
            serving as a software delivery consultant.
          </p>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            With 7 years of experience writing code up and down the stack,
            I&apos;ve spent the last couple of years working as an independent
            consultant.
          </p>
          <p className="mt-6 text-base font-bold text-zinc-600 dark:text-zinc-400">
            I enable entrepreneurs & software teams to achieve their goals in
            designing and delivering software.
          </p>
          <p className="mt-6 text-base  text-zinc-600 dark:text-zinc-400">
            Most recently, my focus has been on building web applications with
            complex UI requirements. I&apos;ve enjoyed handling the full
            development cycle of applications, from pre-inception all the way
            past launch. Although I have lots of experience picking up different
            technologies and codebases, everybody has their favorite tools. Here
            are some of my favorites:
          </p>
        </div>
        <Tools />
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
