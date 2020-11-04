import { useRef, useLayoutEffect } from 'react'


/**
 * Function that returns a JSX element that tracks
 * the page scroll used in list component
 * @function isBrowser
 * @returns {JSX.Elements} information about the window scroll
 */

const isBrowser = typeof window !== `undefined`

//function to get the current scroll position
function getScrollPosition({ element, useWindow }) {
  if (!isBrowser) return { x: 0, y: 0 }

  //check if the user requested the scroll position of the
  //entire page or some specific element within it.
  const target = element ? element.current : document.body
  const position = target.getBoundingClientRect()

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top }
}

//Function used in list component
export function useScrollPosition(effect, deps, element, useWindow, wait) {
  const position = useRef(getScrollPosition({ useWindow }))

  let throttleTimeout = null

  /*track the scroll position with the useScrollPosition hook,
   it will return prevPos and currPos respectively on each position change*/
  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow })
    effect({ prevPos: position.current, currPos })
    position.current = currPos
    throttleTimeout = null
  }

  //it runs synchronously immediately after React has performed all DOM mutations.
  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait)
        }
      } else {
        callBack()
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, deps)
}