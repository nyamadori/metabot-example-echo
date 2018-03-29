import { CommandBase, CommandEnvironment } from 'metabot-bot';
export declare class EchoCommand extends CommandBase {
    message: string;
    execute(env: CommandEnvironment): Promise<{
        text: string;
    }>;
}
export declare class IncrementCommand extends CommandBase {
    execute(env: CommandEnvironment): Promise<{
        text: any;
    }>;
}
export declare class RootCommand extends CommandBase {
    command: string;
}
