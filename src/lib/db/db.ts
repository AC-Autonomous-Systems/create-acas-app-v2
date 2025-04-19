/**
  MIT License

  Copyright (c) 2025 AC Autonomous Systems, LLC

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the “Software”), to deal
  in the Software without restriction, including without limitation the rights  
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell  
  copies of the Software, and to permit persons to whom the Software is  
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all  
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR  
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE  
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER  
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,  
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE  
  SOFTWARE.
 */

import { drizzle } from 'drizzle-orm/postgres-js';
import postgres, { Sql } from 'postgres';

/* -------------------------------------------------------------------------- */
/*                      Loading env variables and verify                      */
/* -------------------------------------------------------------------------- */
import * as dotenv from 'dotenv';
dotenv.config({
  path: '.env.local',
});

if (!process.env.DB_CONNECTION_STRING) {
  throw new Error('DB_CONNECTION_STRING is not set');
} else if (
  process.env.NODE_ENV === 'test' &&
  !process.env.TEST_DB_CONNECTION_STRING
) {
  throw new Error('TEST_DB_CONNECTION_STRING is not set');
}

/* -------------------------------------------------------------------------- */
/*                           Initialize the client:                           */
/* -------------------------------------------------------------------------- */

export let client: Sql;
if (process.env.NODE_ENV === 'development') {
  if (!(globalThis as any)._pgClient) {
    (globalThis as any)._pgClient = postgres(process.env.DB_CONNECTION_STRING, {
      max: 100,
    });
  }
  client = (globalThis as any)._pgClient;
} else {
  client = postgres(
    process.env.NODE_ENV === 'test'
      ? process.env.TEST_DB_CONNECTION_STRING!
      : process.env.DB_CONNECTION_STRING,
    {
      max: 100,
    }
  );
}

export const db = drizzle(client, {
  // ...(process.env.NODE_ENV === 'development' && {
  //   logger: {
  //     logQuery: (query, params) => {
  //       console.log('Executed Query:', query);
  //       console.log('With Parameters:', params);
  //     },
  //   },
  // }),
});
