## Para iniciar o projeto

Execute os comandos abaixo de dentro da pasta do projeto

Instalando as dependências

   ```bash
   yarn
   ```

Iniciando o servidor local

   ```bash
   yarn develop
   ```

   O site pode ser acessado em: `http://localhost:8000/`

### Create new questionare
To create a new questionare you need to follow the structure below:

+ Simple page with select question
    + Question


              [
                id: 1,
                question: 'Question 1 group 2',
                options: [
                  'Get more conversions',
                  'Get more phone leads',
                  'Lower cost per conversion',
                  'All of the above',
                  'Other...',
              ],


+ Dual page questions with check previous answer
    + Question

          [
            {
              id: 2,
              question: 'Question 3 group 2',
              options: ['Yes', 'No'],
            },
          ],

    + Questions based on the previous answer

          [
            [
              {
                previous: 'Yes',
                questions: [
                  {
                    id: 3,
                    question: 'Question 1 based on the previous answer - Yes',
                    options: [
                      'Leads',
                      'Sales',
                      'Both, I sell a service and a product',
                      'Not sure',
                    ],
                  },
                  {
                    id: 4,
                    'Question 2 based on the previous answer - Yes',
                    options: [
                      'Leads',
                      'Sales',
                      'Both, I sell a service and a product',
                      'Not sure',
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
                    id: 3,
                    'Question 1 based on the previous answer - No'
                    options: [
                      'Leads',
                      'Sales',
                      'Both, I sell a service and a product',
                      'Not sure',
                    ],
                  },
                  {
                    id: 4,
                    'Question 2 based on the previous answer - No'
                    options: [
                      'Leads',
                      'Sales',
                      'Both, I sell a service and a product',
                      'Not sure',
                    ],
                  },
                ],
              },
            ],
          ],



