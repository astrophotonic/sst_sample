import handler from "./util/handler";
import dynamoDb from "./util/dynamodb";

export const main = handler(async (event) => {
    const params = {
        TableName: process.env.TABLE_NAME,

        KeyConditionExpression:  "userId = :userId",
        ExpressionAttributeValues: {
            ":userId": "123", 
        },
    };

    const result = await dynamoDb.query(params);

    // return the matching list of items.
    return result.Items;
});