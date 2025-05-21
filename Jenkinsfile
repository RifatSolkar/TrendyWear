pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/RifatSolkar/TrendyWear.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t trendywear-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 8080:80 trendywear-app'
            }
        }
    }
}
