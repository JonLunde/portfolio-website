---
slug: '/projects/bachelors-project'
order: 1
title: "Bachelor's project"
imageFolder: 'Bachelor'
stack: 'Angular, Typescript, Jasmine, .NET Core, C#, MySQL, Bootstrap, GitHub'
gitUrl: ''
websiteUrl: ''
---

Graded B.
A group project where we planned and developed an application that allows residents
of a housing cooperative to upload expenses done on behalf of their housing
cooperative and get reimbursed. A typical use case would be that a resident
is paying for paint for a voluntary repainting of the entrance to the building.  
\
An intuitive and streamlined uploading process collects all the necessary data
in multiple reactive forms and stores it in a state service. The user can at any time 
save the progress to our MySQL database to continue later. When the user has moved through all the
data registration steps he is presented with an embedded PDF displaying the report based on the data. 
The PDF is generated on the .NET Core server, a template in the form of an XML-mapped .docx file lets us dynamically populate it with the data from the user. Then we use a third-party library to convert the document to a PDF.
If the user approves the PDF and every validation is passed, the generated PDF is sent to chosen residents in the housing cooperation for approval through signing. If every party sign the filed expense report it is sent to accounting for reimbursement.  
\
Aside from the huge benefit in acquired  coding skills, this project was also a good practice in planning and working as a team over a longer period. In the beginning we made a minimal viable product (MVP) and wireframes to help us define the requirements specifications. To improve our requirements we had multiple iterations where we made user histories, drew use case diagrams and sequence diagrams. We finished up the planning phase with multiple iterations of prototyping in Figma. All this has provided us invaluable experience in planning a project and tools to use in later projects. We were also conscious of using an agile methodology throughout the development phase and went with Kanban as we felt it fit our project better.  
\
The application is expected to go into production in the late summer of 2021.  
\
PS: There is no GitHub link as the client wants to keep the codebase private.
