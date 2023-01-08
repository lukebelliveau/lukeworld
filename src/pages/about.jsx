import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '../components/Container'
import { GitHubIcon, LinkedInIcon, MailIcon } from '../components/SocialIcons'

export function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
        target="_blank"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Luke Belliveau</title>
        <meta
          name="description"
          content="I’m Luke Belliveau. Let's build something together."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="flex place-content-center lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none ">
              <Image
                unoptimized
                src={'/images/portrait.png'}
                alt="A portrait of Luke drinking a smoothie with a cat."
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 lg:aspect-auto lg:rotate-3"
                height="600"
                width="400"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              me, in a nutshell
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p className="italic">
                If you&apos;re looking for a showcase of my skills as a
                developer, check out{' '}
                <Link
                  href={'https://www.zuut.co'}
                  className="underline underline-offset-4 hover:text-teal-500 dark:hover:text-teal-400"
                  target="_blank"
                >
                  ZUUT
                </Link>
                !
              </p>
              <p>
                Welcome to my corner of the internet! My name is Luke. I&apos;m
                a software engineer from the USA, currently living in Hungary.
              </p>
              <p>
                After getting my Computer Science degree from UCONN in 2016, I
                spent a couple of years in Chicago working at{' '}
                <Link
                  href={'https://www.thoughtworks.com/en-us'}
                  className="underline underline-offset-4 hover:text-teal-500 dark:hover:text-teal-400"
                  target="_blank"
                >
                  ThoughtWorks
                </Link>{' '}
                in domains like insurance administration, e-commerce, and
                cybersecurity. On my teams I tended to steward our test
                automation, and did my best to serve as a company-wide
                specialist for TypeScript, node, React, and Redux. I also got
                the opportunity to write some servers in Go, which was pretty
                rad. Around this time I also had the opportunity to build the
                SATURATION Android application for{' '}
                <Link
                  href={'https://www.brckhmptn.com/'}
                  className="underline underline-offset-4 hover:text-teal-500 dark:hover:text-teal-400"
                  target="_blank"
                >
                  BROCKHAMPTON
                </Link>
                , a world-famous musical group and one of my personal favorites.
                In the years it was live, it was installed by over 10,000 users
                and enjoyed a five-star rating on the Google Play store.
              </p>
              <p>
                I went on to work on the Cloud Infrastructure team at GrubHub in
                NYC.{' '}
                <Link
                  href={
                    'https://bytes.grubhub.com/cloud-infrastructure-at-grubhub-94db998a898a'
                  }
                  className="underline underline-offset-4 hover:text-teal-500 dark:hover:text-teal-400"
                  target="_blank"
                >
                  Migrating to a custom-built infrastructure platform
                </Link>{' '}
                reminiscent of the systems at Netflix, they needed somebody with
                system design & architecture chops, paired with the front-end
                skills to build out their management consoles. I enjoyed working
                on the Java frameworks & services that were consumed by our
                application developers to build, test & deploy their
                applications. I also had the opportunity to build out GUIs for
                our Site Reliabililty Engineers to expose simple network
                controls and insights for use in outages and other times of
                crisis. In my last major project, I completed the research &
                architecture proposal for a new notifications platform. This was
                to facilitate notification management across push/SMS/email at
                Grubhub, and involved architecture designs with a Java backend +
                TypeScript frontend + Cassandra database. Following a review
                process of the architecture plans and DB schemas, my design was
                approved by our org-wide architecture review council, and we
                began work on it the next week.
              </p>
              <p>
                In January 2020, I took stock of my 4-year career and decided to
                take a sabbatical. After wrapping up at Grubhub, I embarked to
                go backpacking around Europe, blissfully unaware of how the year
                would unfold! I spent a few months volunteering at a hostel in
                Hungary until the pandemic happened and the world shut down.
                Hunkered down in Budapest, I took on shorter term software
                contracts to pay rent as we waited for our hostel to open back
                up - an event that unfortunately never came to fruition. Not
                quite the year I planned for, but I did manage to fall in love
                with a new city! As we sat inside all year, I took on some
                shorter term software contracts to pay the rent. Among these was
                a stint with the Software Freedom Conservancy, for whom I
                rebuilt the website for{' '}
                <Link
                  href={'https://www.selenium.dev/'}
                  className="underline underline-offset-4 hover:text-teal-500 dark:hover:text-teal-400"
                  target="_blank"
                >
                  Selenium
                </Link>
                , a popular open source browser automation tool.
              </p>
              <p>
                A year later, I decided to dive back into software - this time,
                as a free agent. Since early 2021 I have worked with{' '}
                <Link
                  href={'https://www.nuwavetech.com/'}
                  className="underline underline-offset-4 hover:text-teal-500 dark:hover:text-teal-400"
                  target="_blank"
                >
                  Nuwave Technologies
                </Link>{' '}
                as their resident front-end expert. NuWave sells some great
                applications for Nonstop servers, and I&apos;ve enjoyed managing
                the design, development and release of their front-end code. I
                also manage automated deployment pipelines using AWS EC2 +
                Jenkins, and introduced a comprehensive practice of full-suite
                testing using Jest and Cypress.io. After educating other
                engineers at the company about best testing practices and
                lobbying for a strong automated test culture, I&apos;m confident
                that these practices will stay prevalent in this organization
                long after I&apos;m gone.
              </p>
              <p>
                I also work on{' '}
                <Link
                  href={'https://www.zuut.co'}
                  className="underline underline-offset-4 hover:text-teal-500 dark:hover:text-teal-400"
                  target="_blank"
                >
                  ZUUT.co
                </Link>
                , a computer-aided design tool that assists people in planning
                out and executing their cannabis grows. This one&apos;s a doozy,
                and is a solid showcase of what I can do. ZUUT features an
                deeply interactive drag-and-drop design tool with sync, save and
                share features modeled after Google Docs. Users are assisted by
                a deep interaction and collision detection engine, which
                provides immediate feedback on the current state of the
                user&apos;s work. The tool runs entirely in the browser and was
                built with React, Redux, Next.js, and Firebase - with support
                from Airtable and Contentful. I am especially proud of the
                smooth Builder interface, convenient auto-saving/sharing
                features, and an optimized build/deploy strategy that keeps
                first paints and JS bundles light, (+ Lighthouse scores high!)
                despite the rich feature set of the full application.
              </p>
              <p>
                I currently live in Budapest, and split time between here and
                the Greater Boston area where I grew up. When I&apos;m not
                coding, you might find me snowboarding or noodling on my
                beginner&apos;s keyboard or sky-pink telecaster. I am currently
                open to contract, part time and full time work. If you think we
                may be a good fit, I&apos;d love to{' '}
                <Link
                  href={'/contact'}
                  className="underline underline-offset-4 hover:text-teal-500 dark:hover:text-teal-400"
                >
                  hear from you!
                </Link>
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
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
                className="mt-4"
              >
                LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:hi@lukebelliveau.dev"
                icon={MailIcon}
                className="mt-4"
              >
                hi@lukebelliveau.dev
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
