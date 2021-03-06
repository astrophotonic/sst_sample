import * as uuid from "uuid";
import handler from "./util/handler";
import dynamoDb from "./util/dynamodb";

export const main = handler(async (event) => {  
    // inline function definition which takes 
    // 'event' as an argument
    // => defines a function reference
    //request body is passed in as a JSON encoded string
    const data = JSON.parse(event.body);

    const params = {
        TableName: process.env.TABLE_NAME,
        Item: {
            userId: "123",
            noteId: uuid.v1(),
            content: data.content,
            attachment: data.attachment,
            createdAt: Date.now(),
        },
    };

    await dynamoDb.put(params);

    return params.Item;
    
});