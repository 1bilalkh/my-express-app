import { Input as InputPrimitive } from "@base-ui/react/input"
import { cn } from "cn"

function Input({
  className,
  type,
  ...props
}) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-12 w-full min-w-0 border-0 border-b border-gray-400 bg-transparent pl-8 pr-3 text-base outline-none transition-colors placeholder:text-gray-500 focus:border-black  focus:ring-0",
        className
      )}
      {...props}
    />
  )
}

export { Input }
