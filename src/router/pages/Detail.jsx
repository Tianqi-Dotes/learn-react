import React, { PureComponent } from 'react'
import {withRouter} from './hoc'

export class Detail extends PureComponent {

  render() {
    console.log(this.props)

    return (
      <div>
        <h2>detail page</h2>
        <h2>id:123</h2>
      </div>
    )
  }
}

export default withRouter(Detail)