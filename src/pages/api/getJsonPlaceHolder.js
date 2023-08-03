import Cors from "cors";


// Initializing the cors middleware
const cors = Cors({
    methods: ["GET"]
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }

            return resolve(result);
        });
    });
}

const handler = async (req, res) => {

    // Run the middleware
    await runMiddleware(req, res, cors);

    if (req.method !== "GET") {
        return res.status(404).json({
            error: {
                code: "not_found",
                message:
                    "The requested endpoint was not found or doesn't support this method."
            }
        });
    }

    const { id } = req.query;
    if (id) {
        let list = [];
        let listArray = [];
        let repeated;
        for (let i = 0; i < id; i++) {
            while (!list[i]) {
                repeated = true;
                while (repeated == true) {
                    let random = Math.random();
                    random = random * 100 + 1;
                    random = Math.trunc(random);
                    for (let j = 0; j < list.length; j++) {
                        if (list[j] == random) {
                            repeated = true;
                            break;
                        } else {
                            repeated = false;
                        }
                    }
                    list[i] = random;
                }
            }
        }
        for (let i = 0; i <= list.length; i++) {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${i}`);
            const data = await response.json();
            if (data.id) {
                listArray.push(data);
            }
        }
        //console.log(list);
        var orderArrayList = listArray.sort((a, b) => a.title > b.title ? 1 : -1)
                                      .sort((a, b) => +a.completed - b.completed);        

        //console.log(orderArrayList);
        res.status(200).json(orderArrayList);
    } else {
        res.status(200).json([]);
    }
};

export default handler;

