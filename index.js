import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'
import * as Sentry from '@sentry/browser';


const EnvelopeIcon = ({className}) => {
  return (
    <svg viewBox="0 0 512 512" className={className}>
      <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
    </svg>
  )
}

const defaultStyle = {
  background: '#ff4040',
  borderRadius: '3px',
  border: 'none',
  bottom: '-4px',
  boxShadow: '1px 1px 1px 1px rgba(0,0,0,0.3)',
  color: 'white',
  display: 'inline-block',
  fontSize: '1em',
  padding: '0.25em 1em',
  margin: '1em',
  position: 'fixed',
  right: '10px',
  height: '35px',
  verticalAlign: 'middle'
}

export class Feedback extends Component {
  static propTypes = {
    dsn: PropTypes.string,
    style: PropTypes.object
  }
  static defaultProps = {
    dsn: 'empty',
    style: {}
  }

  constructor(props, context) {
    super(props, context)

    this.handleFeedback = this.handleFeedback.bind(this)
  }
  handleFeedback(e) {
    const { dsn } = this.props

    Sentry.init({dsn})
    Sentry.captureException(new Error('User Feedback'))
    Sentry.showReportDialog({
      'title': 'Feedback?',
      'labelSubmit': 'Send Feedback',
      'subtitle': ''
    })
  }
  render() {

    const FeedbackButton = styled.button({
      ...defaultStyle,
      ...this.props.style
    })

    const iconStyle = css({
      height: '30px',
      display: 'inline-block',
      fill: 'currentColor',
      verticalAlign: 'middle'
    })


    return (
      <FeedbackButton onClick={this.handleFeedback}>
        <EnvelopeIcon className={iconStyle} /> Feedback
      </FeedbackButton>
    )
  }
}

export default Feedback
