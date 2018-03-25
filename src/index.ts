import * as metabot from 'metabot-bot'
import * as echo from './commands/echo'

metabot.defineBot({
  commands: { echo }
})
