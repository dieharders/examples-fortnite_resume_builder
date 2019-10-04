# Deprecated
This project uses the LinkedIn v1 API. Since they introduced v2, LinkedIn has restricted access to user data returned to just a subset of what was accessible before. Since this project relied on fetching a user's work history, it no longer makes sense to maintain it moving forward without an Enterprise level subscription to LinkedIn.

# Fortnite Resume Builder

![Preview](https://github.com/dieharders/examples-fortnite_resume_builder/blob/master/images/preview.jpg)

## [Try Live Demo](https://example-fortnite-resume.web.app/)
This example grabs a user's publically available LinkedIn profile and formats the info as a resume matching Fortnite's design style. The webpage asks the user to allow the app access to their LinkedIn account and then proceeds to grab the 'Basic Profile' and 'Positions' fields available to developers.

Be sure to replace the LinkedIn API key in the [brackets] with your own key found at the bottom of the html page.

**Note: I have not included the large font. If you would like to achieve the same look you can find an open source alternative or buy the font, it's called Burbank.

***Note: Registered LinkedIn app developers currently only have access to a user's Basic Profile data meaning only a subset of the entire profile is exposed (for example only the first position is returned). Only partnered (Paid) developers gain access to the rest of the info.

There are also Twitter and Facebook share buttons thrown in for fun.
