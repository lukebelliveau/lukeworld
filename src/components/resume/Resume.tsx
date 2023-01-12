import clsx from 'clsx'
import Image from 'next/image'
import { Button } from '../Button'

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

export function Resume({ className }: { className?: string }) {
  let resume = [
    {
      company: 'NuWave Tech',
      title: 'Consultant Software Engineer',
      logo: '/images/logos/nuwave.jpg',
      start: '2021',
      end: 'Present',
    },
    {
      company: 'ZUUT.co',
      title: 'Technical Partner',
      logo: '/images/logos/zuut.jpg',
      start: '2020',
      end: 'Present',
    },
    {
      company: 'Grubhub',
      title: 'Senior Cloud Infrastructure Engineer',
      logo: '/images/logos/grbhb_symbol_red.png',
      start: '2018',
      end: '2020',
    },
    {
      company: 'ThoughtWorks',
      title: 'Senior Software Engineer',
      logo: '/images/logos/thoughtworks.jpg',
      start: '2017',
      end: '2018',
    },
    {
      company: 'ThoughtWorks',
      title: 'Associate Software Engineer',
      logo: '/images/logos/tw-white.png',
      start: '2016',
      end: '2017',
    },
  ]

  return (
    <div
      className={clsx(
        className,
        'flex-initial rounded-2xl border border-zinc-100 p-5 dark:border-zinc-700/40'
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
              <Image
                src={role.logo}
                className="box-1 drop-shadow-xs h-7 w-7 rounded-full"
                fill
                aria-label={`Logo for ${role.company}`}
                alt={`Logo for ${role.company}`}
              />
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
        href="/files/Luke_Belliveau_CV.pdf"
        target="_blank"
        variant="secondary"
        className="group mt-6 w-full"
      >
        View CV
      </Button>
    </div>
  )
}
