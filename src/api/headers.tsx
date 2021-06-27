export default () => {
  if (process.env.NODE_ENV == 'production') {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  } else return {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
}