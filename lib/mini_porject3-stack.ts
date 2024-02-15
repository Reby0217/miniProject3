import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as iam from 'aws-cdk-lib/aws-iam';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class MiniPorject3Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // make an S3 bucket that enable versioning and encryption
    const bucket = new cdk.aws_s3.Bucket(this, 'MiniProj3', {
      versioned: true,
      encryption: cdk.aws_s3.BucketEncryption.KMS_MANAGED,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      enforceSSL: true
    });
    
    bucket.grantRead(new iam.AccountRootPrincipal());

  }
}
