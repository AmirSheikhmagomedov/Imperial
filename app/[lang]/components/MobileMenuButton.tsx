import { Fade as Hamburger } from 'hamburger-react'

export default function MobileMenuButton({
  isOpen,
  onClick,
}: {
  isOpen: boolean
  onClick: () => void
}) {
  return <Hamburger toggled={isOpen} toggle={onClick} />
}
