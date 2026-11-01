import { useEffect, useState } from 'react'
import api from './api'

export default function useGet(path, params) {
  const [data, setData] = useState(null)
  const [state, setState] = useState(path ? 'loading' : 'idle')

  useEffect(() => {
    if (!path) return
    setState('loading')
    api
      .get(path, { params })
      .then((res) => (setData(res.data), setState('ready')))
      .catch((error) => (console.log('Error', error), setState('error')))
  }, [path, JSON.stringify(params)])

  return [data, state]
}