# GEOM Monorepo

This monorepo contains the backend and frontend code for the GEOM project, as well other additional artifacts. The structure of the monorepo is as follows:

- **Server (`express-geom`)**: Node.js backend using `express`.
- **Client (`react-geom`)**: React.js frontend built using Create React App (CRA).
- **Data**: Data-related scripts and resources.
- **Legacy**: Archived or deprecated code from previous versions.

## Project Structure 📂

- **`/server`**: Contains the Express backend, including routes, controllers, models, and configuration files.
- **`/client`**: Contains the React frontend, including components, hooks, contexts, and configuration files.
- **`/data`**: Contains data processing scripts and datasets.
- **`/legacy`**: Contains legacy code from earlier iterations of the project.

### Server (express-geom)

Backend package: *Node.js* project using `express`

TODO: expand description

### Client (react-geom)

Frontend package: *React.js* project built using CRA

TODO: expand description

### Data

TODO: expand description

### Legacy

TODO: expand description

<!-- CODING RULES -->
## Coding Rules

These are the rules in terms of code:

### Branches

Main branches are:

* `master`: production branch
* `develop`: active development branch

### Branch Naming Convention

The naming convention for branches should take into account the ticket management system as well as the type of the current ticket(`GEOM-ABC`). 

Some examples for branches could be:
* `feat/GEOM-1/add-feature-x`
* `fix/GEOM-2/fix-issue-y`
* `test/GEOM-3/update-test-z`

### Commit Message Format

**prefix**: Prefix is suggested based on the [Angular convention](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines):

* build: Changes that affect the build system or external dependencies 🛠
* chore: updating elements but no production code change
* ci: Changes to our CI configuration files and scripts
* docs: Documentation only changes 📚
* feat: A new feature ✨
* fix: A bug fix 🐛
* perf: A code change that improves performance
* refactor: A code change that neither fixes a bug nor adds a feature 📦
* style: Changes that do not affect the meaning of the code 💎
* test: Adding missing tests or correcting existing tests 🚨

**scope**: The scope of the change, limited to the following:
  - `express-geom`
  - `react-geom`
  - `data`
  - `legacy`
  - `public`

**subject**: a short, imperative tense description of the change

Some examples for commit messages could be:
* feat(react-geom): add Visualization context
* chore(express-geom): update package.json
* refactor(react-geom): update App component

### Code Review Process
1. Create a pull request (PR) for your branch following branch naming convention
2. Ensure your branch is up-to-date with develop
3. Add labels and request a review from at least one team member
4. Check tests, logic and style
5. Get approval before merging

## Troubleshooting

This project heavily relied on npm, in case of issues check [npm status](https://status.npmjs.org/)