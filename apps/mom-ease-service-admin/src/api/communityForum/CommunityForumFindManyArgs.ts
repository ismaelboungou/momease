import { CommunityForumWhereInput } from "./CommunityForumWhereInput";
import { CommunityForumOrderByInput } from "./CommunityForumOrderByInput";

export type CommunityForumFindManyArgs = {
  where?: CommunityForumWhereInput;
  orderBy?: Array<CommunityForumOrderByInput>;
  skip?: number;
  take?: number;
};
