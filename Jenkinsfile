pipeline {
  agent { docker { image 'mcr.microsoft.com/playwright/python:v1.34.0-jammy' } }
  stages {
    stage('install playwright & test') {
      steps {
        sh '''
          cd test

          npm i -D @playwright/test
          npx playwright install

          npx playwright test --help

          npx playwright test --list
          npx playwright test
        '''
      }
    }
  }
}
