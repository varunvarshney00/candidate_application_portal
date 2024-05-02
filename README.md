
# Run this project in your Local system

1. Create a new folder.
2. Rename it to whatever you like.
3. Inside the folder, open vs code.
4. In the terminal of vs code write: 
- git clone https://github.com/varunvarshney00/candidate_application_portal.git

5. After that, open the vs code, in the cloned folder.
6. Open the terminal and write 
- npm install
7. After that write 
- npm run dev
8. Open your local host, mine was  http://localhost:5173/
9. I hope you have not encountered any errors.

#### BUILDING STUFF WITH ❤️ 

# Candidate Application Portal

The task is to create a candidate application platform that allows users to view job listings, filter jobs based on various criteria, and implement infinite scroll for a seamless browsing experience. The platform provides a user-friendly interface for viewing and applying to jobs. 

The behavior is infinite scroll and not a load more button.

## Requirements

#### Job Cards: 
Each job listing is displayed as a card containing the following information:
- Posted how many days ago (static text)
- Job title (coming from API)
- Company name (Static text)
- Location (coming from API)
- Job description (limited to a certain number of characters with an option to expand) (coming from API)
- Experience required (coming from API)
- View Job (Link to the official website of Weekday)



## Filters

Filters: Implement filters to allow users to refine the job listings based on:
- Min experience
- Company name (API didn't have the company name)
- Location
- Remote/on-site
- Tech stack (API didn't have the information)
- Role
- Min base pay

## Infinite Scroll and Responsiveness

Infinite Scroll: 
- Implemented infinite scroll to load additional job listings as the user scrolls down the page. 
- The platform fetches and display more jobs automatically without requiring the user to click on a "Load More" button.

Responsive Design: 
- Ensured that the platform is responsive and works well on different screen sizes, including mobile devices.


## Tech Stack

- ReactJs
- Redux
- CSS
- Material UI (ShadCN)
- Tailwind CSS for responsiveness and other styles
- Vite
- Vercel (For deployment)
## FAQs

Some of the data coming in the API is having null values. What am I supposed to do with that null data?
- The null values have been added as part of the assignment. 
- You are required to handle null values. 
- If some value is null it should not be seen in the UI of that job card. 
- While filtering if you have applied a particular filter and the value corresponding to that filter is null in the jobDetails you need to filter that out.


There is no option to send filters in the api provided?
- The filters need to be applied on the frontend to only those jobs which have been loaded till now. 
- You don’t have to show all the jobs present in the DB with that filter. 
- But if the user scrolls down and new jobs are added then only show those jobs which fits the filter criteria. 
- Changing filters should not call any API.

## Authors

- [@varunvarshney](https://github.com/varunvarshney00?tab=repositories)
- [@email](varunvarshney6882@gmail.com)


## API Reference

For the jobs data you need to integrate this api which takes limit and offset as request body parameter and returns the list of jobs and totalCount of jobs present.

...................................................................

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const body = JSON.stringify({
 "limit": 10,
 "offset": 0
});

const requestOptions = {
 method: "POST",
 headers: myHeaders,
 body
};

fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
 .then((response) => response.text())
 .then((result) => console.log(result))
 .catch((error) => console.error(error));

...................................................................



