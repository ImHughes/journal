getData().then(myParsedEntries => {

    myParsedEntries.forEach(entry => {

        document.querySelector(".jEntry").innerHTML +=
         `
  <h2>${entry.date}</h2>
  <h2>${entry.concept}</h2>
  <p>${entry.entry}</p>
  <p>${entry.mood}</p>
  `
    })
});