#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CodepipelinedemoCdkStack } from '../lib/codepipelinedemo_cdk-stack';

const app = new cdk.App();
new CodepipelinedemoCdkStack(app, 'CiCdAwsPipelineDemoStack', {
  env: {
    account: '569618970581',
    region: 'eu-north-1',
  }
});

app.synth();