# rfd-scrapper

> A shameless redflagdeals.com scrapper

Rfd-scrapper fetches data in the following format:
```json
{
  "title": "Title",
  "url": "http://http://forums.redflagdeals.com/deal-url",
  "created_at": "Sep 5th, 2016 4:16 pm",
  "updated_at": "Sep 5th, 2016 4:16 pm",
  "rating": "+5"
}
```
All entries are sorted by post creation date.

## Installation
```
$ npm install rfd-scrapper --save
```

## Usage
```js
const rfdScrapper = require('rfd-scrapper');

rfdScrapper({ limit: 3, days: 7, direction: 'd' })
  .then(data => console.log(data))
```
### API
### `rfdScrapper([options])`
Fetches posts from http://forums.redflagdeals.com
#### Params
- **Object** `options`: An object containing the following fields:
  - `days` (Number): Possible values: `0` - all, `1` - one day, `7` - week, `30` - month
  - `limit` (Number): Number of pages to scrap
  - `direction` (String): Sorting direction: must be either `a` - ascending or `d` - descending
