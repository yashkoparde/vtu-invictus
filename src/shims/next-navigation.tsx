import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const BASE_PATH = '/clubs/vtu-invictus'

function prefixPath(href: string): string {
  if (
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('#') ||
    href.startsWith(BASE_PATH)
  ) {
    return href
  }
  if (href === '/') return BASE_PATH
  return href.startsWith('/') ? `${BASE_PATH}${href}` : `${BASE_PATH}/${href}`
}

export function usePathname(): string {
  const { pathname } = useLocation()
  const sub = pathname.startsWith(BASE_PATH) ? pathname.slice(BASE_PATH.length) : pathname
  return sub || '/'
}

export function useRouter() {
  const navigate = useNavigate()
  return {
    push: (href: string) => navigate(prefixPath(href)),
    replace: (href: string) => navigate(prefixPath(href), { replace: true }),
    back: () => navigate(-1),
    forward: () => navigate(1),
    refresh: () => window.location.reload(),
    prefetch: () => {},
  }
}

export function redirect(url: string): never {
  // Handled by React Router <Navigate /> in routes; fallback if called imperatively
  window.location.replace(prefixPath(url))
  throw new Error(`NEXT_REDIRECT:${url}`)
}

export function useSearchParams() {
  const { search } = useLocation()
  return new URLSearchParams(search)
}

export function RedirectComponent({ to }: { to: string }) {
  const navigate = useNavigate()
  useEffect(() => {
    navigate(prefixPath(to), { replace: true })
  }, [navigate, to])
  return null
}
