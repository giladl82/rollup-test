import React, { Component } from 'react'

import ExampleComponent from 'rollup-test'
import Comp1 from 'rollup-test/Components/Comp1'
export default class App extends Component {
  render () {
    return (
      <div>
        <ExampleComponent text='Modern React component module' />
        <Comp1 />
      </div>
    )
  }
}
