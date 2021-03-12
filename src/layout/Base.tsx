import { Layout, Menu } from 'antd'
import { Header, Content, Footer } from 'antd/lib/layout/layout'
import React from 'react'
import { Redirect, Route, RouteComponentProps } from 'react-router-dom'
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons'
const { SubMenu } = Menu

export default class BaseLayout extends React.Component<
  { routes: any[] } & RouteComponentProps,
  {}
> {
  constructor(props: { routes: any[] } & RouteComponentProps) {
    super(props)
    this.state = {}
  }
  render(): JSX.Element {
    const { routes } = this.props
    return (
      <div>
        <Layout>
          <Header>
            <Menu mode="horizontal">
              <Menu.Item key="mail" icon={<MailOutlined />}>
                Navigation One
              </Menu.Item>
              <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
                Navigation Two
              </Menu.Item>
              <SubMenu
                key="SubMenu"
                icon={<SettingOutlined />}
                title="Navigation Three - Submenu"
              >
                <Menu.ItemGroup title="Item 1">
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Item 2">
                  <Menu.Item key="setting:3">Option 3</Menu.Item>
                  <Menu.Item key="setting:4">Option 4</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <Menu.Item key="alipay">
                <a
                  href="https://ant.design"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Navigation Four - Link
                </a>
              </Menu.Item>
            </Menu>
          </Header>
          <Content>
            {routes.map((route: any, index: number) => {
              if (route.redirect) {
                return <Redirect to={route.redirect} key={index}></Redirect>
              }
              return (
                <Route
                  path={route.path}
                  key={index}
                  exact={route.exact || false}
                  render={(props: any) => {
                    return (
                      <route.component {...props} routes={route.children} />
                    )
                  }}
                />
              )
            })}
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    )
  }
}
