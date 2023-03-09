// Write your code here
import {Component} from 'react'

import './index.css'

class ActiveEventRegistrationDetails extends Component {
  initialRender = () => (
    <div className="status-container">
      <p className="initial-text">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  renderRegisterHere = () => (
    <div className="status-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="register-img"
      />
      <p className="initial-text1">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-btn">
        Register Here
      </button>
    </div>
  )

  renderRegisteredSuccess = () => (
    <div className="status-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png "
        alt="registered"
        className="register-img"
      />
      <h1 className="initial-text2">
        You have already registered for the event
      </h1>
    </div>
  )

  renderRegistrationClosed = () => (
    <div className="status-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png "
        alt="registrations closed"
        className="register-img"
      />
      <h1 className="initial-text2">Registrations Are Closed Now!</h1>
      <p className="initial-text3">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  render() {
    const {registrationDetails} = this.props

    switch (registrationDetails) {
      case 'YET_TO_REGISTER':
        return this.renderRegisterHere()
      case 'REGISTERED':
        return this.renderRegisteredSuccess()
      case 'REGISTRATIONS_CLOSED':
        return this.renderRegistrationClosed()
      default:
        return this.initialRender()
    }
  }
}

export default ActiveEventRegistrationDetails
