import project1 from '../assets/img/Home.PNG';

const projectDetails = [
  {
    title: "Bachelor's project",
    text:
      'Graded B.\n Group project where we developed an application that allow residents of a housing cooperative to upload ' +
      'expenses done on behalf of their housing cooperative and get reimbursed. ' +
      'A typical use case would be that a resident is paying for paint for a voluntary repainting of the entrance to the building.' +
      '\n\nAn intuitive and streamlined uploading process ' +
      'collects all the necessary data in multiple reactive forms and stores it in a state service. That data is used to generate ' +
      'an expense report that is sent to chosen residents in the housing cooperation for approval through signing. If all signees ' +
      'approve of the filed expense report it is sent to accounting for reimbursement. ',
    img: project1,
    imgAlt: 'Home page',
    stack: [
      'Angular',
      'Typescript',
      '.NET Core',
      'C#',
      'HTML/CSS',
      'Bootstrap',
      'GitHub',
    ],
    gitUrl: null,
    websiteUrl: null,
  },
  {
    title: 'Tabber',
    text:
      'Graded B.\n Group project where we developed an application that allow residents of a housing cooperative to upload ' +
      'expenses done on behalf of their housing cooperative and get reimbursed. ' +
      'A typical use case would be that a resident is paying for paint for a voluntary repainting of the entrance to the building.' +
      '\n\nAn intuitive and streamlined uploading process ' +
      'collects all the necessary data in multiple reactive forms and stores it in a state service. That data is used to generate ' +
      'an expense report that is sent to chosen residents in the housing cooperation for approval through signing. If all signees ' +
      'approve of the filed expense report it is sent to accounting for reimbursement. ',
    img: project1,
    imgAlt: 'Home page',
    stack: ['React', 'ExpressJs', 'NodeJs', 'HTML/CSS', 'SCSS', 'GitHub'],
    gitUrl: null,
    websiteUrl: null,
  },
];

export default projectDetails;
