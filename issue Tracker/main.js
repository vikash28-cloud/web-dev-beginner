
document.getElementById('issueInputForm').addEventListener("submit",saveIssue);

function saveIssue(e){
    let issueDesc = document.getElementById('issueDescr').value;
    let issueSaverity = document.getElementById('saverityInput').value;
    let issueAssignedTo = document.getElementById('issueAssignedTo').value;
    let issueId = chance.guid();
    let issueStatus = 'open';

    let issue = {
        id: issueId,
        description: issueDesc,
        saverity: issueSaverity,
        assignedTo: issueAssignedTo,
        status: issueStatus

    }

    if(localStorage.getItem('issues')==null){
        let issues = [];
        issues.push(issue);
        localStorage.setItem('issues',JSON.stringify(issues));
    }
    else
    {
        let = issues = JSON.parse(localStorage.getItem('issues'));
        issues.push(issue);
        localStorage.setItem('issues',JSON.stringify(issues));

    }

    document.getElementById('issueInputForm').reset();

    fetchIssues();
    e.preventDefault();

}

function setStatusClosed(id){
    let issues= JSON.parse(localStorage.getItem('issues'));

    for(let i=0;i<issues.length;i++){
        if(issues[i].id==id){
            issues[i].status = 'closed';
        }
    }

    localStorage.setItem('issues',JSON.stringify(issues));
    fetchIssues();
}

function deleteIssue(id){
    let issues= JSON.parse(localStorage.getItem('issues'));

    for(let i=0;i<issues.length;i++){
        if(issues[i].id==id){
            issues.splice(i,1);
        }
    }

    localStorage.setItem('issues',JSON.stringify(issues));
    fetchIssues();

}




function fetchIssues(){
    var issues = JSON.parse(localStorage.getItem("issues"));
    var issuesList = document.getElementById('issuesList');
    issuesList.innerHTML = '';
    for(let i=0;i<issues.length;i++){
        let id = issues[i].id;
        var desc = issues[i].description;
        let saverity = issues[i].saverity;
        var assignedTo = issues[i].assignedTo;
        let status = issues[i].status;

        issuesList.innerHTML += '<div class= "mt-5 p-3 bg-secondary text-black rounded">'+
                                '<h6>Issue ID: '+ id + '</h6>'+
                                '<h5><span class="badge bg-primary">'+status+'</span></h5>'+
                                '<h3>'+ desc +'</h3>'+
                                '<p><i class="fa-sharp fa-regular fa-clock"></i> ' + saverity + '</p>'+
                                '<p><i class="fa-regular fa-user"></i> ' + assignedTo + '</p>'+
                                '<a href="#" onclick="setStatusClosed(\''+id+'\')" class="btn btn-warning">close</a> '+
                                '<a href="#" onclick="deleteIssue(\''+id+'\')" class="btn btn-danger">Delete</a>'


                    

    }
}