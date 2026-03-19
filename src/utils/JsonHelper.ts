import fs from 'fs'
import path, { dirname } from 'path'
import { TestData } from '../Interface/TestDataInterface'
import * as dotenv from 'dotenv';

// Read from ".env" file
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

export async function LoadTestData() {
    const environment = process.env.Execution_Env || 'Prod';
    const directoryPath = path.join(__dirname, '../../TestData/',environment)

    const jsonData:TestData={};

    fs.readdirSync(directoryPath).forEach(file => {
        if(path.extname(file).match('.json')){
            const filePath = path.join(directoryPath,file);  // Read the file content synchronously as a string
            const fileContent:TestData = JSON.parse(fs.readFileSync(filePath,'utf-8')); // Parse the JSON string into a typed object
            Object.assign(jsonData,fileContent);
        }
        
    });
    return jsonData;
    
}