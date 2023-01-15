import clsx from 'clsx'

export function Prose({ children, className }) {
  return (
    <div
      className={clsx(
        className,
        'prose-br:mt-0 prose-br:mb-1 prose-a:color-red prose prose-h2:mt-16 prose-h2:text-4xl prose-h3:text-xl prose-h4:mt-6 prose-h4:mb-1 prose-h4:font-bold prose-p:my-1 prose-a:decoration-0 prose-pre:mb-0 prose-pre:mt-0 prose-ul:my-1 prose-li:my-1 dark:prose-invert'
      )}
    >
      {children}
    </div>
  )
}
