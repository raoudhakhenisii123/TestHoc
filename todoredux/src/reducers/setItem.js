
const setitem=(state='', action)=>{

if(action.type==='SETitem')

{return action.item}


return state

}
export default setitem;