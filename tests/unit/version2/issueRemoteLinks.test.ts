import test from "ava";
import * as sinon from 'sinon';
import { IssueRemoteLinks, Version2Client } from '../../../src/version2';

const client = new Version2Client({ host: '' });
const sendRequestStub = sinon.stub(client, 'sendRequest');
const issueRemoteLinks = new IssueRemoteLinks(client);

test('createOrUpdateRemoteIssueLink should accept next parameters', t => {
  issueRemoteLinks.createOrUpdateRemoteIssueLink({
    issueIdOrKey: 'issue.key',
    object: {
      url: 'http://localhost/',
      title: 'Title',
      icon: {},
    },
  });

  t.truthy(sendRequestStub.calledOnce);

  const callArgument = sendRequestStub.getCall(0).args[0];

  t.is(callArgument.url, '/rest/api/2/issue/issue.key/remotelink');
  t.deepEqual(callArgument.data, {
    object: {
      url: 'http://localhost/',
      title: 'Title',
      icon: {},
    },
  });
});
