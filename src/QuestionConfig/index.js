const QuestionConfig = [

  [
    // quiz 01
    [
      {
        id: 1,
        question: 'What are your goals?',
        options: [
          'Get more conversions',
          'Get more phone leads',
          'Lower cost per conversion',
          'All of the above',
          'Other...',
        ],
      },
      {
        id: 2,
        question: 'Where do you advertise?',
        options: [
          'Nationally',
          'Locally',
          'Internationally',
          'Other...',
        ],
      },
    ],
    [
      {
        id: 3,
        question: 'Do you want leads or sales?',
        options: [
          'Leads',
          'Sales',
          'Both, I sell a service and a product',
          'Not sure',
        ],
      },
      {
        id: 4,
        question: 'What’s your monthly PPC ad spend?',
        options: [
          '$0 - $1,000',
          '$1,001 - $5,000',
          '$5,001 - $25,00',
          '$25,001 - $100,000',
          '$100,001+',
        ],
      },
    ],
  ],
  [
    // quiz 02
    [
      {
        id: 1,
        question: 'What are your goals?',
        options: [
          'Get more conversions',
          'Get more phone leads',
          'Lower cost per conversion',
          'All of the above',
          'Other...',
        ],
      },
      {
        id: 2,
        question: 'Where do you advertise?',
        options: [
          'Nationally',
          'Locally',
          'Internationally',
          'Other...',
        ],
      },
    ],
    [
      {
        id: 3,
        question: 'Do you want leads or sales?',
        options: [
          'Leads',
          'Sales',
          'Both, I sell a service and a product',
          'Not sure',
        ],
      },
      {
        id: 4,
        question: 'What’s your monthly PPC ad spend?',
        options: [
          '$0 - $1,000',
          '$1,001 - $5,000',
          '$5,001 - $25,00',
          '$25,001 - $100,000',
          '$100,001+',
        ],
      },
    ],
    [
      {
        // page 3
        id: 5,
        question: 'Step 3 - Random question ?',
        options: ['Yes', 'No'],
      },
    ],
    [
      [
        {
          previous: 'Yes',
          questions: [
            {
              // page 5
              id: 6,
              question: 'If you selected YES in the previous question, question 1',
              options: [
                'Leads',
                'Sales',
                'Both, I sell a service and a product',
                'Not sure',
              ],
            },
            {
              // page 5
              id: 7,
              question: 'If you selected YES in the previous question, question 2',
              options: [
                '$0 - $1,000',
                '$1,001 - $5,000',
                '$5,001 - $25,00',
                '$25,001 - $100,000',
                '$100,001+',
              ],
            },
          ],
        },
      ],
      [
        {
          previous: 'No',
          questions: [
            {
              // page 5
              id: 6,
              question: 'If you selected NO in the previous question, question 1',
              options: [
                'Leads',
                'Sales',
                'Both, I sell a service and a product',
                'Not sure',
              ],
            },
            {
              // page 5
              id: 7,
              question: 'If you selected NO in the previous question, question 2',
              options: [
                '$0 - $1,000',
                '$1,001 - $5,000',
                '$5,001 - $25,00',
                '$25,001 - $100,000',
                '$100,001+',
              ],
            },
          ],
        },
      ],
    ],

  ],
];

const personalQuestionConfig = [
  {
    key: 'website',
    question: "What's your website?",
  },
  {
    key: 'name',
    question: 'whats your name?',
  },
  {
    key: 'email',
    question: "What's your email?",
  },
  {
    key: 'phoneNo',
    question: "What's your number?",
  },
];

export { personalQuestionConfig };

export default QuestionConfig;
