import React, { Component } from 'react'

import CV from 'react-cv'
import { CVData } from './data';

export default class App extends Component {
  render () {
    return (
      <div>
        <CV {...CVData} />
        <a href="https://www.github.com/sbayd/react-cv">React CV Template,  Documentation/Details at: https://www.github.com/sbayd/react-cv</a>
      </div>
    )
  }
}
