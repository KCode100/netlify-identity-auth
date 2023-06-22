exports.handler = async () => {
  console.log('function ran')

  const data = { name: 'kivi', age: 29 }

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}