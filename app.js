function changeLinkedin(val){

  var linkedin = document.getElementById("linkedinLink").value; //get input val
  var linkedinWebsite = 'https://www.linkedin.com/in/'; //linkedin home url

  //regex for each condition
  var conditionOne = new RegExp('linkedin');
  var conditionTwo = new RegExp('https');
  var conditionThree = new RegExp('www');

  // test each condition if it's included in the linkedinWebsite variable
  if( conditionOne.test(linkedin) || conditionTwo.test(linkedin) || conditionThree.test(linkedin) ){
    console.log('with condition');
    document.getElementById('linkedinLink').value = linkedin;

  }else{
    console.log('just the user id');
    // home url add on
    return document.getElementById('linkedinLink').value = linkedinWebsite + linkedin;
  }
}

function changeGithub(val){

  var github = document.getElementById("githubLink").value; //get input val
  var githubWebsite = 'https://github.com/';  //github home url

  //regex for each condition
  var conditionOne = new RegExp('github');
  var conditionTwo = new RegExp('https');
  var conditionThree = new RegExp('www');

  // test each condition if it's included in the githubWebsite variable
  if( conditionOne.test(github) || conditionTwo.test(github) || conditionThree.test(github) ){
    console.log('w/ condition');
    document.getElementById('githubLink').value = github;
  }else{
    // home url add on
    console.log('w/ userid');
    document.getElementById('githubLink').value = githubWebsite + github;
  }//end of if/else cond.
}
