export interface GetQueue {
  /** ID of the service desk whose queues will be returned. This can alternatively be a [project identifier.](#project-identifiers) */
  serviceDeskId: string;
  /** ID of the required queue. */
  queueId: number;
  /** Specifies whether to include each queue's customer request (issue) count in the response. */
  includeCount?: boolean;
}
