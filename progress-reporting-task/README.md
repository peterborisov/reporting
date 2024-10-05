### Reportings application

The application to displays a wizard-like UI, consisting of three pages:

- Reports - list of available reports,
- Export Format - lists all the export formats,
- Result - downloads the selected report in the requested export format,.

### Tech Stack

React, NextJS, Typescript, redux-toolkit, TailwindCSS, flowbite-react, heroicons

### Commands

- `pnpm i` - install dependencies
- `pnpm dev` run app locally (`localhost:3000`)
- `pnpm build` build app
- `pnpm lint` run lint

### Folder structure

### URL's

- http://localhost:3000 - starting point
- http://localhost:3000/{id} - report details
- http://localhost:3000/api/reports - endpoint to fetch list of reports
- http://localhost:3000/api/reports/{id} - endpoint to fetch report by id
