'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { FormEvent, useEffect, useState } from 'react'

import { MicIcon } from '@/assets/icons/MicIcon'
import { SearchIcon } from '@/assets/icons/SearchIcon'
import { XIcon } from '@/assets/icons/XIcon'

import './SearchBarDesktop.scss'

const SearchBarDesktop = () => {
  const searchParams = new URLSearchParams(useSearchParams())
  const pathname = usePathname()
  const { replace } = useRouter()

  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [isRecording, setIsRecording] = useState(false)
  const [searchList, setSearchList] = useState<string[] | []>([])

  useEffect(() => {
    if (localStorage.getItem('search')) {
      const historyDraft = localStorage.getItem('search') as string
      setSearchList(JSON.parse(historyDraft) as string[])
    } else {
      localStorage.setItem('search', '[]')
    }
  }, [])

  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      const speechRecognizer = new window.webkitSpeechRecognition()
      speechRecognizer.continuous = true
      speechRecognizer.interimResults = true
      speechRecognizer.lang = 'en-US'
      speechRecognizer.start()
      if (!isRecording) return speechRecognizer.stop()

      let finalTranscripts = ''

      speechRecognizer.onresult = function (event) {
        let interimTranscripts = ''
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript
          transcript.replace('\n', ' ')
          if (event.results[i].isFinal) {
            finalTranscripts += transcript
          } else {
            interimTranscripts += transcript
          }
        }
        console.log(finalTranscripts + ' ' + interimTranscripts)
        setInputValue(finalTranscripts + ' ' + interimTranscripts)
      }

      speechRecognizer.onerror = function (event) {
        console.log(event)
      }
    } else {
      console.log(
        'Your browser is not supported. Please download Google chrome or Update your Google chrome!!'
      )
    }
  }, [isRecording])

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const params = new URLSearchParams(searchParams)
    params.set('search', inputValue)
    replace(`${pathname}?${params.toString()}`)
    setIsOpen(false)

    if (localStorage.getItem('search')) {
      const historyDraft = localStorage.getItem('search') as string
      const history = (JSON.parse(historyDraft) as string[]).slice(0, 4)
      history.unshift(inputValue)
      localStorage.setItem('search', JSON.stringify(history))
      setSearchList(history)
    }
  }

  const resetSearch = () => {
    const params = new URLSearchParams(searchParams)
    params.delete('search')
    replace(`${pathname}?${params.toString()}`)
    setInputValue('')
  }

  const searchListHandler = (search: string) => {
    const params = new URLSearchParams(searchParams)
    params.set('search', search)
    replace(`${pathname}?${params.toString()}`)
    setInputValue(search)
    setIsOpen(false)
  }

  return (
    <>
      {isOpen && (
        <div className="overlay-desk" onClick={() => setIsOpen(false)} />
      )}

      <AnimatePresence mode="wait">
        <motion.div layout className="searchbar-desk" data-open={isOpen}>
          <form className="container" onSubmit={submitHandler}>
            <motion.div layoutId="searchicon" className="icon">
              <SearchIcon className="icon" />
            </motion.div>
            <motion.input
              layoutId="searchinput"
              type="text"
              placeholder="Search..."
              className="search-input"
              value={inputValue}
              onClick={() => setIsOpen(true)}
              onChange={(e) => setInputValue(e.target.value)}
            />
            {inputValue !== '' && (
              <div onClick={() => resetSearch()}>
                <XIcon />
              </div>
            )}
            <div
              data-open={isOpen}
              onClick={() => setIsRecording((prev) => !prev)}
              style={{
                color: isRecording ? 'red' : 'currentcolor',
              }}
            >
              <MicIcon className="mic" />
            </div>
          </form>

          <div className="accordion" data-open={isOpen}>
            <ul className="history">
              {searchList.map((searchItem) => (
                <li
                  key={searchItem}
                  onClick={() => searchListHandler(searchItem)}
                >
                  {searchItem}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default SearchBarDesktop
