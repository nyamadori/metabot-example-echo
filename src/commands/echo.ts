import * as metabot from 'metabot-bot'

export const command = '<command> <message>'
export const desc = 'Echos your message'

export async function handler({ args, context }) {
  return {
    response_type: "in_channel",
    text: `${args.message}`
  }
}
