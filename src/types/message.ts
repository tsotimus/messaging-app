export type MessageModel = {
    text: string;
    createdBy: string;
}

export type MessageDisplay = {
    id: string;
    text: string;
    createdBy:string;
    createdAt: string;
    updatedAt: string;
}

export type MessagesDisplay = Array<MessageDisplay>