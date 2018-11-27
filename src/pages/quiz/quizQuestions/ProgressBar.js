import React from 'react'
import PropTypes from 'prop-types'
import { ProgressBarAndroid } from 'react-native'

const primary = '#02b3e4'

const ProgressBar = props =>
  <ProgressBarAndroid
    styleAttr="Horizontal"
    indeterminate={false}
    progress={props.progress}
    color={primary}
  />

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
}

export default ProgressBar
