// // start contentful connection and render events


// const client = contentful.createClient({
//   accessToken:
//     "96028a28b956299023a49cd3a5a18938f0c6104c71314ac5ae72c7a4266e88e2",
//   space: "6p2l1peqtu1e"
// });

// const pageTitle = document.title;
// const newsCards = document.querySelector("#news");
// const heroSection = document.querySelector("#hero");
// const documentSelector = document.querySelector("#content");
// var pageContentSelection = document.querySelector("#content") !== null;
// var heroSectionSelection = document.querySelector("#hero") !== null;
// var newsCardsSelection = document.querySelector("#news") !== null;

// // ****************!!!!!!TRANSPILE TO BABEL FIRST!!!!!!!*********************

// function fetchNewsItems() {
//   return client
//     .getEntries({
//       content_type: "newsItem",
//       limit: 3
//     })
//     .then(response => response.items)
//     .catch(error => {
//       console.log("\nError occured while fetching entries for news item:");
//       console.error(error);
//     });
// }

// function fetchHeroContent() {
//   return client
//     .getEntries({
//       content_type: "heroContent",
//       limit: 1
//     })
//     .then(response => response.items)
//     .catch(error => {
//       console.log("\nError occured while fetching entries for hero content:");
//       console.error(error);
//     });
// }

// function fetchWebPages() {
//   return client
//     .getEntries({
//       content_type: "webPages",
//       "fields.pageTitle[match]": pageTitle,
//       include: 2
//     })
//     .then(response => response.items)
//     .catch(error => {
//       console.log("\nError occured while fetching entries for news item:");
//       console.error(error);
//     });
// }

// if (pageContentSelection) {
//   fetchWebPages().then(entry => {
//     documentSelector.innerHTML += entry
//       .map(
//         webPages => `
//         <div class="flexslider">
//         <ul class="slides">
//         <li data-thumb="http:${
//           webPages.fields.slideImages[0].fields.file.url
//         }?w=900&h=506&fit=fill">
//           <img src="http:${
//             webPages.fields.slideImages[0].fields.file.url
//           }?w=900&h=506&fit=fill" />
//         </li>
//         <li data-thumb="http:${
//           webPages.fields.slideImages[1].fields.file.url
//         }?w=900&h=506&fit=fill">
//           <img src="http:${
//             webPages.fields.slideImages[1].fields.file.url
//           }?w=900&h=506&fit=fill" />
//         </li>
//         <li data-thumb="http:${
//           webPages.fields.slideImages[2].fields.file.url
//         }?w=900&h=506&fit=fill">
//           <img src="http:${
//             webPages.fields.slideImages[2].fields.file.url
//           }?w=900&h=506&fit=fill" />
//         </li>
//         </ul>
//         </div>
//           <section>
//             ${marked(webPages.fields.pageContent)}
//           </section>`
//       )
//       .join(" ");
//   });
// } else {
//   console.log("no page selector");
// }

// if (heroSectionSelection) {
//   fetchHeroContent().then(heroContent => {
//     heroSection.innerHTML += heroContent
//       .map(
//         heroContent => `
//     <div rec-home-bg>
//       <img src="${heroContent.fields.heroImage.fields.file.url}"
//     sizes="
//       (max-width: 768px) 50vw,
//       100vw"
//     srcset="
//       ${heroContent.fields.mobileImage.fields.file.url} 400w,
//       ${heroContent.fields.heroImage.fields.file.url} 1200w" />
//       </div>
//         <a href="${heroContent.fields.heroLink} ">
//             <h2>${heroContent.fields.heroTitle}</h2>
//         </a>

//     <a href="${heroContent.fields.heroLink} " class="rec-hero__call-to-action">
//         <p>Learn</p>
//         <p>more</p>
//     </a>
//     `
//       )
//       .join("");
//   });
// } else {
//   console.log("no hero selector");
// }

// if (newsCardsSelection) {
//   fetchNewsItems().then(newsItem => {
//     newsCards.innerHTML += newsItem
//       .map(
//         newsItem => `
//     <div class="large-4 medium-12 column tilespacer">
//         <div class="card card-product-hover">
//         <img class="card-image lazy" data-src="${
//           newsItem.fields.newsImage.fields.file.url
//         }?w=300&h=150&fit=fill" alt="news items" />
//             <div class="card-product-hover-details">
//             <p class="card-product-hover-title">${newsItem.fields.newsTitle}</p>
//             <p class="card-product-hover-date">${
//               newsItem.fields.newsDescription
//             }</p>
//             <p class="news-button"><a href="${
//               newsItem.fields.newsLink
//             }"><button>Learn more</button></a></p>
//                 </div>
//             </div>
//         </div>`
//       )
//       .join("");
//     ll.update();
//   });
// } else {
//   console.log("No news selector");
// }

// client
//   .sync({
//     initial: true,
//     nextSyncToken: window.localStorage.getItem("contentfulSyncToken")
//   })
//   .then(response => {
//     const responseObj = JSON.parse(response.stringifySafe());
//     const entries = responseObj.entries;
//     window.localStorage.setItem("contentfulEntries", JSON.stringify(entries));
//     console.log(response.deletedEntries);
//     console.log(response.deletedAssets);
//     // store the new token
//     window.localStorage.setItem("contentfulSyncToken", response.nextSyncToken);
//   });


//   // Destroy placeholder

//   window.addEventListener("load", function(event) {
//     document.getElementById("news").style.visibility = "visible";
//     class ResponsiveBackgroundImage {

//       constructor(element) {
//         this.element = element;
//         this.img = element.querySelector('img');
//         this.src = '';

//         this.img.addEventListener('load', () => {
//           this.update();
//         });

//         if (this.img.complete) {
//           this.update();
//         }
//       }

//       update() {
//         let src = typeof this.img.currentSrc !== 'undefined' ? this.img.currentSrc : this.img.src;
//         if (this.src !== src) {
//           this.src = src;
//           this.element.style.backgroundImage = 'url("' + this.src + '")';

//         }
//       }
//     }

//     let elements = document.querySelectorAll('[rec-home-bg]');
//     for (let i = 0; i < elements.length; i++) {
//       new ResponsiveBackgroundImage(elements[i]);
//     }
//   });

//   function load() {
//     console.log("Placeholders destroyed");
//     document.getElementById("placeholders").style.display = "none";
//   }

//   window.onload = load;
