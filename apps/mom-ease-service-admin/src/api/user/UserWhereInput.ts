import { CommunityForumListRelationFilter } from "../communityForum/CommunityForumListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { LocationListRelationFilter } from "../location/LocationListRelationFilter";
import { MilestoneListRelationFilter } from "../milestone/MilestoneListRelationFilter";
import { ParentingTipListRelationFilter } from "../parentingTip/ParentingTipListRelationFilter";
import { ProductReviewListRelationFilter } from "../productReview/ProductReviewListRelationFilter";
import { ResourceListRelationFilter } from "../resource/ResourceListRelationFilter";
import { UserProfileListRelationFilter } from "../userProfile/UserProfileListRelationFilter";

export type UserWhereInput = {
  communityForums?: CommunityForumListRelationFilter;
  email?: StringNullableFilter;
  events?: EventListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  joinedDate?: DateTimeNullableFilter;
  lastName?: StringNullableFilter;
  locations?: LocationListRelationFilter;
  milestones?: MilestoneListRelationFilter;
  parentingTips?: ParentingTipListRelationFilter;
  productReviews?: ProductReviewListRelationFilter;
  resources?: ResourceListRelationFilter;
  username?: StringFilter;
  userProfiles?: UserProfileListRelationFilter;
};
