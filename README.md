# Sub Reddit Exporter
to export your list of sub reddit with links
useful if you want to create a new account following the same old subs

 (❁´◡`❁)
##<b>HOW TO USE IT</b>

This JavaScript will work on the console (press F12 in your browser). 

Before that, you have to find the div name that contains the subreddit list 
look for it under the home button using the inspector tool ..find it 

and replace it with #DIVCONTAINERonSUBREDDITLISTunderHOME inside the code


###_how it works_

This code is designed to extract information from an HTML document and print out the names and corresponding links of certain elements on a webpage. Here's a description of the code:

The variable htmlCode stores the outer HTML content of the document's root element (document.documentElement).

A new DOMParser object is created, which allows parsing HTML strings into a document object.

The DOMParser's parseFromString method is used to parse the htmlCode string as HTML, creating a new doc document object.

The variable divElement selects a specific div container on the webpage, identified by a comment directive ('/* DIVCONTAINERonSUBREDDITLISTunderHOME */'). This div likely contains a list of elements of interest.

The querySelectorAll method is used on the divElement to retrieve all anchor elements (<a>) within the div container. These anchor elements typically represent hyperlinks.

The forEach method is called on the linkElements collection, allowing iteration over each anchor element.

Within the loop, the textContent property retrieves the text content (name) of the current anchor element, while the getAttribute method retrieves the value of the 'href' attribute (link).

The names and links are then printed to the console using console.log, with 'Nome:' (Italian for 'Name') and 'Link:' as prefixes for clarity.

In summary, this code retrieves the names and links of anchor elements within a specific div container on a webpage and prints them to the console.
