# CV
A HTML5 CV template that supports multiple languages. Check out a live demo [here](https://mathias.mellemstuen.no?language=english).

## Installation 
1. Copy the files in the [source](https://github.com/mathiasmellemstuen/CV/tree/master/source) directory to your webserver. 
2. Edit the [data.json](https://github.com/mathiasmellemstuen/CV/blob/master/source/data.json) file, look at how it's done in [example/data.json](https://github.com/mathiasmellemstuen/CV/blob/master/example/data.json). You can optionally change colors and other properties. 
3. Add [glossonym of language].svg files to the [Icons](https://github.com/mathiasmellemstuen/CV/blob/master/source/Icons/) folder if you have added more languages than english. Overwrite [english.svg](https://github.com/mathiasmellemstuen/CV/blob/master/source/Icons/english.svg) if you want another flag for english.
4. Overwrite [profilepicture.png](https://github.com/mathiasmellemstuen/CV/blob/master/source/Images/profilepicture.png) with your profile picture.

## The data.json configuration file
[data.json](https://github.com/mathiasmellemstuen/CV/blob/master/source/data.json) makes it easy to make changes to the webpage quickly. Colors, text and languages can be changed/added in this file.

data.json: 
```json
{
    "title":"CV - YOURNAME",
    "header":"Curriculum Vitae",
    "languages": ["english", "language1"],
    "person": {
        "name":"yourname",
        "title":{"language1":"your title", "english":"your title"},
        "phone":"00000000",
        "email":"email",
        "github": {
            "display":"githubtext",
            "hyperlink":"githublink"
        },
        "website": {
            "display":"website text", 
            "hyperlink":"website link"
        },
        "birth":"19990113",
        "driving_license":"driving license"
    },
    "education": [
        {
            "date":{"start":"12.08.2019", "end":"dd"},
            "language1":{"header":"header in lang 1","description":"description in lang1"},
            "english":{"header":"header in english","description":"description in english"}
        }
    ],
    "work": [
        {
            "date":{"start":"12.08.2019", "end":"dd"},
            "language1":{"header":"header in lang 1","description":"description in lang1"},
            "english":{"header":"header in english","description":"description in english"}
        }
    ],
    "words": {
        "aboutme": {"language1": "", "english": "About me"},
        "name": {"language1": "", "english": "Name"},
        "age": {"language1": "", "english": "Age"},
        "born": {"language1": "", "english": "Born"},
        "drivinglicense": {"language1": "", "english": "Driving license"},
        "education": {"language1": "", "english": "Education"},
        "jobexperience": {"language1": "", "english": "Job experience"},
        "language": {"language1":"", "english":"Select a language"}
    },
    "colors": {
        "body_background":"#eeeeee",
        "main_background":"white", 
        "extra_content_background":"#3D5561",
        "print_button_background":"#4C6977",
        "print_button_background_hover":"#314B4D",
        "main_h1_background":"#3D5561",
        "modal_background":"rgba(0, 0, 0, 0.6)",
        "modal_content_background":"rgba(255, 255, 255, 0.90)",
        "select_language_button_hover":"rgb(218, 218, 218)",
        "main_box_shadow_color":"rgba(0,0,0,0.75)",
        "extra_content_color":"white",
        "link_color":"white",
        "print_button_color":"white",
        "main_h1_color":"white",
        "mobile_extra_content_color":"black",
        "mobile_link_color":"black",
        "header-lines-color":"black",
        "modal-close-button-color":"black"
    }
}
```
## Contribution
I'm very happy for pull requests with more features or resolved issues. 
