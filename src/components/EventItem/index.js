// Write your code here
import './index.css'

const EventItem = props => {
  const {eventsDetails, getRegistrationDetails} = props
  const {imageUrl, name, location, registrationStatus} = eventsDetails

  const onClickEvent = () => {
    getRegistrationDetails(registrationStatus)
  }

  return (
    <li className="list-item" onClick={onClickEvent}>
      <button type="button" className=" card-btn ">
        <img className="image" src={imageUrl} alt="event" />
        <p className="name-text">{name}</p>
        <p className="location-text">{location}</p>
      </button>
    </li>
  )
}

export default EventItem
