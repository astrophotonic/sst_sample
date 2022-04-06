
export default function handler(lambda) {

    return async function (event, context) {
        //request body is passed in as a JSON encoded string

        let body, statusCode;

        try{
            body = await lambda(event, context); 
            statusCode = 200;

        } catch(e) {
            console.error(e); // output the error to the console.
            body = { error: e.message };
            statusCode = 500;
        }

        return {
            statusCode,
            body: JSON.stringify(body),
        };
    };
}