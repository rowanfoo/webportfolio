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
                 echo 'deploy portfolio-webserver'
                 bat 'cd ,'
                 bat 'docker ps -a'
            }
        }

         stage('DOCKER TIME'){
            steps{
                script {
                   image_name="localhost:5000/rowanf/webportfolio"
                   dockerImage =  docker.build (image_name)
                    bat 'cd ,'
                     dockerImage.push()

                }
            }
        }

       stage('Deploy') {
            steps {
               echo "ALL IS DONE"
                 script {

                  bat 'docker rm -f webportfolio'
                  bat """docker run -d --restart=unless-stopped --name webportfolio  -p 12000:4200 localhost:5000/rowanf/webportfolio"""

                }
            }
       }
    }






}




