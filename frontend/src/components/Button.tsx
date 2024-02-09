import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

// eslint-disable-next-line prettier/prettier
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = 'button', ...props }, ref) => {
    return (
      <button
        type={type}
        className={twMerge(
          'w-full rounded-full bg-white text-black px-8 py-1 disabled:cursor-not-allowed disabled:opacity-50 font-bold hover:scale-110',
          className,
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'

export default Button
