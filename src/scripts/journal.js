
 const JournalEntries = [
    {
        date: "04/11/2019",
        Concepts: "css",
        entry: "I learned css today",
        mood: "normal"
    },
    {
        date: "04/12/2019",
        Concepts: "javascripts",
        entry: "I learned javascripts today",
        mood: "sad"
    },
    {
        date: "04/13/2019",
        Concepts: "objects",
        entry: "I learned objects today",
        mood: "happy"
    }
 ]

    const jEntry = document.querySelector(".jEntry");

const makeJournalEntryComponent = (journalEntry) => {
    return `
    <h2>${journalEntry.date}</h2>
    <h3>${journalEntry.Concepts}</h3>
    <p>${journalEntry.entry}</p>
    <p>${journalEntry.mood}</p>
    
    ` 
    
}
const renderJournalEntries = (entries) =>{
    entries.forEach(entry => {
      item = makeJournalEntryComponent(entry)
      jEntry.innerHTML += item  
    });
}
renderJournalEntries(JournalEntries)
    
    
    


    
    