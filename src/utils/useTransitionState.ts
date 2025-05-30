import { useState } from 'react'
import { flushSync } from 'react-dom'

const useTransitionState = (initialValue: any) => {
  const [state, setState] = useState(initialValue)

  const setTransitionState = (newValue: any | (() => void)) => {
    // @ts-ignore
    if (!document.startViewTransition) return setState(newValue)
    // @ts-ignore
    document.startViewTransition(() => {
      flushSync(() => setState(newValue))
    })
  }
  return [state, setTransitionState]
}

export default useTransitionState
