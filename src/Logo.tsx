interface LogoProps {
  href: string,
  src: string,
  alt: string,
}

export function Logo({ href, src, alt }: LogoProps) {
  return <a href={href} target="_blank">
    <img src={src} className="h-36 p-6" alt={alt} />
  </a>
}