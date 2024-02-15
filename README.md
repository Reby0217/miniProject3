# MiniProject3

## Project Description

This is a project that creates an `S3 Bucket` with the properties of the versioning and encryption using AWS CDK with the help of `AWS CodeWhisperer`. It uses an environment created by `AWS CodeCatalyst` and generates CDK app code in `AWS Cloud 9`.

### Key Steps

1. Sign up for [CodeCatalyst](https://codecatalyst.aws/explore) and sign in.

2. Create a project by selecting `start from scratch` and then create a new environment under the new project. 

3. Choose Cloud9 as the IDE to open the environment.

4. Navigate to AWS IAM and create a new user with the following permissions:
    - `IAMFullAccess`
    - `AmazonS3FullAccess` 
    - `AWSLambda_FullAccess`

5. Create two inline policies for the user with: 
    - `Cloud Formation`
    - `Systems Manager`
    - NOTICE: Select all access.

6. Navigate to `Security Credentials`, create access key under selected user and keep a copy of the access key.

7. Navigate to Cloud 9, and set up your access key using:
``` aws configure```

8. Create a new project directory:
``` mkdir YOUR_PROJECT_NAME```
and then `cd` to the directory.

9. Create to a new TypeScript CDK project using:
```cdk init app --language=typescript ```

10. Use CodeWhisperer to generate code for a S3 Bucket:
    - In `lib/mini_porject3-stack.ts`, use `//make an S3 bucket that enables versioning and encrption` to allow CodeWhisperer to suggest code for creating required S3 Bucket enabling versioning and encryption.
    - In `bin/mini_porject3.ts`, use `//add necessary variables so that a S3 bucket is created and is deployed correctly` to generate necessary variables.

11. After using CodeWhisperer to generate code, compile the typescript file to javascript using:
```npm run build```

12. Take the declarative code in the CDK application and compile it into an AWS CloudFormation template using
```cdk synth```

13. Deploy the CloudFormation template to your AWS account by
```cdk deploy```
    - If there are any errors, run `cdk bootstrap` and then `cdk deploy`.

14. Navigate to AWS S3 to check the S3 bucket and its properties.

### Screenshots
S3 bucket
![bucket](miniPorject3/screenshots/S3 bucket.png)

S3 bucket properties of versioning and encryption
![versioning](miniPorject3/screenshots/ enabled versioning.png)

![encryption](miniPorject3/screenshots/enabled encryption.png)

Creating a User
![user](miniPorject3/screenshots/user.png)

