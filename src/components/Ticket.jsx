import TicketAmount from "./TicketAmount";

export default function Ticket ({ tipTotal, tipTotalPerson, onClick }) {
  const tipReallyTotal = tipTotal === Infinity || isNaN(tipTotal) ? 0 : tipTotal
  const tipPersonTotal = tipTotalPerson === Infinity || isNaN(tipTotalPerson) ? 0 : tipTotalPerson
  return (
    <section className='ticket'>
      <TicketAmount tipType={'Tip amount'} total={(tipReallyTotal).toFixed(2)} />
      <TicketAmount tipType={'Total'} total={(tipPersonTotal).toFixed(2)} />
      <button onClick={onClick} className='ticket__btn' >RESET</button>
    </section>
  )
}
