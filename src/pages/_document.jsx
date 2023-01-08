import { Head, Html, Main, NextScript } from 'next/document'

const modeScript = `
  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
`

export default function Document() {
  return (
    <Html className="h-full antialiased" lang="en">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: modeScript }} />
        <link
          rel="alternate"
          type="application/rss+xml"
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.xml`}
        />
        <link
          rel="alternate"
          type="application/feed+json"
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.json`}
        />
        <script
          defer
          data-domain="lukebelliveau.dev"
          src="https://plausible.io/js/script.js"
        ></script>

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://www.lukebelliveau.dev" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Luke Belliveau - Professional Software Delivery"
        />
        <meta
          property="og:description"
          content="Luke Belliveau is a software delivery specialist for full stack web applications and services."
        />
        <meta property="og:image" content={'/images/portrait.png'} />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="lukebelliveau.dev" />
        <meta property="twitter:url" content="https://www.lukebelliveau.dev" />
        <meta
          name="twitter:title"
          content="Luke Belliveau - Professional Software Delivery"
        />
        <meta
          name="twitter:description"
          content="ZUUT is a tool for growers to create plans and purchase products for cannabis grows. If you want to learn how to grow weed, this is the place to start."
        />
        <meta name="twitter:image" content={'/images/portrait.png'} />
      </Head>
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
