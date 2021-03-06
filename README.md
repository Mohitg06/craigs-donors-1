# Craig's Donors: Social Networking for Charities and Their Generous Supporters

## Install Node.js
First install nvm (Node Version Manager) by running
```wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash```
from your terminal. If you are using windows, this command will only work from git-bash, not Powershell or anything else. If you do not have git-bash, see [nvm installation instructions](https://github.com/nvm-sh/nvm#install--update-script).
Then do `node --version` to confirm that you are running Node. As of this writing the latest recommended stable version is v12.18.2 LTS (i.e. Long Term Support).
Next install yarn package manager to assist with frontend/React dependencies: `npm install --global yarn`.

## Install dependencies:
From craigs-donors directory, do
```
npm install     # installs backend/server dependencies    
cd client       # change directory into ./craigs-donors/client
yarn            # installs frontend/client dependencies
```

This app consists of two concurrent servers: React.js runs one on 3000, and Express.js runs one on 5000.

## To launch Express.js server:
```npm run server```
```curl -i localhost:3000/hello```

## To launch React.js frontend server:
```npm run client```

## To run both concurrently for full app features:
```npm run dev```



## Authentication
An unauthenticated user gets this landing page
![](https://github.com/craigs-donors/craigs-donors/blob/master/client/src/assets/images/landing.png)

We used AWS Cognito to authenticate donors and charities - they are different groups in Cognito User Pool, Based on whether they are a donor or a charity, they get different screens where they can either make a donation (donor) or visualize the donations (charity). 

![](https://github.com/craigs-donors/craigs-donors/blob/master/client/src/assets/images/authentication.png)

They can either authenticate via federated identities like Facebook, Google, Amazon or the direct Sign up Form. 

## Netlify

As we developed new features in several branches, we integrated our github with netlify so all PRs would first deploy to netlify and once the deploy and tests passed, we merged them to master. That way we would make sure that our changes were not breaking earlier features.

![](https://github.com/craigs-donors/craigs-donors/blob/master/client/src/assets/images/netlify.png)


## Dockerizing App

Ensure you have docker on your machine.
https://docs.docker.com/get-docker/

Create Docker Image by running the below command
docker build -t craigshelp .

Test the locally built docker image:

docker run -p 3000:3000 -d {container_id}
Run localhost:3000 in your browser

### Push Docker Image to ECR
Login to ECR:
aws ecr get-login --no-include-email --region us-east-1

Tag & push  the Docker Image

docker tag craigshelp:latest 453101909370.dkr.ecr.us-east-1.amazonaws.com/craigs:1.0

docker push 453101909370.dkr.ecr.us-east-1.amazonaws.com/craigs:1.0

### Deploy as ECS Service
Right now we are deplpoying the service manually, future enchancments include having a CICD pipleine to deploy and run the ECS task.

We have created an ALB and associated ACM with it for https

![](https://github.com/craigs-donors/craigs-donors/blob/master/Images/ALB.png)

### Validation
Once the service  is running,
launch: https://craigsdonor.com 
