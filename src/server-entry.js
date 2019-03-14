import { createApp } from './app'

let func = context => {
  const { app } = createApp()
  return app
}

export default func