import { Module } from "@nestjs/common";
import { CommunityForumModuleBase } from "./base/communityForum.module.base";
import { CommunityForumService } from "./communityForum.service";
import { CommunityForumController } from "./communityForum.controller";
import { CommunityForumResolver } from "./communityForum.resolver";

@Module({
  imports: [CommunityForumModuleBase],
  controllers: [CommunityForumController],
  providers: [CommunityForumService, CommunityForumResolver],
  exports: [CommunityForumService],
})
export class CommunityForumModule {}
