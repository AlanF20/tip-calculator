export default function TicketAmount ({ tipType, total }) {
  return (
    <div className='ticket__amount'>
      <div className='ticket__amount-container'>
        <p className='ticket__amount-container-sub'>{tipType}</p>
        <p className='ticket__amount-container-p'>/ person</p>
      </div>
      <h3 className='ticket__amount-container-tip'>${total}</h3>
    </div>
  )
}
