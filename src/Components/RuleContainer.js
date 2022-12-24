import React from 'react'
import RuleBanner from './RuleBanner'
import RuleModal from './RuleModal'
import { useState } from 'react'

function RuleContainer() {

    const [modalVisible, changeModalVisible] = useState(false)

  return (
    <div id='ruleContainer'>
        <RuleBanner onClick ={() => changeModalVisible(true)} ></RuleBanner>
        <RuleModal visible = {modalVisible} onClose = {() => changeModalVisible(false)}></RuleModal>
    </div>
  )
}

export default RuleContainer