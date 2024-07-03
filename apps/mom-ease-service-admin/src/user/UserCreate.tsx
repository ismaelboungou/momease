import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
  PasswordInput,
} from "react-admin";

import { CommunityForumTitle } from "../communityForum/CommunityForumTitle";
import { EventTitle } from "../event/EventTitle";
import { LocationTitle } from "../location/LocationTitle";
import { MilestoneTitle } from "../milestone/MilestoneTitle";
import { ParentingTipTitle } from "../parentingTip/ParentingTipTitle";
import { ProductReviewTitle } from "../productReview/ProductReviewTitle";
import { ResourceTitle } from "../resource/ResourceTitle";
import { UserProfileTitle } from "../userProfile/UserProfileTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="communityForums"
          reference="CommunityForum"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommunityForumTitle} />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" type="email" />
        <ReferenceArrayInput
          source="events"
          reference="Event"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EventTitle} />
        </ReferenceArrayInput>
        <TextInput label="First Name" source="firstName" />
        <DateTimeInput label="joinedDate" source="joinedDate" />
        <TextInput label="Last Name" source="lastName" />
        <ReferenceArrayInput
          source="locations"
          reference="Location"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LocationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="milestones"
          reference="Milestone"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MilestoneTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="parentingTips"
          reference="ParentingTip"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ParentingTipTitle} />
        </ReferenceArrayInput>
        <PasswordInput label="Password" source="password" />
        <ReferenceArrayInput
          source="productReviews"
          reference="ProductReview"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductReviewTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="resources"
          reference="Resource"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ResourceTitle} />
        </ReferenceArrayInput>
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Username" source="username" />
        <ReferenceArrayInput
          source="userProfiles"
          reference="UserProfile"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserProfileTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
