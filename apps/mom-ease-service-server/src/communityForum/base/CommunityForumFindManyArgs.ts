/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CommunityForumWhereInput } from "./CommunityForumWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CommunityForumOrderByInput } from "./CommunityForumOrderByInput";

@ArgsType()
class CommunityForumFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CommunityForumWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CommunityForumWhereInput, { nullable: true })
  @Type(() => CommunityForumWhereInput)
  where?: CommunityForumWhereInput;

  @ApiProperty({
    required: false,
    type: [CommunityForumOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CommunityForumOrderByInput], { nullable: true })
  @Type(() => CommunityForumOrderByInput)
  orderBy?: Array<CommunityForumOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CommunityForumFindManyArgs as CommunityForumFindManyArgs };