import { ItemTypes } from '@pages/draw/c/SideBar'
import { DropTarget, DropTargetConnector, DropTargetMonitor } from 'react-dnd'

const dropTargetProps = {
  type: ItemTypes.Draw,
  source: {
    canDrop() {
      return true
    },
    // 组件放下时触发的事件，可选
    drop(props: { info: any }, monitor: { getItem: () => any }) {
      const { info } = props
      console.log('props: ', props)
      console.log('monitor.getItem(): ', monitor.getItem())
    },
  },
  collect: (connect: DropTargetConnector, monitor: DropTargetMonitor) => {
    return {
      connectDropTarget: connect.dropTarget(),
      canDrop: monitor.canDrop(),
      itemType: monitor.getItemType(),
    }
  },
}

const DropContainer = (props: any) => {
  const { connectDropTarget } = props
  return connectDropTarget(
    <div className="drop-container">{props.children}</div>
  )
}

export default DropTarget(
  dropTargetProps.type,
  dropTargetProps.source,
  dropTargetProps.collect
)(DropContainer)
