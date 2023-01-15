import { Container } from '../components/Container'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

const Page404 = () => {
  const router = useRouter()
  const { asPath } = router

  const message = asPath
    ? `lukebelliveau.dev${asPath}`
    : `the page you requested`
  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <Container className="flex-column mt-9 flex font-mono">
        <h1 className="mb-12 text-center text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          404_not_found
        </h1>

        <div className="flex place-content-center">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Link href="/">
              <Image
                src={'/images/daisysage.jpg'}
                aria-label="Go to homepage"
                alt="Luke's beloved miniature dachshunds, Daisy & Sage."
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 lg:aspect-auto"
                height="600"
                width="400"
              />
            </Link>
          </div>
        </div>

        <p className="my-4 mt-1 max-w-2xl text-center text-base text-xs italic text-zinc-600 dark:text-zinc-400">
          <Link href="/">Click me to go back to the homepage!</Link>
        </p>

        <p className="my-4 max-w-2xl text-center text-sm text-base text-zinc-600 dark:text-zinc-400 ">
          I can&apos;t find the page you requested.
        </p>
        <p className="my-4 max-w-2xl text-center text-base text-sm text-zinc-600 dark:text-zinc-400">
          I&apos;m sorry. Here&apos;s a photo of my dogs to make up for it.
        </p>
        <p className="my-4 max-w-2xl text-center text-base text-sm text-zinc-600 dark:text-zinc-400">
          Their names are Daisy & Sage, and they are also sorry.
        </p>
      </Container>
    </>
  )
}

export default Page404
