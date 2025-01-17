import { getVersion3Client } from './getClient';
import { Constants } from '../constants';

export const createAgileProject = async () => {
  const client = getVersion3Client();

  const myself = await client.myself.getCurrentUser();

  return client.projects.createProject({
    key: Constants.testAgileProjectKey,
    name: Constants.testAgileProjectName,
    leadAccountId: myself.accountId,
    projectTypeKey: 'software',
    projectTemplateKey: 'com.pyxis.greenhopper.jira:gh-simplified-agility-scrum',
  });
};
