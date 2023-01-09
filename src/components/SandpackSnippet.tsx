import { Sandpack } from '@codesandbox/sandpack-react'

type CustomSandpackProps = {
  template: any
  filename: string
  children: string
}
export const SandpackSnippet = (props: CustomSandpackProps) => {
  const { children, filename } = props
  return (
    <Sandpack
      template="react-ts"
      files={{
        [filename]: { code: children, active: true },
      }}
      options={{
        showLineNumbers: true,
        showInlineErrors: true,
        showTabs: false,
        closableTabs: false,
      }}
    />
  )
}
