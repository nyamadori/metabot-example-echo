import * as metabot from 'metabot-bot'
import * as echo from './commands/echo'

export const bot = metabot.defineBot({
  commands: { echo }
})
