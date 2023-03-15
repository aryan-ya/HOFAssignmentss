
//  linkedin validate in js


function validateLinkedInURL(url) {
    const urlRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
    return urlRegex.test(url);
  }
  
  const url1 = 'https://www.linkedin.com/in/aryan-yadav';
  const url2 = 'https://www.linkedin.com/in/aryan_raj/';
  
  
  if (validateLinkedInURL(url1)) {
    console.log(`${url1} is a valid LinkedIn profile URL.`);
  } else {
    console.log(`${url1} is not a valid LinkedIn profile URL.`);
  }
  if (validateLinkedInURL(url2)) {
    console.log(`${url2} is a valid LinkedIn profile URL.`);
  } else {
    console.log(`${url2} is not a valid LinkedIn profile URL.`);
  }
  