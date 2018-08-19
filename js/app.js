// Globals
var ln_loaded = false;

// Check LinkedIn Javascript library loaded
function linkedIn_Loaded() {
    console.log("LinkedIn API Loaded");
    ln_loaded = true;
}
// Logged In
function OnLinkedInAuth() {
    console.log('Logged In!');
    getProfile();
}
// Check undefined results
function chkUndefined(result) {
    if (result == undefined || result == '') {
        result = '?';
    }
    return result;
}
// Retrieved Profile info
function displayProfiles(data) {
    console.log( 'Profile info: ' + JSON.stringify(data) );
    // Display data
    let member = data.values[0];

    let firstName = chkUndefined(member.firstName);
    let lastName = chkUndefined(member.lastName);
    let name = firstName + ' ' + lastName;
    $('#name').html(name);

    let headline = chkUndefined(member.headline);
    $('#headline').html(headline);

    let city = chkUndefined(member.location.name);
    let country = chkUndefined(member.location.country.code);
    $('#location').html(city + ', ' + country);

    let conns = chkUndefined(member.numConnections);
    $('#connections').html(conns);

    let profession = chkUndefined(member.industry);
    $('#profession').html(profession);

    let profile = chkUndefined(member.pictureUrl);
    $('#profile').attr('src', profile);

    let summary = chkUndefined(member.summary);
    $('#summary').html(summary);

    // Job Experience
    let currPositionCompany = chkUndefined(member.positions.values[0].company.name);
    $('#positions-company').html(currPositionCompany);
    let positionTitle = chkUndefined(member.positions.values[0].title);
    let currPositionSumm = chkUndefined(member.positions.values[0].summary);
    if (currPositionSumm !== undefined) {
        let splitted = currPositionSumm.split("\n");
        var maxLines = splitted.length;
        var parsedText = '<b>Title</b>: ' + positionTitle + '<br>';
        for (let i = 0; i < maxLines; i++) {
            parsedText += splitted[i] + '<br>';
        }
    } else {
        var parsedText = '<b>No Experience Listed</b>';
    }
    $('#positions-summary').html(parsedText);

    let positionMonth = member.positions.values[0].startDate.month;
    let positionYear = chkUndefined(member.positions.values[0].startDate.year);
    var months = [ "January", "February", "March", "April", "May", "June", 
               "July", "August", "September", "October", "November", "December" ];

    var positionMonthName = chkUndefined(months[positionMonth]);
    $('#positions-date').html(positionMonthName + ' ' + positionYear + ' - Current');

    // Hide/show menus
    $('#ProfileMenu').show();
    $('#LoginMenu').hide();
}
function getProfile() {
    if (ln_loaded) {
        // For other ppl's profiles
        //var url = '/people/~?format=json';
        //IN.API.Raw(url).result(displayProfiles);

        IN.API.Profile('me').fields([
            'first-name', 'last-name',
            'industry',
            'picture-url',
            'specialties',
            'summary',
            'headline',
            'location',
            'num-connections',
            'positions',
            'public-profile-url'
        ]).result(displayProfiles);
    }
}
///////////////////////////////////
// Logic //////////////////////////
///////////////////////////////////
//
// Login to LinkedIn
$( "#login" ).click(function() {
    if (ln_loaded) {
        if ( !IN.User.isAuthorized() ) {
            IN.User.authorize(OnLinkedInAuth);
        } else {
            getProfile();
        }
    }
});
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