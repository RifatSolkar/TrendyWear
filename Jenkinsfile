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
                bat 'docker build -t trendywear-app .'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker run -d -p 8080:80 trendywear-app'
            }
        }
    }
}
