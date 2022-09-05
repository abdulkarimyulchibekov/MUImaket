import { useContext } from 'react'
import { EmailContext } from '../context/EmailContext'

export const useEmail = () => {
  const {email, setEmail} = useContext(EmailContext)
  return {email, setEmail}
}
