job('NodeJS Docker example') {
    scm {
        	git('https://github.com/deekshakulal/NodeJS_test.git') {  node -> // is hudson.plugins.git.GitSCM
            node / gitConfigName('DSL User')
            node / gitConfigEmail('jenkins-dsl@learn.com')

	}
    }
    triggers {
        scm('H/5 * * * *')
    }
    wrappers {
        nodejs('nodejs') // this is the name of the NodeJS installation in 
                         // Manage Jenkins -> Configure Tools -> NodeJS Installations -> Name
    }
    steps {
        dockerBuildAndPublish {
            repositoryName('dkulal/sigma')
            tag('${GIT_REVISION,length=9}')
            registryCredentials('dockerhub') //---- we need tp configure this in seed JOB configurations
            forcePull(false)
            forceTag(false)
            createFingerprints(false)
            skipDecorate()
        }
    }
}
