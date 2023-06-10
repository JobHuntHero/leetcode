pipeline {
  agent {
    docker {
      image 'mcr.microsoft.com/playwright:v1.17.2-focal'
    }
  }
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
      post {
        success {
          archiveArtifacts(artifacts: 'homepage-*.png', followSymlinks: false)
          sh 'rm -rf *.png'
        }
      }
   }
}
