import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

import { Container } from '../components/Container'
import { GitHubIcon, LinkedInIcon, MailIcon } from '../components/SocialIcons'
import { Resume } from '../components/resume/Resume'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props} target="_blank">
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
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
    <div className="mt-12 flex place-content-center justify-center sm:mt-8">
      <div className="xl:space-around grid grid-cols-4 gap-4 sm:gap-14 md:grid-cols-6 xl:flex xl:grid-cols-12 xl:justify-center xl:gap-3">
        {toolList.map((tool, imageIndex) => (
          <div
            key={tool.image}
            className="aspect-square w-16 flex-none rounded-xl rounded-2xl sm:w-20 xl:aspect-[12/9]"
          >
            <div className="relative inset-0 flex h-full w-full place-content-center">
              <Image
                src={tool.image}
                alt={`Logo for ${tool.label}`}
                aria-label={`Logo for ${tool.label}`}
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
      <Container className="flex-column space-between mt-9 flex">
        <div className="flex">
          <div className="w-full basis-full lg:basis-1/2 lg:basis-7/12 xl:basis-9/12">
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
              Hi! I&apos;m Luke. I am an engineer & software delivery consultant
              specializing in full stack web applications and services.
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
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-200">
              Most recently, my focus has been on building web applications with
              unique and challenging UI requirements. I&apos;ve enjoyed handling
              the full development cycle of applications, from pre-inception all
              the way past launch. Although I have lots of experience picking up
              different technologies and codebases, we all have our favorite
              tools. Here are some of mine:
            </p>
          </div>
          <div className="mt-32 hidden w-full basis-1/2 flex-col place-content-center lg:block lg:basis-6/12 xl:basis-5/12 2xl:basis-4/12">
            <Resume className="ml-4 block" />
          </div>
        </div>
        <Tools />
      </Container>
      <Container className="mt-12 md:mt-16 lg:hidden">
        <div className="mx-auto flex max-w-xl place-content-center gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="space-y-10">
            <Resume className="lg:hidden" />
          </div>
        </div>
      </Container>
      <Container className="flex-column mt-8 flex lg:mt-16">
        <div className="mx-auto flex max-w-xl place-content-center gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="">
            <Testimonials />
          </div>
        </div>
        <a rel="me" href="https://hachyderm.io/@luuuuuuukee" className="hidden">
          Mastodon
        </a>
      </Container>
    </>
  )
}

const Testimonials = () => {
  return (
    <>
      <h2 className="text-center text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl lg:text-left">
        Words from collaborators
      </h2>
      <div className="lg-h-6 m-0 mt-3 flex flex-col text-sm dark:text-zinc-100 lg:flex-row">
        <div className="m-2 flex flex-1 flex-col justify-between rounded-2xl bg-zinc-50 p-4 shadow-md dark:bg-zinc-800/50">
          <p className="italic text-zinc-600 dark:text-zinc-200">
            &quot;When I set out to make ZUUT, I didn&apos;t know where to
            start. Luke was the perfect technical partner to help me figure out
            the product&apos;s direction, hire a team of designers and
            engineers, and get an MVP built - frequently contributing useful
            feature ideas of his own.{' '}
            <span className="font-bold">
              Luke got our app built with a high standard of quality and
              attention to detail.
            </span>
            &quot;
          </p>
          <span className="mt-6 font-bold">
            &quot;Koolfire&quot;, Founder, ZUUT
          </span>
        </div>
        <div className="m-2 my-4 flex flex-1 flex-col justify-between rounded-2xl bg-zinc-50 p-4 shadow-md dark:bg-zinc-800/50 lg:my-2">
          <p className="italic text-zinc-600 dark:text-zinc-200">
            &quot;Luke worked with me from the start to create this
            cross-platform mobile game. He helped me find a great designer to
            draw our our mockups, built the application, handled publishing to
            Apple & Google&apos;s storefronts, and was instrumental in helping
            me find a developer for long-term maintenance of the application.{' '}
            <span className="font-bold">
              Without Luke, I&apos;m not sure if I ever would have gotten this
              done.
            </span>
            &quot;{' '}
          </p>
          <span className="mt-6 font-bold">
            Kurtis Bryant, Creator, Devil&apos;s Dice Game
          </span>
        </div>
        <div className="m-2 flex flex-1 flex-col justify-between rounded-2xl bg-zinc-50 p-4 shadow-md dark:bg-zinc-800/50">
          <div className="flex h-full flex-col justify-center md:flex-row md:justify-around lg:flex-col">
            <div className="flex flex-col">
              <p className="font-bold italic text-zinc-600 dark:text-zinc-200">
                I&apos;m f*****g amazed.
              </p>
              <span className="">- Dom McLennon, lead vocalist</span>
            </div>
            <div className="flex flex-col">
              <p className="italic text-zinc-600 dark:text-zinc-200">
                Awesome ... insane turnaround!!
              </p>
              <span className="">- Kevin Doan, creative direction</span>
            </div>
          </div>
          <span className="mt-6 font-bold">BROCKHAMPTON</span>
        </div>
      </div>
    </>
  )
}
