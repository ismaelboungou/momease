import { CommunityForumCreateNestedManyWithoutUsersInput } from "./CommunityForumCreateNestedManyWithoutUsersInput";
import { EventCreateNestedManyWithoutUsersInput } from "./EventCreateNestedManyWithoutUsersInput";
import { LocationCreateNestedManyWithoutUsersInput } from "./LocationCreateNestedManyWithoutUsersInput";
import { MilestoneCreateNestedManyWithoutUsersInput } from "./MilestoneCreateNestedManyWithoutUsersInput";
import { ParentingTipCreateNestedManyWithoutUsersInput } from "./ParentingTipCreateNestedManyWithoutUsersInput";
import { ProductReviewCreateNestedManyWithoutUsersInput } from "./ProductReviewCreateNestedManyWithoutUsersInput";
import { ResourceCreateNestedManyWithoutUsersInput } from "./ResourceCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { UserProfileCreateNestedManyWithoutUsersInput } from "./UserProfileCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  communityForums?: CommunityForumCreateNestedManyWithoutUsersInput;
  email?: string | null;
  events?: EventCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  joinedDate?: Date | null;
  lastName?: string | null;
  locations?: LocationCreateNestedManyWithoutUsersInput;
  milestones?: MilestoneCreateNestedManyWithoutUsersInput;
  parentingTips?: ParentingTipCreateNestedManyWithoutUsersInput;
  password: string;
  productReviews?: ProductReviewCreateNestedManyWithoutUsersInput;
  resources?: ResourceCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
  userProfiles?: UserProfileCreateNestedManyWithoutUsersInput;
};
