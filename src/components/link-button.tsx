import { Link, LinkProps } from 'expo-router'

type TLinkButtonProps = LinkProps<string> & {
  title: string
}

export function LinkButton({ title, ...rest }: TLinkButtonProps) {
  return (
    <Link className="text-slate-300 text-center text-base font-body" {...rest}>
      {title}
    </Link>
  )
}
