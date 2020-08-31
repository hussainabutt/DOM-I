const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
//nav bar
const navbar = document.getElementsByTagName('a');
console.log(navbar);
navbar[0].textContent = siteContent["nav"]["nav-item-1"];
navbar[1].textContent = siteContent["nav"]["nav-item-2"];
navbar[2].textContent = siteContent["nav"]["nav-item-3"];
navbar[3].textContent = siteContent["nav"]["nav-item-4"];
navbar[4].textContent = siteContent["nav"]["nav-item-5"];
navbar[5].textContent = siteContent["nav"]["nav-item-6"];
//center h1
const cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent["cta"]["img-src"]);
const header = document.querySelector("h1");
header.textContent = siteContent["cta"]["h1"];
header.style.color="red";
const button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];
button.style.color="blue";
button.style.border="1px solid blue";
//h4s
const middletitles = document.getElementsByTagName("h4");
console.log(middletitles);
middletitles[0].textContent = siteContent["main-content"]["features-h4"]
middletitles[1].textContent = siteContent["main-content"]["about-h4"]
middletitles[2].textContent = siteContent["main-content"]["services-h4"]
middletitles[3].textContent = siteContent["main-content"]["product-h4"]
middletitles[4].textContent = siteContent["main-content"]["vision-h4"]
middletitles[5].textContent = siteContent["contact"]["contact-h4"]
//p tags
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);
paragraphs[0].textContent = siteContent["main-content"]["features-content"]
paragraphs[1].textContent = siteContent["main-content"]["about-content"]
paragraphs[2].textContent = siteContent["main-content"]["services-content"]
paragraphs[3].textContent = siteContent["main-content"]["product-content"]
paragraphs[4].textContent = siteContent["main-content"]["vision-content"]
paragraphs[5].textContent = siteContent["contact"]["address"]
paragraphs[6].textContent = siteContent["contact"]["phone"]
paragraphs[7].textContent = siteContent["contact"]["email"]
paragraphs[8].textContent = siteContent["footer"]["copyright"]
//splash image
const splashimage = document.getElementById("middle-img");
splashimage.setAttribute('src', siteContent["main-content"]["middle-img-src"])
//appending
let p = document.createElement("Memes");
document.body.appendChild(p);
