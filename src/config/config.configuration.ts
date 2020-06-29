export default ()=>{
  return {
    type:process.env['TYPE'],
    port:parseFloat(process.env.PORT) || 3000,
    database:process.env['DATABASE'],
    username:process.env['USERNAME'],
    password:process.env['PASSWORD'],
    host:process.env['HOST']
  }
}
