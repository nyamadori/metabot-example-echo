import { Command, CommandBase, SubCommand, Positional, CommandEnvironment, Transactional } from 'metabot-bot'

@Command('echo <message>', 'Echos your message')
export class EchoCommand extends CommandBase {
  @Positional('your message')
  message: string

  async execute(env: CommandEnvironment) {
    return {
      text: env.message.text
    }
  }
}

@Command('inc', 'Increment counter')
@Transactional
export class IncrementCommand extends CommandBase {
  async execute(env: CommandEnvironment) {
    env.brain['counter'] += 1

    return {
      text: env.brain['counter']
    }
  }
}

@Command('$nickname <command> [args..]', 'Show command examples')
@SubCommand('echo', EchoCommand)
export class RootCommand extends CommandBase {
  command: string
}
