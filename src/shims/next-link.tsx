import React from 'react'
import { Link as RouterLink, type LinkProps as RouterLinkProps } from 'react-router-dom'

const BASE_PATH = '/clubs/vtu-invictus'

type NextLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string | { pathname?: string; hash?: string; query?: Record<string, string> }
  replace?: boolean
  prefetch?: boolean
  scroll?: boolean
  children?: React.ReactNode
}

function resolveHref(href: NextLinkProps['href']): string {
  if (typeof href === 'string') return href
  const pathname = href.pathname || '/'
  const hash = href.hash ? (href.hash.startsWith('#') ? href.hash : `#${href.hash}`) : ''
  return `${pathname}${hash}`
}

export default function Link({ href, replace, prefetch: _prefetch, scroll: _scroll, children, ...rest }: NextLinkProps) {
  const raw = resolveHref(href)

  if (
    raw.startsWith('#') ||
    raw.startsWith('http://') ||
    raw.startsWith('https://') ||
    raw.startsWith('mailto:') ||
    raw.startsWith('tel:')
  ) {
    return (
      <a href={raw} {...rest}>
        {children}
      </a>
    )
  }

  const target =
    raw === '/'
      ? BASE_PATH
      : raw.startsWith(BASE_PATH)
        ? raw
        : raw.startsWith('/')
          ? `${BASE_PATH}${raw}`
          : `${BASE_PATH}/${raw}`

  return (
    <RouterLink to={target} replace={replace} {...(rest as Omit<RouterLinkProps, 'to'>)}>
      {children}
    </RouterLink>
  )
}
