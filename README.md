# ScrapeStax

In conjunction with [Haystax](https://github.com/danhillreports/haystax), ScrapeStax hopes to make web scraping easier. (Heh).

In the current iteration, ScrapeStax hopes to take a url and a selector (XPath, jQuery, ???) and output a .csv file.

As it is, it simply prints the text inside the selection results. Stay tuned.

## Installation

    git clone https://github.com/kevinschaul/scrapestax
    cd scrapestax
    npm install

## Usage

    Usage: node scrapestax.js URL [options]

    Options:
      -s, --selector  jQuery selector
      -m, --mode      scraping mode    [default: "table"]
      -h, --help      Display help     [default: false]

## Example

    $ node scrapestax.js http://apps.sd.gov/applications/ST12ODRS/LobbyistViewlist.asp -m table -s 'table:eq(4)' > sd-lobbyists.csv

