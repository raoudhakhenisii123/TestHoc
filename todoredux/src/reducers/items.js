
const items = (state = [], action) => {
  if (action.type === 'ADD_item') {
     return state.concat(action.item) }
     
  if (action.type === 'EDIT_item') {
    return state.map(m => {
      if (m.id === action.id) {
        return action.item
      }
      return m;
    })
  }
  if (action.type === 'DELETE_item') {
    return  state.filter(m=>{
      if (m.id===action.id)
    { return false}
    return true

  })}
  return state

}


export default items;