import {DATABASE} from './DB.config'

async function Init():Promise<void>{
   
    const db = await DATABASE;

    await db.exec(`CREATE TABLE transactions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        description TEXT , 
        amount NUMBER,
        date DATE,
        type TEXT
    )`);

    await db.close();
}

Init();