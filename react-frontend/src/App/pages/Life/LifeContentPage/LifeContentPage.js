import React, { Component } from 'react'
import axios from 'axios'

import { getCurrentContentId } from 'src/utils/contentsUtils'

class LifeContentPage extends Component {
  componentDidMount() {
    this.getLifeContent(getCurrentContentId(document.URL))
  }

  getLifeContent(id) {
    axios.get(`http://localhost:6508/life-card/result/${id}`).then(res => {
      const { data : [ content ] } = res
      this.setState({ content })
    })
  }

  render() {
    return <div>LifeContentPage</div>
  }
}

export default LifeContentPage
