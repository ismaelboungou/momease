import { CommunityForum as TCommunityForum } from "../api/communityForum/CommunityForum";

export const COMMUNITYFORUM_TITLE_FIELD = "title";

export const CommunityForumTitle = (record: TCommunityForum): string => {
  return record.title?.toString() || String(record.id);
};
