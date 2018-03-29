import * as metabot from 'metabot-bot'
import * as root from './commands/root'

export const bot = metabot.defineBot({
  commands: { root }
})
