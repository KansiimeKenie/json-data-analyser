const axios = require('axios');
let get_tasks_from_json = async  (url) => {
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}
// Function to extract unique keys from all 'output-data' objects
let get_unique_keys = (data) => {
    const uniqueKeys = []; // Array to store unique keys
    // Loop through all tasks
    for (const taskKey in data) {
        const task = data[taskKey];
            const outputDataArray = task['task-data']['output-data'];
            for (const item of outputDataArray) {
                Object.keys(item).forEach(key => {
                    // Check if the key is already
                    if (!uniqueKeys.includes(key)) {
                        uniqueKeys.push(key); 
                    }
                });
            }
    }

    return uniqueKeys; 
}


// Function to get all task names
let get_all_task_names = (data) => {
    const taskNames = Object.keys(data);
    return taskNames;
}

let get_values_for_key = (data, key) => {
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

    return values;
}

let main = async () => {
    try {
        const data = await get_tasks_from_json('http://localhost:3000/task_history'); // Fetch data

        if (data) {
            console.log('Fetched Data:', data);

            // unique keys
            const uniqueKeys = get_unique_keys(data);
            console.log('Unique Keys:', uniqueKeys);

            // all task names
            const taskNames = get_all_task_names(data);
            console.log('Task Names:', taskNames);

            // values for a specific key eg events
            const eventUrls = get_values_for_key(data, 'event_name'); 
            console.log('Event Name:', eventUrls);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
