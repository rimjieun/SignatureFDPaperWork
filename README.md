# SignatureFD Paperwork

Go to https://signaturefd.herokuapp.com.



## Installation Requirements

- Python 3.6.3

```
pip install -r requirements.txt
```

Required packages are listed in [`requirements.txt`](https://github.com/rimjieun/aclu-bail-reform/blob/master/src/webscraper/dekalb/requirements.txt).

## Commands & Usage

- The following commands output a CSV file (dekalb-\*.csv) into the [`data`](https://github.com/rimjieun/aclu-bail-reform/tree/master/data) folder.
- Each row is a jail record. Jail records are sorted by inmate booking number.
- An inmate may have multiple records if there are multiple charges.
- Some records may be missing due to unknown circumstances. Jail IDs for missing records will be logged at the end of the scrape.

#### All Records
```
python webscraper.py all 0 100
```
Scrapes records starting from an index number for a certain number of records (e.g. `python webscraper.py all 12000 50` will search for 50 records starting from index 12000). An **index number** and **record size** must be specified as arguments.

**Note:** The larger the record size, the longer the runtime. For large record sizes, make sure network connection is stable for the entire duration of the scrape.

#### Today
```
python webscraper.py today
```
Scrapes all records, if any, for the current date. If this command is used before any inmate booking, it will respond with `No records found.`

#### Custom Date
```
python webscraper.py custom 1900-01-01
```
Scrapes all records for a custom date. A **custom date** (yyyy-mm-dd) must be specified as an argument. If there are no records for a specified date, it will respond with `No records found.`

#### Default
```
python webscraper.py
```
Scrapes records starting from index 0 for 100 records.

## Available Data
