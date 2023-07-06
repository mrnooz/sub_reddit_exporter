/*
this javascript will work on consolle (press F12 in your browser)
you have to find the div name that contain subreddit list under home button with the inspector button
and put in place of
#DIVCONTAINERonSUBREDDITLISTunderHOME

NZ
*/



const htmlCode = document.documentElement.outerHTML;

const parser = new DOMParser();
const doc = parser.parseFromString(htmlCode, "text/html");

const divElement = doc.querySelector('/* DIVCONTAINERonSUBREDDITLISTunderHOME */');
const linkElements = divElement.querySelectorAll('a');

linkElements.forEach((linkElement) => {
  const name = linkElement.textContent;
  const link = linkElement.getAttribute('href');
  console.log('Nome:', name);
  console.log('Link:', link);
});