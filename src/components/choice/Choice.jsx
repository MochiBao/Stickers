import React, { Component } from 'react'
import s from "./choice.module.css"

export default class Choice extends Component {
  render() {
    return (
      <p className={s.p}>Saved sticker: {this.props.choice}</p>
    )
  }
}
