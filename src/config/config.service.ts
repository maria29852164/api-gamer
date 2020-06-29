import configuration from './config.configuration'
export const getKey=(key)=>{
  let value=null
  let obj=configuration()
  Object.keys(obj).filter(objkey=>{
    if(objkey==key){
      value=obj[objkey]
    }

  })
  return value
}
