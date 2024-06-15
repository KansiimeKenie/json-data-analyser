const axios = require('axios');
const getTasksFromJson = (url) => {
    return new Promise((resolve, reject) => {
        axios.get(url).then((res) => {
            resolve(res.data)
        }).catch((error) => {
            reject(error)
        })
    });
};
// Function to extract unique keys from all 'output-data' objects
// const getUniqueKeys = (data) => {
//     const uniqueKeys = []; // Array to store unique keys
//     // Loop through all tasks
//     for (const taskKey in data) {
//         const task = data[taskKey];
//             const outputDataArray = task['task-data']['output-data'];
//             for (const item of outputDataArray) {
//                 Object.keys(item).forEach(key => {
//                     // Check if the key is already
//                     if (!uniqueKeys.includes(key)) {
//                         uniqueKeys.push(key); 
//                     }
//                 });
//             }
//     }

//     return uniqueKeys; 
// }

const getUniqueKeys = (data) => {
    return new Promise((resolve , reject) =>{
        try {
            const uniqueKeys = []; // Array to store unique keys
            // Loop through all tasks
            for (const taskKey in data) {
                const task = data[taskKey];
                const outputDataArray = task['task-data']['output-data'];
                for (const item of outputDataArray) {
                    Object.keys(item).forEach(key => {
                        // Check if the key is already in uniqueKeys
                        if (!uniqueKeys.includes(key)) {
                            uniqueKeys.push(key); 
                        }
                    });
                }
            }
            resolve(uniqueKeys)
        } catch(error){
            reject(error)
        }
    }
    )
}


// Function to get all task names
const getAllTaskNames = (data) => {
    return new Promise((resolve, reject) => {
        try{
            const taskNames = Object.keys(data);
            resolve(taskNames)
        } catch (error){
            console.log("error on procesing data "+ error)
            reject(error)
        }
    }
    ) 
}

const getValuesForKey = (data, key) => {
    return new Promise((resolve, reject) => {
        try {
            const values = []; 
            for (const taskKey in data) { 
                const task = data[taskKey];
                    const dataArray = task['task-data']['output-data'];
                    for (const item of dataArray) {
                        if (item.hasOwnProperty(key)) { // Check if the key exists in the item
                            values.push(item[key]); 
                        }
                    }
            }
            resolve(values);
        } catch (error){
            reject(error)
        }
    }
    )  
}

const main = async () => {
    try {
        const data = await getTasksFromJson('http://localhost:3000/task_history'); // Fetch data

        if (data) {
            console.log('Fetched Data:', data);

            // unique keys
            const uniqueKeys = await getUniqueKeys(data);
            console.log('Unique Keys:', uniqueKeys);

            // all task names
            const taskNames = await getAllTaskNames(data);
            console.log('Task Names:', taskNames);

            // values for a specific key eg events
            const eventUrls = await getValuesForKey(data, 'event_name'); 
            console.log('Event Name:', eventUrls);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
