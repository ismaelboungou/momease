import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ParentingTipService } from "./parentingTip.service";
import { ParentingTipControllerBase } from "./base/parentingTip.controller.base";

@swagger.ApiTags("parentingTips")
@common.Controller("parentingTips")
export class ParentingTipController extends ParentingTipControllerBase {
  constructor(protected readonly service: ParentingTipService) {
    super(service);
  }
}
