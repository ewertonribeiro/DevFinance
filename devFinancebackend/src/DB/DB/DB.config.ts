import {open} from 'sqlite'

import * as sqlite3 from 'sqlite3'

const DATABASE = open({
    filename:'./DEVFINANCE.sqlite',
    driver: sqlite3.Database
}) 

export {DATABASE};
