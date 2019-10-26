'use strict';

(function() {
	const xmlString = `<?xml version="1.0" encoding="UTF-8"?>
						<bookstore>

						<book category="cooking">
						  <title lang="en">Everyday Italian</title>
						  <author>Giada De Laurentiis</author>
						  <year>2007</year>
						  <price>30.00</price>
						</book>

						<book category="children">
						  <title lang="en">Harry Potter</title>
						  <author>J K. Rowling</author>
						  <year>2005</year>
						  <price>29.99</price>
						</book>

						<book category="web">
						  <title lang="en">XQuery Kick Start</title>
						  <author>James McGovern</author>
						  <author>Per Bothner</author>
						  <author>Kurt Cagle</author>
						  <author>James Linn</author>
						  <author>Vaidyanathan Nagarajan</author>
						  <year>2003</year>
						  <price>49.99</price>
						</book>

						<book category="web">
						  <title lang="en">Learning XML</title>
						  <author>Erik T. Ray</author>
						  <year>2003</year>
						  <price>39.95</price>
						</book>

						</bookstore>
            `;

    const xPath = '/bookstore/book[year > 2006]';

    const getElementByXPath = function(xmlString, xPath) {
        		// 1) Deserialize the XML string into DOM parser
                const xmlDomParser = (new DOMParser()).parseFromString(xmlString, 'text/xml');
                
                // 2) Filter by xPath using document.evaluate() method
                const iterator = xmlDomParser.evaluate(xPath, xmlDomParser, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
                
                // 3) Iterate over the iterator
                let node, nodes = [];
                while ((node = iterator.iterateNext()) !== null) {
                    nodes.push(node);
                }
                
                return nodes;
    }

    console.log(getElementByXPath(xmlString, xPath));

})();

