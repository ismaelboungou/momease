import { CommunityForum } from "../communityForum/CommunityForum";
import { Event } from "../event/Event";
import { Location } from "../location/Location";
import { Milestone } from "../milestone/Milestone";
import { ParentingTip } from "../parentingTip/ParentingTip";
import { ProductReview } from "../productReview/ProductReview";
import { Resource } from "../resource/Resource";
import { JsonValue } from "type-fest";
import { UserProfile } from "../userProfile/UserProfile";

export type User = {
  communityForums?: Array<CommunityForum>;
  createdAt: Date;
  email: string | null;
  events?: Array<Event>;
  firstName: string | null;
  id: string;
  joinedDate: Date | null;
  lastName: string | null;
  locations?: Array<Location>;
  milestones?: Array<Milestone>;
  parentingTips?: Array<ParentingTip>;
  productReviews?: Array<ProductReview>;
  resources?: Array<Resource>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  userProfiles?: Array<UserProfile>;
};
