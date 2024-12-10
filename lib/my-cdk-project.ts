#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { MyCdkProjectStack } from '../lib/my-cdk-project-stack';

const app = new cdk.App();

new MyCdkProjectStack(app, 'MyCdkProjectStack', {
  env: {
    account: 'AKIA3RYC6DW5GCT4B4N4', // Let CDK infer the account
    region: 'us-east-1',   // Let CDK infer the region
  },
});
