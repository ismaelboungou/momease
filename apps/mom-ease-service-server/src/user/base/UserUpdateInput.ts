/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CommunityForumUpdateManyWithoutUsersInput } from "./CommunityForumUpdateManyWithoutUsersInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsDate,
} from "class-validator";
import { Type } from "class-transformer";
import { EventUpdateManyWithoutUsersInput } from "./EventUpdateManyWithoutUsersInput";
import { LocationUpdateManyWithoutUsersInput } from "./LocationUpdateManyWithoutUsersInput";
import { MilestoneUpdateManyWithoutUsersInput } from "./MilestoneUpdateManyWithoutUsersInput";
import { ParentingTipUpdateManyWithoutUsersInput } from "./ParentingTipUpdateManyWithoutUsersInput";
import { ProductReviewUpdateManyWithoutUsersInput } from "./ProductReviewUpdateManyWithoutUsersInput";
import { ResourceUpdateManyWithoutUsersInput } from "./ResourceUpdateManyWithoutUsersInput";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { UserProfileUpdateManyWithoutUsersInput } from "./UserProfileUpdateManyWithoutUsersInput";

@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CommunityForumUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => CommunityForumUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => CommunityForumUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  communityForums?: CommunityForumUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: () => EventUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => EventUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => EventUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  events?: EventUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  joinedDate?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: () => LocationUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => LocationUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => LocationUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  locations?: LocationUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => MilestoneUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => MilestoneUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => MilestoneUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  milestones?: MilestoneUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => ParentingTipUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ParentingTipUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ParentingTipUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  parentingTips?: ParentingTipUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string;

  @ApiProperty({
    required: false,
    type: () => ProductReviewUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ProductReviewUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ProductReviewUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  productReviews?: ProductReviewUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => ResourceUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ResourceUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ResourceUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  resources?: ResourceUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  roles?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string;

  @ApiProperty({
    required: false,
    type: () => UserProfileUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => UserProfileUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => UserProfileUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  userProfiles?: UserProfileUpdateManyWithoutUsersInput;
}

export { UserUpdateInput as UserUpdateInput };
