import DndElement from '@components/core/DndElement'
import DrawElement from '@components/core/helper'
import { Button, Card } from 'antd'
import React, { createElement, FC, ReactNode } from 'react'
import {
  ConnectDropTarget,
  DndProvider,
  DragSourceMonitor,
  DropTarget,
  DropTargetConnector,
  DropTargetMonitor,
  useDrag,
  useDrop,
} from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useStore } from 'react-redux'
import { genComponents } from 'src/helper/element-helper'
import { ItemTypes } from './SideBar'

export const DrawContent = () => {
  return (
    <div className="p-2">
      <div>action</div>
      <DropDrawBoard></DropDrawBoard>
    </div>
  )
}

export interface DrawBoardProps {
  connectDropTarget: ConnectDropTarget
}
const DrawBoard: FC<DrawBoardProps> = ({ connectDropTarget }) => {
  return connectDropTarget(
    <div className="draw-board w-screen h-screen bg-white">
      <DndElement
        tagName="Card"
        props={{ title: '111' }}
        children="222"
      ></DndElement>
    </div>
  )
}
const DropDrawBoard = DropTarget(
  ItemTypes.Draw,
  {
    canDrop: (props, monitor) => {
      return true
    },
    drop: (props, monitor) => {
      console.log('dropDrawBoard')
      console.log(props, monitor.getItem())
    },
  },
  (connect: DropTargetConnector, monitor: DropTargetMonitor) => {
    return {
      connectDropTarget: connect.dropTarget(),
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }
  }
)(DrawBoard)
