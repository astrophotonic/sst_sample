import handler from "./util/handler";
import dynamoDb from "./util/dynamodb";

export const main = handler(async (event) => {
    const params = {
        TableName: process.env.TABLE_NAME,

        Key: {
            userId: "123", // id of the note author
            noteId: event.pathParameters.id, // the id of the note
        },
    };

    const result = await dynamoDb.get(params);
    if(!result.Item) {
        throw new Error("Item not found.");
    }

    // return the retrieved item.
    return result.Item;
});