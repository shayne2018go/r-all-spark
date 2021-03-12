import React, { FC, PureComponent, useState } from 'react'
import { useDragDropManager } from 'react-dnd'
import DragContainer from './DragContainer'
import DropContainer from './DropContainer'
import createDrawElement from './helper'

const DndElement = (options: { tagName: any; props: any; children: any }) => {
  const { tagName, props, children } = options
  const DrawElement = createDrawElement(tagName, props, children)
  return (
    <DragContainer>
      <DropContainer>{DrawElement}</DropContainer>
    </DragContainer>
  )
}

export default DndElement
