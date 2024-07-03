import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ParentingTipServiceBase } from "./base/parentingTip.service.base";

@Injectable()
export class ParentingTipService extends ParentingTipServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
