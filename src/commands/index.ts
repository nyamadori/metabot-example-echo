import { Command, CommandBase, SubCommand, Positional, CommandEnvironment, Transactional } from 'metabot-bot'

@Command('echo <message>', 'Echos your message')
export class EchoCommand extends CommandBase {
  @Positional('your message')
  message: string

  async execute(env: CommandEnvironment) {
    return {
      text: this.message
    }
  }
}

@Command('inc', 'Increment counter')
@Transactional
export class IncrementCommand extends CommandBase {
  async execute(env: CommandEnvironment) {
    if (env.brain['counter'] === undefined || env.brain['counter'] === null) env.brain['counter'] = 0

    env.brain['counter'] += 1

    return {
      text: env.brain['counter']
    }
  }
}

@Command('addtodo <todo>', 'Increment counter')
export class AddTodoCommand extends CommandBase {
  @Positional('your message')
  todo: string

  async execute(env: CommandEnvironment) {
    if (!env.brain['todos']) env.brain['todos'] = []

    env.brain['todos'].push(this.todo)

    return {
      text: env.brain['todos'].join("\n")
    }
  }
}

@Command('$nickname <command> [args..]', 'Show command examples')
@SubCommand('echo', EchoCommand)
@SubCommand('inc', IncrementCommand)
@SubCommand('addtodo', AddTodoCommand)
export class RootCommand extends CommandBase {
  command: string
}
