export declare const command = "%{botNickname} <message>";
export declare const desc = "Echos your message";
export declare function handler({args, context}: {
    args: any;
    context: any;
}): Promise<{
    response_type: string;
    text: string;
}>;
