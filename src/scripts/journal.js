
 const JournalEntry = [
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

 JournalEntry.push();
 console.log("JournalEntry", JournalEntry);

 const showJournalEntry = (JournalEntry)
        /*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/
const makeJournalEntryComponent = (journalEntry) => {
    return `
    <h1>${journalEntry.date}</h1>
    <h1>${journalEntry.Concepts}</h1>
    <p>${journalEntry.entry}<h1>
    <p>${journalEntry.mood}</p>
    
    ` 
    
}
const renderJournalEntrys = (entrys) =>{
    entrys.forEach(entry => {
      item = makeJournalEntryComponent(entry)
      jEntry.innerHTML += item  
    });
}
renderJournalEntrys(JournalEntry)
    
    
    


    
    