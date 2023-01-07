import React, {
  ComponentPropsWithoutRef,
  forwardRef,
  ForwardRefExoticComponent,
} from 'react'
import clsx from 'clsx'

type ContainerProps = ComponentPropsWithoutRef<'div'>

const OuterContainer = forwardRef<HTMLDivElement, ContainerProps>(
  function OuterContainer({ className, children, ...props }, ref) {
    return (
      <div ref={ref} className={clsx('sm:px-8', className)} {...props}>
        <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
      </div>
    )
  }
)

const InnerContainer = forwardRef<HTMLDivElement, ContainerProps>(
  function InnerContainer({ className, children, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
        {...props}
      >
        <div className="mx-auto max-w-2xl lg:max-w-6xl">{children}</div>
      </div>
    )
  }
)

interface ContainerType extends ForwardRefExoticComponent<any> {
  Outer?: React.FC
  Inner?: React.FC
}

export const Container: ContainerType = forwardRef<
  HTMLDivElement,
  ContainerProps
>(function ContainerFn({ children, ...props }, ref) {
  return (
    <OuterContainer ref={ref} {...props}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  )
})

Container.Outer = OuterContainer
Container.Inner = InnerContainer
