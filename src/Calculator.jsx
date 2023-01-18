import RadButton from './components/RadButton'
import Input from './components/Input'
import dollar from '/icon-dollar.svg'
import person from '/icon-person.svg'
import { useEffect, useState } from 'react'
import Ticket from './components/Ticket'

export default function Calculator () {
  const [pressed, setPressed] = useState(true)
  const [custom, setCustom] = useState(0)
  const [bill, setBill] = useState(0)
  const [people, setPeople] = useState(0)
  const [percentage, setPercentage] = useState(0)
  const [amountPerson, setAmountPerson] = useState(0)
  const [totalPerson, setTotalPerson] = useState(0)
  const [isCustom, setIsCustom] = useState(false)
  function handleIsCustom () {
    setIsCustom(!isCustom)
  }
  function handleBillChange(event) {
    setBill(event.target.value)
  }
  function handlePeopleChange(event) {
    setPeople(event.target.value)
  }
  function handleCustomChange (event) {
    setCustom(event.target.value)
  }
  function handleReset () {
    setBill(0)
    setPeople(0)
    setPercentage(0)
  }
  useEffect(()=>{
    setPressed(false)
  }, [pressed])
  useEffect(() => {
    isCustom ? setAmountPerson((bill * custom / people) / 100) : setAmountPerson(bill * percentage / people)
  }, [people, percentage, bill, custom])
  useEffect(() => {
    setTotalPerson(bill / people + amountPerson)
  }, [amountPerson])
  return (
    <main className='main'>
      <div className='main__containers info'>
        <Input onChange={handleBillChange} nameFor={'Bill'} imageFor={dollar} />
        <section className='percentages'>
          <p className='percentages__p'>Select Tip %</p>
          <div className='percentages__container'>
            <RadButton pressed={pressed} onClick={() => setPercentage(0.05)} percentage='5' />
            <RadButton onClick={() => setPercentage(0.10)} percentage='10' />
            <RadButton onClick={() => setPercentage(0.15)} percentage='15' />
            <RadButton onClick={() => setPercentage(0.25)} percentage='25' />
            <RadButton onClick={() => setPercentage(0.50)} percentage='50' />
            <RadButton onClick={handleIsCustom} percentage='Custom' />
          </div>
          {isCustom && <Input onChange={handleCustomChange} nameFor={'Custom %'} />}
        </section>
        <Input onChange={handlePeopleChange} nameFor={'Number of people'} imageFor={person} />
      </div>
      <div className='main__containers'>
        <Ticket onClick={handleReset} tipTotal={amountPerson} tipTotalPerson={totalPerson} />
      </div>
    </main>
  )
}
