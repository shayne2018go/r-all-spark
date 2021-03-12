import DragContainer from '@components/core/DragContainer'
import { Menu } from 'antd'
import React, { FC } from 'react'
import {
  ConnectDragSource,
  DragSource,
  DragSourceConnector,
  DragSourceMonitor,
} from 'react-dnd'
// 左侧栏
export const SideBar = () => {
  return (
    <div className="draw-sidebar">
      <div className="draw-menu">
        <DrawMenu></DrawMenu>
      </div>
      <div className="draw-tools">
        <DrawTools></DrawTools>
      </div>
    </div>
  )
}

// draw menu
export const DrawMenu = () => {
  return (
    <Menu>
      <Menu.Item key="1">首页</Menu.Item>
    </Menu>
  )
}

const AsButton = {
  tag: 'a-button',
  props: {
    type: 'primary',
    size: 'small',
  },
  children: '测试',
}

// draw tools
export const DrawTools = () => {
  return (
    <div>
      <div className="w-full">
        <DragContainer>
          <ElementUi data={AsButton}></ElementUi>
        </DragContainer>
      </div>
    </div>
  )
}

export const ItemTypes = {
  ElementUi: 'elementui',
  Draw: 'draw',
}

const ElementUi = (props: any) => {
  return (
    <div
      className="flex justify-between px-3"
      style={{
        fontSize: 12,
        fontWeight: 'bold',
        cursor: 'move',
      }}
    >
      按钮<span>拖放</span>
    </div>
  )
}
