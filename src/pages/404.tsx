import { Container } from '../components/Container'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Page404 = () => {
  const router = useRouter()
  return (
    <Container className="flex-column mt-9 flex font-mono">
      <h1 className="mb-12 text-center text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        404_not_found
      </h1>

      <p className="my-4 max-w-2xl text-center text-base text-zinc-600 dark:text-zinc-400">
        I can&apos;t find{' '}
        <span className="font-sans">lukebelliveau.dev{router.asPath}</span>.
      </p>
      <p className="my-4 max-w-2xl text-center text-base text-zinc-600 dark:text-zinc-400">
        I&apos;m sorry. I&apos;ve left a photo of my dogs below to make up for
        it. Their names are Daisy & Sage. They are also sorry.
      </p>
      <p className="my-4 max-w-2xl text-center text-base text-zinc-600 dark:text-zinc-400">
        Wanna go back to the{' '}
        <Link href="/" className="underline underline-offset-4">
          homepage
        </Link>
        ?
      </p>
      <div className="flex place-content-center">
        <div className="max-w-xs px-2.5 lg:max-w-none ">
          <Image
            unoptimized
            src={'/images/dogs.jpg'}
            alt="A portrait of Luke drinking a smoothie with a cat."
            sizes="(min-width: 1024px) 32rem, 20rem"
            className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 lg:aspect-auto"
            height="600"
            width="400"
          />
        </div>
      </div>
    </Container>
  )
}

export default Page404
