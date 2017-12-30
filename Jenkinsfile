#!groovy

node {
    stage ('Prepare') {
      try {
        git branch: 'master', url: 'git@github.com:jana-uoft/personal_budget.git'
      }
      catch (e) { if (!errorOccurred) {errorOccurred = e} }
    }


    stage ('Deploy React') {
      try {
        nodejs('NodeJS8.2.1') {
          dir ('budget_app') {
            sh 'yarn'
            sh 'yarn build'
          }
        }
        sh 'sudo cp -t /var/www/budget.jana19.org/public_html/ budget_app/build/* -f -r'
        sh 'sudo mkdir -p /var/www/budget.jana19.org/public_html/mode_modules'
        sh 'sudo cp -t /var/www/budget.jana19.org/public_html/node_modules budget_app/node_modules -f -r'
      }
      catch (e) { if (!errorOccurred) {errorOccurred = e} }
    }


    stage ('Deploy Rails') {
      try {
        sh 'sudo cp -t /var/www/budget-api.jana19.org/public_html/ budget_api/* -f -r'
        dir ('/var/www/budget-api.jana19.org/public_html') {
          sh 'bundle install --deployment --without development test'
          sh 'echo "production:\n\tclients:\n\t\tdefault:\n\t\t\tdatabase: budget_api_production\n\t\t\thosts:\n\t\t\t\t- localhost:27017" >> config/mongoid.yml'
          sh 'echo "production:\n\tsecret_key_base: `bundle exec rake secret`" >> config/mongoid.yml'
        }
      }
      catch (e) { if (!errorOccurred) {errorOccurred = e} }
    }


    stage ('Clean') {
      deleteDir()
    }
}
