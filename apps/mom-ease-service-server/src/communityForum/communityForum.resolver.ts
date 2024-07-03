import * as graphql from "@nestjs/graphql";
import { CommunityForumResolverBase } from "./base/communityForum.resolver.base";
import { CommunityForum } from "./base/CommunityForum";
import { CommunityForumService } from "./communityForum.service";

@graphql.Resolver(() => CommunityForum)
export class CommunityForumResolver extends CommunityForumResolverBase {
  constructor(protected readonly service: CommunityForumService) {
    super(service);
  }
}
