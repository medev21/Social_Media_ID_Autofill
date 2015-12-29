function changeLinkedin(val){

  var linkedin = document.getElementById("linkedinLink").value; //get input val
  var linkedinWebsite = 'https://www.linkedin.com/in/'; //linkedin home url
  var conditionOne = new RegExp('linkedin');
  var conditionTwo = new RegExp('https');
  var conditionThree = new RegExp('www');

  if( conditionOne.test(linkedin) || conditionTwo.test(linkedin) || conditionThree.test(linkedin) ){
    console.log('with condition');
    document.getElementById('linkedinLink').value = linkedin;

  }else{
    console.log('just the user id');
    return document.getElementById('linkedinLink').value = linkedinWebsite + linkedin;
  }
}

function changeGithub(val){

  var github = document.getElementById("githubLink").value; //get input val
  var githubWebsite = 'https://github.com/';  //github home url
  var conditionOne = new RegExp('github');
  var conditionTwo = new RegExp('https');
  var conditionThree = new RegExp('www');

  //test if var github contains github home url
  if( conditionOne.test(github) || conditionTwo.test(github) || conditionThree.test(github) ){
    console.log('w/ condition');
    document.getElementById('githubLink').value = github;
  }else{
    document.getElementById('githubLink').value = githubWebsite + github;
    console.log('w/ userid');
  }//end of if/else cond.
}
