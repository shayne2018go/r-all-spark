import { ItemTypes } from '@pages/draw/c/SideBar'
import * as Antd from 'antd/es'
import { get } from 'lodash'
import React from 'react'
import { createElement } from 'react'
import { DragElementWrapper, useDrop } from 'react-dnd'

const OriginalComponents = { ...Antd }

const createDrawElement = (
  tagName: string,
  props: any,
  children: string | any[]
) => {
  const componentTag = get(OriginalComponents, tagName, tagName)
  return createElement(componentTag, props, children)
}

export default createDrawElement
