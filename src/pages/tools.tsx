import Head from 'next/head'
import Link from 'next/link'
import { Container } from '../components/Container'

export default function Home() {
  return (
    <>
      <Head>
        <title>Luke Belliveau - professional software delivery</title>
        <meta
          name="description"
          content="I'm Luke Belliveau, a software delivery specialist splitting time between Boston and Hungary. I am a full stack developer with 7 years of experience taking software products from inception to launch and beyond. If you need to get something built, I can get it done."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="flex-column mt-36 flex font-mono">
        <div className="flex">
          <div className="w-full">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              tools
            </h1>

            <h2 className="mt-6 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
              this website was built with
            </h2>
            <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
              HTML, CSS, TypeScript, Tailwind, React, and Next.js, deployed on
              Vercel. I use{' '}
              <Link
                href={'https://plausible.io'}
                className="underline underline-offset-4 hover:text-teal-500 dark:hover:text-teal-400"
                target="_blank"
              >
                Plausible.io
              </Link>{' '}
              for privacy focused analytics.
            </p>

            <h2 className="mt-4 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
              languges
            </h2>
            <p className="mt-2 w-full text-base text-zinc-600 dark:text-zinc-400">
              I am happiest working with TypeScript and JavaScript. I also have
              years of experience writing enterprise-scale applications in Java,
              and shorter stints writing Python, C#, and Golang professionally.
            </p>

            <h2 className="mt-4 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
              deploy & automation
            </h2>
            <p className="mt-2 w-full text-base text-zinc-600 dark:text-zinc-400">
              I have deep experience working with Jenkins & Spinnaker,
              particularly instances running on EC2 servers. I&apos;ve also
              worked with GoCD and Gitlab CI at enterprise scale. For smaller
              projects, I am partial to GitHub Pages, Vercel, and Digital Ocean
              (in increasing order of required complexity) - and if we need fine
              grained control or uncapped scale, I&apos;m quite comfortable
              working in the AWS fleet of services. GitHub Actions is also great
              for getting all sorts of things done.
            </p>

            <h2 className="mt-4 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
              testing
            </h2>
            <p className="mt-2 w-full text-base text-zinc-600 dark:text-zinc-400">
              A test-first mentality is a cornerstone of my practice. Most
              recently, I&apos;ve been loving Vitest for JavaScript testing. In
              the JS world, I&apos;ve had deep experience with Jest, Mocha,
              Chai, and Jasmine. I reach for JUnit for Java codebases, and
              I&apos;ve also worked with Ginkgo a bit on Golang projects. For
              browser tests, I am most happy working with Cypress and have also
              spent a lot of time with Selenium.
            </p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
              client-side
            </h2>
            <p className="mt-2 w-full text-base text-zinc-600 dark:text-zinc-400">
              I&apos;ve loved working with React since it converted this
              aspiring backend engineer into a V8 lover in 2016. Though I find
              React&apos;s own Context API and Zustand suitable and pleasant to
              work with in most circumstances, I maintain a high opinion of
              Redux and it&apos;s my personal choice for medium to large scale
              projects. On the{' '}
              <Link
                href={'https://www.zuut.co/'}
                className="underline underline-offset-4 hover:text-teal-500 dark:hover:text-teal-400"
                target="_blank"
              >
                ZUUT
              </Link>{' '}
              project, I liked using Konva for smooth drag and drop interactions
              and animations.
            </p>

            <h2 className="mt-4 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
              server-side
            </h2>
            <p className="mt-2 w-full text-base text-zinc-600 dark:text-zinc-400">
              After building a few Node.js data pipelines for Kroger, I got deep
              server-side experience working on the Cloud Infrastructure team at
              GrubHub. I worked on our Java/Spring Boot frameworks, which were
              used by our application engineers to consume platform APIs for
              authentication, notifications, and other customer-facing functions
              - notably adding a new mobile service provider to our
              notifications platform, coding the integration and managing a
              relationship with the vendor. I also contributed features to our
              load-balancing, API gateway, and service mesh/discovery
              architecture.
            </p>
            <p className="mt-2 w-full text-base text-zinc-600 dark:text-zinc-400">
              In recent years my client&apos;s solutions have required less
              complexity, sometimes going for an EC2/Docker solution, and other
              times going for serverless functions on AWS Lambda or Digital
              Ocean. For smaller scale things and my own personal projects,
              Firebase can usually cover my needs. Though I&apos;ve really
              enjoyed the rapid development and agency these smaller systems
              have allowed, I&apos;d love the opportunity to work on
              enterprise-scale architecture again.
            </p>

            <h2 className="mt-4 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
              my workflow
            </h2>
            <p className="mt-2 w-full  text-base text-zinc-600 dark:text-zinc-400">
              Alfred, BetterTouchTool, git, iTerm, *nix && macOS, GitHub
              Actions, Linear, Obsidian, VSCode
            </p>

            <h2 className="mt-4 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
              misc
            </h2>
            <p className="mt-2 w-full  text-base text-zinc-600 dark:text-zinc-400">
              Akai MPK Mini, CAPiTA DOA, Köves Telecaster, Logic Pro, Yamaha
              P-45, ZSA Moonlander
            </p>
          </div>
        </div>
      </Container>
    </>
  )
}
