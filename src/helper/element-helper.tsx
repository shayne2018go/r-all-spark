import { Layout, Card, Button } from 'antd'

import * as Antd from 'antd/es'
import { createElement, useRef } from 'react'
import { get } from 'lodash'
import { ItemTypes } from '@pages/draw/c/SideBar'
import { DragElementWrapper, useDrop } from 'react-dnd'
import React from 'react'
const OriginalComponents = { ...Antd }

export const genComponents = (drop1: DragElementWrapper<any>) => {
  const el = createElement<any>(
    get(OriginalComponents, 'Card', 'Card'),
    { title: '123', ref: drop1 },
    '1232131'
  )
  return el
}
