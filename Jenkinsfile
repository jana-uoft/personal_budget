#!groovy

node {
  stage ('Prepare') {
    try {
      git branch: 'master', url: 'git@github.com:jana-uoft/personal_budget.git'
    }
    catch (e) { if (!errorOccurred) {errorOccurred = e} }
  }

  stage ('Build React') {
    try {
      nodejs('NodeJS8.2.1') {
        dir ('budget_app') {
          sh 'yarn'
          sh 'yarn build'
        }
      }
    }
    catch (e) { if (!errorOccurred) {errorOccurred = e} }
  }

  stage ('Setup Web Folder Stucture') {
    try {
      echo "Copy React public build into Rails public folder"
      sh 'cp budget_app/build/* ./budget_api/public/ -f -r'
      echo "Copy node modules folder into Rails public directory"
      sh 'cp budget_app/node_modules ./budget_api/public/node_modules -f -r'
    }
    catch (e) { if (!errorOccurred) {errorOccurred = e} }
  }

  stage ('Deploy') {
    try {
      // sh 'sudo cp -t /var/www/budget.jana19.org/public_html/ budget_api/* -f -r'
      sh 'sudo cp -t /var/www/budget.jana19.org/public_html/ budget_api/public/* -f -r'
    }
    catch (e) { if (!errorOccurred) {errorOccurred = e} }
  }

  stage ('Clean') {
    deleteDir()
  }
}
