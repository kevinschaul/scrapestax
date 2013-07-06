# Haystax scraper

In conjunction with [Haystax](https://github.com/danhillreports/haystax), haystax scraper hopes to make web scraping easier. (Heh).

In the current iteration, Haystax scraper hopes to take a url and a selector (XPath, jQuery, ???) and output a .csv file.

As it is, it simply prints the text inside the selection results. Stay tuned.

## Installation

    git clone https://github.com/kevinschaul/haystax-scraper
    cd haystax-scraper
    npm install

## Usage

    Usage: node haystax-scrape.js URL [options]

    Options:
      -s, --selector  jQuery selector
      -m, --mode      scraping mode    [default: "table"]
      -h, --help      Display help     [default: false]

## Example

    $ node haystax-scrape.js http://apps.sd.gov/applications/ST12ODRS/LobbyistViewlist.asp -m table -s 'table:eq(4)' > sd-lobbyists.csv

