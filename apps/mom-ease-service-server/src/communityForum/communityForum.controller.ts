import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CommunityForumService } from "./communityForum.service";
import { CommunityForumControllerBase } from "./base/communityForum.controller.base";

@swagger.ApiTags("communityForums")
@common.Controller("communityForums")
export class CommunityForumController extends CommunityForumControllerBase {
  constructor(protected readonly service: CommunityForumService) {
    super(service);
  }
}
