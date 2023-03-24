const journals = [
    '{"date":"20-Mar-2023", "tc":"This week we worked on fixing smaller issues and started taking feedback after the school finally sent out the app.", "sc":"There were no scheduling conflicts this week, and we communicated via Discord.", "ic":"There were no interpersonal challenges this week."}',
    '{"date":"13-Mar-2023", "tc":"The school wanted to release the app this week. This was the last week to fix issues and finish the app. I struggled with making courses work with both semesters.", "sc":"We used Discord quite a lot this week as we needed to work outside of school a lot this week. Thi made it easy to communicate and we did not encounter any issues.", "ic":"There were no interpersonal challenges this week. The team worked really well together to finish the app."}',
    '{"date":"27-Feb-2023", "tc":"This week was the last week we had to finish the project so students can begin to use it after spring break. I encountered some challenges in making the scheduler page transfer to the final page for printing, but was able to get it to work with localStorage.", "sc":"This week we communicated primarily over Discord because of SAT Day on Wednesday and the Early Release on Friday.", "ic":"The team worked really well together this week and there were not any interpersonal challenges."}',
    '{"date":"20-Feb-2023", "tc":"We had to rewrite the way classes are saved so that way the scheduler can get the correct class periods for each course. We are also having to figure out how to separate the courses by semester.", "sc":"We only had three days of school this week, so it made it challenging to talk and meet with people face to face.", "ic":"There were not many challenges between team members this week."}',
    '{"date":"13-Feb-2023", "tc":"This week some of our JavaScript code stopped working and some team members messed around with the code. We overcame this challenge by using GitHub to revert the changes to a working state.", "sc":"This week we had other assignments we had to work on, which made it difficult and stressful to work on our assignments and on the project.", "ic":"There were not many challenges between team members this week."}',
    '{"date":"6-Feb-2023", "tc":"I worked on making the class selection page transfer the data to the scheduler page, so I had to figure out the best way to do it and implement it. I ended up using localStorage in JavaScript which worked very well and was not overly complicated.", "sc":"This week we were working on a different assignment in class, so sometimes it is challenging to work together in class. We have resolved this by telling people what they should do through Discord so everyone can be on the same page.", "ic":"It seems that many conflicts between team members have been resolved. We are also working more as a team this week in class, so there aren\'t many interpersonal challenges this week."}',
    '{"date":"30-Jan-2023", "tc":"We did not work that much this week due to the ice storm.", "sc":"We used Discord for communication this week to get past the challenge of the ice storm preventing us from meeting in class.", "ic":"There were not many challenges interpersonally this week on the team."}',
    '{"date":"", "tc":"", "sc":"", "ic":""}',
    '{"date":"", "tc":"", "sc":"", "ic":""}',
    '{"date":"", "tc":"", "sc":"", "ic":""}',
    '{"date":"", "tc":"", "sc":"", "ic":""}',
    '{"date":"", "tc":"", "sc":"", "ic":""}',
    '{"date":"", "tc":"", "sc":"", "ic":""}',
    '{"date":"", "tc":"", "sc":"", "ic":""}'
]

for (let i = 0; i < journals.length; i++) {
    let obj = JSON.parse(journals[i])
    let jDate = obj.date
    let tc = obj.tc
    let sc = obj.sc
    let ic = obj.ic

    var journalDiv = document.getElementById("journalDiv")

    if (jDate != "") {
	var date = document.createElement("h2")
	date.appendChild(document.createTextNode(jDate))
	date.setAttribute("class", "essaySubtitle")
	journalDiv.appendChild(date)
	
	var techChall = document.createElement("h3")
	techChall.setAttribute("class", "journalSubtitle")
	techChall.appendChild(document.createTextNode("Technical Challenges"))
	journalDiv.appendChild(techChall)
	
	var techPara = document.createElement("p")
	techPara.setAttribute("class", "journalParagraph")
	techPara.appendChild(document.createTextNode(tc))
	journalDiv.appendChild(techPara)

	var schChall = document.createElement("h3")
        schChall.setAttribute("class", "journalSubtitle")
        schChall.appendChild(document.createTextNode("Scheduling Challenges"))
        journalDiv.appendChild(schChall)

        var schPara = document.createElement("p")
        schPara.setAttribute("class", "journalParagraph")
        schPara.appendChild(document.createTextNode(sc))
        journalDiv.appendChild(schPara)

	var intChall = document.createElement("h3")
        intChall.setAttribute("class", "journalSubtitle")
        intChall.appendChild(document.createTextNode("Interpersonal Challenges"))
        journalDiv.appendChild(intChall)

        var intPara = document.createElement("p")
	intPara.setAttribute("class", "journalParagraph")
	intPara.appendChild(document.createTextNode(ic))
        journalDiv.appendChild(intPara)
    }
}
