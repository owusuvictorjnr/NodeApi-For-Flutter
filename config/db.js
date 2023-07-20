const mongoose = require('mongoose')

const connection = {}

async function connect() {
  if (connection.isConnected) {
    console.log('Already connected')
    return
  }

  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState
    if (connection.isConnected === 1) {
      console.log('Use previous connection')
      return
    }
    await mongoose.disconnect()
  }
}

// disconnection
async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === 'production') {
      await mongoose.disconnect()
      connection.isConnected = false
    } else {
      console.log('Not connected')
    }
  }
}

module.exports = connect
