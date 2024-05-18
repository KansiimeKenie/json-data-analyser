# json-data-analyser

A JavaScript project for aggregating and analyzing JSON data. This project includes functions to extract unique keys, gather task names, and retrieve values for specified keys from task data.

## Features

- **Fetch JSON Data**: Retrieve JSON data from a specified URL.
- **Extract Unique Keys**: Aggregate all unique keys from the objects in the JSON data.
- **List Task Names**: Gather all task names from the task history.
- **Retrieve Key Values**: Get a list of all values for a specified key.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- npm (Node Package Manager) installed.

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/KansiimeKenie/json-data-analyser.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd json-data-analyser
    ```

3. **Install the dependencies**:

    ```bash
    npm install
    ```

## Usage

1. **Modify the URL in `data_selector.js`** to point to your JSON data source.

    ```javascript
    const data = await get_tasks_from_json('http://localhost:3000/task_history');
    ```

2. **Run the script**:

    ```bash
    node data_selector.js
    ```

### Example Code

#### data_selector.js

**Functions:**

- **get_tasks_from_json(url)**: Fetches JSON data from the specified URL.
- **get_unique_keys(data)**: Extracts unique keys from all 'output-data' objects in the JSON data.
- **get_all_task_names(data)**: Retrieves all task names from the task history.
- **get_values_for_key(data, key)**: Gets a list of all values associated with a specified key in the JSON data.
- **main()**: Main function to orchestrate fetching data, extracting unique keys, listing task names, and retrieving key values.

**Usage in Script:**

- **get_tasks_from_json(url)**: This function is called to fetch the JSON data from the given URL.
- **get_unique_keys(data)**: This function processes the fetched data to extract and return a list of unique keys.
- **get_all_task_names(data)**: This function processes the fetched data to extract and return all task names.
- **get_values_for_key(data, key)**: This function processes the fetched data to retrieve all values for a specified key.
- **main()**: This function runs the above functions in sequence and prints the results.
