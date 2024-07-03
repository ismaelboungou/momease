import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CommunityForumServiceBase } from "./base/communityForum.service.base";

@Injectable()
export class CommunityForumService extends CommunityForumServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
