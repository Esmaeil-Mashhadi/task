'use client'
import { useState } from 'react'
import styles from './home.module.css'
import { useRouter } from 'next/navigation'


const Home = () => {

    const [time , setTime] = useState({
        morning:0 , 
        noon:0 ,
        night:0, 
    })

    const [saveResult , setSaveResult] = useState('')
    const sum = +time.morning+ +time.noon + +time.night

    const changeHandler = (e)=>{
        const {value , name} = e.target 
        setTime({...time , [name]:value})
    }
    const router = useRouter()

    const submitHandler = async()=>{
        const res = await fetch('/api/task' , {
            method:'POST' , body:JSON.stringify(sum)
        })
        const result = await res.json()
        console.log(result);
        setSaveResult(result.message || 'failed to save')
        router.refresh()
    }

  return (
    <div className={styles.container}>
        <h2>working hour recorder </h2>
        <div className={styles.morning}>
          <label>morning</label>
          <input name='morning' value={time.morning} type="range" step={1} max={4} onChange={changeHandler}/>
          <p>working hours : {time.morning} </p>
        </div>

        <div className={styles.noon}>
          <label>Noon</label>
          <input name='noon' value={time.noon} type="range" step={1} max={3} onChange={changeHandler} />
          <p>working hours : {time.noon} </p>
        </div>

        <div className={styles.night}>
          <label>night</label>
          <input type="range" max={3} name='night' step={1} onChange={changeHandler} value={time.night} />
          <p>working hours : {time.night}</p>
        </div>

        <div className={styles.save}>
                <p className={styles.total}>total hours = {sum}</p>
                <button onClick={submitHandler} className={styles.submit}>save </button>
        </div>

        <p className={styles.saveResult}>{saveResult}</p>
    </div>
  )
}

export default Home
