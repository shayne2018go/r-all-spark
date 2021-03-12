const initialValue = {
  draws: {
    test: [{ name: 'ant-button' }],
  },
}

const drawReducers = (state = initialValue, action: any): any => {
  switch (action.type) {
    case 'SET_DRAWS':
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}
export default drawReducers
