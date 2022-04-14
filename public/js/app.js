// Functional Logic //////////////////////////

// Check undefined results
function chkUndefined(result) {
    if (result !== 0 && (result === undefined || result == '')) {
        result = '?';
    }
    return result;
}

// Retrieved Profile info
const renderProfile = (data) => {
    console.log(data);

    // Display data
    const name = chkUndefined(data.name);
    $('#name').html(name);

    const headline = chkUndefined(data.company);
    $('#headline').html(headline);

    const city = chkUndefined(data.location);
    $('#location').html(city);

    const followers = chkUndefined(data.followers);
    $('#followers').html(followers);

    const following = chkUndefined(data.following);
    $('#following').html(following);

    const repos = chkUndefined(data.public_repos);
    $('#repos').html(repos);

    const gists = chkUndefined(data.public_gists);
    $('#gists').html(gists);

    const profilePic = data.avatar_url;
    if (profilePic == undefined) {
        profilePic = null;
        // Hide pic container if no pic url
        $('#profile').hide();
    }
    $('#profile').attr('src', profilePic);

    const summary = chkUndefined(data.bio);
    $('#summary').html(summary);

    // Job Experience
    const company = chkUndefined(data.company);
    $('#company').html(company);

    // Hide/show menus
    $('#ProfileMenu').show();
    $('#LoginMenu').hide();
}

const getProfileDetails = () => {
    const name = document.getElementById('username').value;
    fetch(`https://api.github.com/users/${name}`)
    .then(response => response.json()
    .then(data => renderProfile(data))
    )
};

// Interactive Logic //////////////////////////

// Login to Github
$("#login").click(getProfileDetails);

// Share to Twitter
$( "#btn-share-twitter" ).click(function() {
    var shareURL = "http://twitter.com/share?"; //url base
    var params = {
      url: "http://bit.ly/fortnite-resume", 
      text: "I just converted my LinkedIn profile to a Fortnite resume! Now my future employer knows I'm serious....about #FORTNITE! Try it:",
      via: "SpreadShotDev",
      hashtags: "FortniteBR"
    }
    for(var prop in params) shareURL += '&' + prop + '=' + encodeURIComponent(params[prop]);
    window.open(shareURL, '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
});

// Share to Facebook
$( "#btn-share-facebook" ).click(function() {
    var url = 'https://sorob.net/example_projects/fortnite_resume/fortnite-resume.html';
    var text = "I just converted my LinkedIn profile to a Fortnite resume! Now my future employer knows I'm serious....about FORTNITE! Try it: http://bit.ly/fortnite-resume";
    window.open('https://www.facebook.com/sharer/sharer.php?u='+url+'&quote='+text+'&','facebook-share-dialog','width=626,height=436');
    return false;
});