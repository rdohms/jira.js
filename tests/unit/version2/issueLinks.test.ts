import test from "ava";
import * as sinon from 'sinon';
import { IssueLinks, Version2Client } from '../../../src/version2';

const client = new Version2Client({ host: '' });
const sendRequestStub = sinon.stub(client, 'sendRequest');
let issueLinks = new IssueLinks(client);

test('linkIssues should calls without parameters', t => {
  issueLinks.linkIssues();

  t.truthy(sendRequestStub.calledOnce);

  const callArgument = sendRequestStub.getCall(0).args[0];

  t.deepEqual(callArgument.data, {});
});
