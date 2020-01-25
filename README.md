# _Beep Boop_

#### _Creates a new string of numbers or words based on user input, Jan 2020_

#### By _**K. Wicz**_


## Preview

![Landing Page Preview](/img/landing-page.png)

**[View Live Preview](https://kwicz.github.io/beep-boop/)**

## Description

_This fun little web application is designed to accept a number from a user (x) and then return a range of numbers from 0 - x. However, if a user inputs a number containing "1", "2", or "3", the output will instead be "beep", "boop", or "I'm sorry Dave, I can't do that", respectively._

## Project Specifications

| Behavior | Input | Output |
|---|:---:|:---:|
|User submits empty string|""|Error message|
|Return a range of numbers from 0 to the user's numerical input| "4"|"0, 1, 2, 3, 4"|
|Return "beep" when user inputs a number containing "1"|"10"|"beep"|
|Return "boop" when user inputs a number containing "2", even if the number contains "1"|"120"|"boop"|
|Return "I'm sorry Dave, I'm afraid I can't do that." when user inputs a number containing "3", even if the number contains "1" or "2"|"1230"|"I'm sorry Dave, I'm afraid I can't do that."|
|Return customized output when user inputs name and number with 3|{name}, 33|"I'm sorry {name}, I'm afraid I can't do that."


## Setup/Installation Requirements

_In Terminal_
* _Navigate to where you want this application to be saved, i.e.:_
```cd desktop```
* _Clone the file from GitHub with HTTPS_
```git clone https://github.com/kwicz/beep-boop.git```
* _Open file in your preferred text editor_
* On Mac: ```open -a {your text editor} beep-boop```
* _On Windows: ```beep-boop```_


## Known Bugs

_No known bugs at this time._

## Support and contact details

_Have a bug or an issue with this application? [Open a new issue](https://github.com/kwicz/beep-boop/issues) here on GitHub._

## Technologies Used

* _HTML & CSS_
* _Javascript & jQuery_
* _Bootstrap 4_

### License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2020 **_K.Wicz_**