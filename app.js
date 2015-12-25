function changeLinkedin(val){

  var linkedin = document.getElementById("linkedinLink").value;
  var linkedinWebsite = 'https://www.linkedin.com/in/';

  document.getElementById('linkedinLink').value = linkedinWebsite + linkedin;

  console.log(linkedin);
}

function changeGithub(val){

  var github = document.getElementById("githubLink").value;
  var githubWebsite = 'https://github.com/';

  document.getElementById('githubLink').value = githubWebsite + github;

  console.log(github);
}
