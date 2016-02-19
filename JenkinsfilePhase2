#!/usr/bin/groovy
def envStage = "${env.JOB_NAME}-staging"

node ('kubernetes'){

  git 'https://github.com/jmlambert78/node-example'

  stage 'canary release'
    if (!fileExists ('Dockerfile')) {
      writeFile file: 'Dockerfile', text: 'FROM 172.30.76.253:80/default/node-example:1b10428 '
	  writeFile file: 'Dockerfile',text: 'WORKDIR /usr/src/app'
	  writeFile file: 'Dockerfile',text: 'COPY . /usr/src/app'
	  writeFile file: 'Dockerfile',text: 'CMD [ "npm", "start" ]l'
    }

    def newVersion = performCanaryRelease {}
  
    def rc = getKubernetesJson {
      port = 8080
      label = 'node'
      icon = 'https://cdn.rawgit.com/fabric8io/fabric8/dc05040/website/src/images/logos/nodejs.svg'
      version = newVersion
      imageName = 'tartempion'
    }

  stage 'Rolling upgrade Staging'
    kubernetesApply(file: rc, environment: envStage)

}
