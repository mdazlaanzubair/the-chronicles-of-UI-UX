"use client"

import Image from "next/image"
import { useRef, useState, type MouseEvent } from "react"

interface Ripple {
  id: number
  size: number
  x: number
  y: number
}

const CoverBanner = () => {
  const nextRippleId = useRef(0)
  const [ripples, setRipples] = useState<Ripple[]>([])

  const addRipple = (event: MouseEvent<HTMLButtonElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const isKeyboardClick = event.clientX === 0 && event.clientY === 0
    const x = isKeyboardClick ? bounds.width / 2 : event.clientX - bounds.left
    const y = isKeyboardClick ? bounds.height / 2 : event.clientY - bounds.top
    const radius = Math.hypot(
      Math.max(x, bounds.width - x),
      Math.max(y, bounds.height - y)
    )

    nextRippleId.current += 1
    const ripple = {
      id: nextRippleId.current,
      size: radius * 2,
      x,
      y,
    }

    setRipples((current) => [...current.slice(-3), ripple])
  }

  const removeRipple = (id: number) => {
    setRipples((current) => current.filter((ripple) => ripple.id !== id))
  }

  return (
    <div className="relative h-36 w-full overflow-hidden border-b border-accent">
      <Image
        src="/cover.jpeg"
        alt="Cover photo"
        fill
        priority
        sizes="(max-width: 576px) 100vw, 576px"
        className="object-cover object-center"
      />

      <div className="pointer-events-none absolute inset-0 z-10 bg-black/60" />

      <button
        type="button"
        aria-label="Animate cover banner"
        onClick={addRipple}
        className="absolute inset-0 z-20 cursor-pointer overflow-hidden focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none focus-visible:ring-inset"
      >
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            aria-hidden="true"
            className="cover-ripple"
            style={{
              width: ripple.size,
              height: ripple.size,
              left: ripple.x,
              top: ripple.y,
            }}
            onAnimationEnd={() => removeRipple(ripple.id)}
          />
        ))}
      </button>

      <div className="pointer-events-none absolute inset-0 z-30 flex flex-col items-center justify-center px-8 text-center text-primary-foreground">
        <h2 className="max-w-md text-xl leading-tight font-bold sm:text-2xl">
          Javascript is the duct tape of the Internet.
        </h2>
        <p className="mt-2 text-xs font-medium text-primary-foreground/65 italic sm:text-sm">
          — Charlie Campbell —
        </p>
      </div>
    </div>
  )
}

export default CoverBanner
