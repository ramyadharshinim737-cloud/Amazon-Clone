pipeline {
    agent any
    stages {
        stage('Pull Code') { steps { checkout scm } }
        stage('Clean Ports') { 
            steps { sh 'sudo docker rm -f $(sudo docker ps -aq) || true' } // Port conflict-ah avoid panna
        }
        stage('Deploy Amazon Clone') { 
            steps { sh 'sudo docker-compose up -d --build' } 
        }
    }
}