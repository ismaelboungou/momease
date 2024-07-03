import { Module } from "@nestjs/common";
import { ParentingTipModuleBase } from "./base/parentingTip.module.base";
import { ParentingTipService } from "./parentingTip.service";
import { ParentingTipController } from "./parentingTip.controller";
import { ParentingTipResolver } from "./parentingTip.resolver";

@Module({
  imports: [ParentingTipModuleBase],
  controllers: [ParentingTipController],
  providers: [ParentingTipService, ParentingTipResolver],
  exports: [ParentingTipService],
})
export class ParentingTipModule {}
