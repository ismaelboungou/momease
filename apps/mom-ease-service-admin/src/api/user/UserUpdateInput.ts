import { CommunityForumUpdateManyWithoutUsersInput } from "./CommunityForumUpdateManyWithoutUsersInput";
import { EventUpdateManyWithoutUsersInput } from "./EventUpdateManyWithoutUsersInput";
import { LocationUpdateManyWithoutUsersInput } from "./LocationUpdateManyWithoutUsersInput";
import { MilestoneUpdateManyWithoutUsersInput } from "./MilestoneUpdateManyWithoutUsersInput";
import { ParentingTipUpdateManyWithoutUsersInput } from "./ParentingTipUpdateManyWithoutUsersInput";
import { ProductReviewUpdateManyWithoutUsersInput } from "./ProductReviewUpdateManyWithoutUsersInput";
import { ResourceUpdateManyWithoutUsersInput } from "./ResourceUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { UserProfileUpdateManyWithoutUsersInput } from "./UserProfileUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  communityForums?: CommunityForumUpdateManyWithoutUsersInput;
  email?: string | null;
  events?: EventUpdateManyWithoutUsersInput;
  firstName?: string | null;
  joinedDate?: Date | null;
  lastName?: string | null;
  locations?: LocationUpdateManyWithoutUsersInput;
  milestones?: MilestoneUpdateManyWithoutUsersInput;
  parentingTips?: ParentingTipUpdateManyWithoutUsersInput;
  password?: string;
  productReviews?: ProductReviewUpdateManyWithoutUsersInput;
  resources?: ResourceUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
  userProfiles?: UserProfileUpdateManyWithoutUsersInput;
};
