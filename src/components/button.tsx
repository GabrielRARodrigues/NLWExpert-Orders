import { ReactNode } from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

type TButtonProps = TouchableOpacityProps & {
  children: ReactNode
}

type TButtonTextProps = TouchableOpacityProps & {
  children: ReactNode
}

type TButtonIconProps = TouchableOpacityProps & {
  children: ReactNode
}

function Button({ children, ...rest }: TButtonProps) {
  return (
    <TouchableOpacity
      className="h-12 bg-lime-400 rounded-md items-center justify-center flex-row"
      activeOpacity={0.7}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  )
}

function ButtonText({ children, ...rest }: TButtonTextProps) {
  return (
    <Text className="text-black font-heading text-base mx-2">{children}</Text>
  )
}

function ButtonIcon({ children }: TButtonIconProps) {
  return children
}

Button.Text = ButtonText
Button.Icon = ButtonIcon

export { Button }
