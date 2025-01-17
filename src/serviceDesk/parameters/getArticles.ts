export interface GetArticles {
  serviceDeskId: string;
  /** The string used to filter the articles. */
  query: string;
  /**
   * If set to true matching query term in the title and excerpt will be highlighted using the @@@hl@@@term@@@endhl@@@ syntax. Default: false.
   */
  highlight?: boolean;
  /**
   * The starting index of the returned objects. Base index: 0. See the
   * [Pagination](https://developer.atlassian.com/cloud/jira/service-desk/rest/intro/#pagination) section for more details.
   */
  start?: number;
  /**
   * The maximum number of items to return per page. Default: 100. See the
   * [Pagination](https://developer.atlassian.com/cloud/jira/service-desk/rest/intro/#pagination) section for more details.
   */
  limit?: number;
}
