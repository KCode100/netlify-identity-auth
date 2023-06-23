exports.handler = async (event, context) => {
  const secretDataFetchedFromDB = [
    {id: 1, name: 'Joe Doer', age: 35},
    {id: 2, name: 'David Hopper', age: 25},
    {id: 3, name: 'Michael Stod', age: 38},
    {id: 4, name: 'Ven Glynn', age: 27},
  ]

  if (context.clientContext.user) {
    return {
      statusCode: 200,
      body: JSON.stringify(secretDataFetchedFromDB)
    }
  }

  return {
    statusCode: 401,
    body: JSON.stringify({ mssg: "You must be logged in to see this" })
  }
}