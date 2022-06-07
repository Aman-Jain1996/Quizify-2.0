<div align="center">
  <img src="https://res.cloudinary.com/ajain8479/image/upload/v1654598915/Quiz%20App/mroythcnetafjruvqz23.png" height="100" width="100" alt="logo"/>
  <h1>Quizify</h1>
    <p>If you are a football fan like me, try this fun quiz <a href="https://quizify-app.netlify.app">Quizify</a> around football under different categories and show it around to your friends by leading the leaderboard.</p>
 </div>

## How to run the app locally?

```
$ git https://github.com/Aman-Jain1996/Quizify-2.0.git
$ cd Quizify-2.0
$ npm install
$ npm start
```

## Different Screens in this project

- Home Page
- Authentication (Login and Signup) Pages
- Password Reset Page
- Categories Page
- Rules Page
- Questions Page
- Result Page with Answers & Score
- Leaderboard
- Profile Page
- 404 (Not Found) Page

## Features in the project

- Authentication is done using firebase authentication. All the forms are implemented with proper validations.
- Password Reset is also implemented using firebaseusing which the reset link will be sent to registered email.
- Categories Page list down all the available categories and user can choose the quiz to play by selecting category.
- Share Quiz - User can share the link of the quiz with others and link is copied to clipboard.
- Rules page displaying the rules for the Quiz
- Question Page with a MCQ question with 4 options.
- A timer is implemented for every question.
- User can quit Quiz any point if time while giving Quiz.
- Results page displaying the correct answers, answers chosen by user and the score for that quiz.
- Leaderboard displaying the scores of all participants with their rank, name and total score.
- Profile Page shows the logged in user details and their recent quiz results.
- Toggle Theme - Light and Dark Theme.
- Theme is made persistent using localStorage.
- Alerts in the app to notify the users about success/failure operations.
- Loader is shown while the information is fetched.
- 404 Page as the fallback for the routes not present in the project.
- All the screens are Responsive.

## Tech Stack and Tools

- React JS
- Firebase for Backend
- React Router v6
- useContext + useReducer
- Tailwind CSS library for design system
- Git For Version Control
- Netlify for Deployment
- Cloudinary for Image Hosting

## Live Link

[Quizify](https://quizify-app.netlify.app)
