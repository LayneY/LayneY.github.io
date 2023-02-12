const journals = [
    '{"date":"6-Feb-2023", "tc":"I worked on making the class selection page transfer the data to the scheduler page, so I had to figure out the best way to do it and implement it. I ended up using localStorage in JavaScript which worked very well and was not overly complicated.", "sc":"This week we were working on a different assignment in class, so sometimes it is challenging to work together in class. We have resolved this by telling people what they should do through Discord so everyone can be on the same page.", "ic":"It seems that many conflicts between team members have been resolved. We are also working more as a team this week in class, so there aren\'t many interpersonal challenges this week."}',
    '{"date":"30-Jan-2023", "tc":"We did not work that much this week due to the ice storm.", "sc":"We used Discord for communication this week to get past the challenge of the ice storm preventing us from meeting in class.", "ic":"There were not many challenges interpersonally this week on the team."}',
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
