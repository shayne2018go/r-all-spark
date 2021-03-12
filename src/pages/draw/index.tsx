import { Layout } from 'antd'
import React, { Component } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DrawContent } from './c/DrawContent'
import { SideBar } from './c/SideBar'
const { Sider, Content } = Layout
export default class Draw extends Component {
  render() {
    return (
      <div>
        <DndProvider backend={HTML5Backend}>
          <Layout>
            <Sider theme="light">
              <SideBar></SideBar>
            </Sider>
            <Content>
              <DrawContent></DrawContent>
            </Content>
          </Layout>
        </DndProvider>
      </div>
    )
  }
}
