pipeline {

 environment {
     dockerImage = ""
          image_name=""
          name="web-main"
          portno="4200"
          targetport="11000"

  }
    agent any

    tools {
        maven 'maven'
    }


    stages {
        stage('Check out') {
            steps {
                sh 'echo hello internal deploy'
                sh 'pwd'
                 sh 'docker ps -a'
            }
        }

         stage('DOCKER TIME'){
            steps{
                script {
                   image_name="localhost:5000/rowanf/webportfolio"
                   dockerImage =  docker.build (image_name)
                    sh 'pwd'
                     dockerImage.push()

                }
            }
        }

       stage('Deploy') {
            steps {
               echo "ALL IS DONE"
                 script {
                    sh 'docker rm -f webportfolio'
                    sh """docker run -d --restart=unless-stopped --name webportfolio  -p 11000:4200 localhost:5000/rowanf/webportfolio"""
                }
            }
       }
    }






}




