import { useEffect, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

/* ── Custom easing curves ── */
const EASE = {
  smooth: 'power4.out',
  snappy: 'expo.out',
  dramatic: 'power3.inOut',
  soft: 'sine.out',
  elastic: 'back.out(1.2)',
}

/* ── Reveal with parallax offset ── */
export function useReveal(ref, options = {}) {
  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    gsap.set(el, { opacity: 0, y: options.y ?? 80, rotate: options.rotate ?? 0 })
    gsap.to(el, {
      opacity: 1,
      y: 0,
      rotate: 0,
      duration: options.duration ?? 1.2,
      ease: options.ease ?? EASE.smooth,
      delay: options.delay ?? 0,
      scrollTrigger: {
        trigger: options.trigger ? options.trigger.current || options.trigger : el,
        start: options.start ?? 'top 88%',
        once: true,
      },
    })
    return () => ScrollTrigger.getAll().forEach(t => { if (t.trigger === el) t.kill() })
  }, [])
}

/* ── Stagger children with irregular timing ── */
export function useStaggerReveal(ref, options = {}) {
  useEffect(() => {
    if (!ref.current) return
    const children = ref.current.children
    if (!children.length) return
    gsap.fromTo(children,
      { opacity: 0, y: options.y ?? 60, scale: options.scale ?? 1 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: options.duration ?? 0.9,
        ease: options.ease ?? EASE.snappy,
        stagger: {
          each: options.stagger ?? 0.12,
          from: options.from ?? 'start',
        },
        scrollTrigger: {
          trigger: ref.current,
          start: options.start ?? 'top 82%',
          once: true,
        },
      }
    )
    return () => ScrollTrigger.getAll().forEach(t => { if (t.trigger === ref.current) t.kill() })
  }, [])
}

/* ── Cinematic headline split animation ── */
export function useSplitReveal(ref, options = {}) {
  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    const split = new SplitType(el, { types: 'lines,words' })

    gsap.set(split.words, { opacity: 0, y: '110%', rotateX: -30 })

    gsap.to(split.words, {
      opacity: 1,
      y: '0%',
      rotateX: 0,
      duration: options.duration ?? 1,
      ease: options.ease ?? 'power4.out',
      stagger: options.stagger ?? 0.04,
      delay: options.delay ?? 0,
      scrollTrigger: {
        trigger: el,
        start: options.start ?? 'top 85%',
        once: true,
      },
    })

    // Wrap lines for overflow hidden
    split.lines?.forEach(line => {
      const wrapper = document.createElement('span')
      wrapper.style.display = 'block'
      wrapper.style.overflow = 'hidden'
      wrapper.style.perspective = '600px'
      line.parentNode.insertBefore(wrapper, line)
      wrapper.appendChild(line)
    })

    return () => {
      split.revert()
      ScrollTrigger.getAll().forEach(t => { if (t.trigger === el) t.kill() })
    }
  }, [])
}

/* ── Parallax scroll effect ── */
export function useParallax(ref, options = {}) {
  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    gsap.to(el, {
      y: options.y ?? -80,
      ease: 'none',
      scrollTrigger: {
        trigger: options.trigger ? options.trigger.current || options.trigger : el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: options.scrub ?? 1.5,
      },
    })
    return () => ScrollTrigger.getAll().forEach(t => { if (t.trigger === el) t.kill() })
  }, [])
}

/* ── Image reveal with clip-path ── */
export function useImageReveal(ref, options = {}) {
  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    gsap.fromTo(el,
      { clipPath: 'inset(100% 0 0 0)' },
      {
        clipPath: 'inset(0% 0 0 0)',
        duration: options.duration ?? 1.4,
        ease: EASE.dramatic,
        delay: options.delay ?? 0,
        scrollTrigger: {
          trigger: el,
          start: options.start ?? 'top 80%',
          once: true,
        },
      }
    )
    return () => ScrollTrigger.getAll().forEach(t => { if (t.trigger === el) t.kill() })
  }, [])
}

/* ── Horizontal scroll-driven wipe ── */
export function useHorizontalWipe(ref, options = {}) {
  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    gsap.fromTo(el,
      { scaleX: 0, transformOrigin: 'left center' },
      {
        scaleX: 1,
        duration: options.duration ?? 1,
        ease: EASE.smooth,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
      }
    )
    return () => ScrollTrigger.getAll().forEach(t => { if (t.trigger === el) t.kill() })
  }, [])
}

/* ── Counter animation ── */
export function useCountUp(ref, target, options = {}) {
  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    const obj = { val: 0 }
    gsap.to(obj, {
      val: target,
      duration: options.duration ?? 2.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
      onUpdate: () => {
        el.textContent = Math.round(obj.val)
      },
    })
    return () => ScrollTrigger.getAll().forEach(t => { if (t.trigger === el) t.kill() })
  }, [])
}

/* ── Legacy aliases ── */
export const useFadeIn = useReveal
export const useStaggerIn = useStaggerReveal

export { gsap, ScrollTrigger, EASE }
