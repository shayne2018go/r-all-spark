import { ItemTypes } from '@pages/draw/c/SideBar'
import { DragSource, DragSourceConnector, DragSourceMonitor } from 'react-dnd'

const dragSourceProps = {
  type: ItemTypes.Draw,
  source: {
    canDrag: (props: any) => {
      return true
    },
    isDragging: (props: any, monitor: DragSourceMonitor) => {
      return monitor.isDragging()
    },
    beginDrag: (props: any) => {
      console.log(props)
      return props
    },
  },
  collect: (connect: DragSourceConnector, monitor: DragSourceMonitor) => {
    return {
      connectDragSource: connect.dragSource(),
    }
  },
}

const DragContainer = (props: any) => {
  const { connectDragSource } = props
  return connectDragSource(
    <div className="drag-container">{props.children}</div>
  )
}

export default DragSource(
  dragSourceProps.type,
  dragSourceProps.source,
  dragSourceProps.collect
)(DragContainer)
