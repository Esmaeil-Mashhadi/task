'use client'
import { useEffect, useState } from 'react'
import styles from './target.module.css'
const Target =  () => {
  
  const [totalHours , setTotalHours] = useState()
  
  useEffect(()=>{
    const getHours = async()=>{
      const res = await fetch("/api/getTask" , {next:{revalidate:1}})
      const result = await res.json()
      setTotalHours(result?.totalHours || 0)
    }
    getHours()
  },[])
  return (
    <div className={styles.container}>
      <label>target  : 180 </label>
      <label>current :{totalHours}</label>
    </div>
  )
}

export default Target
