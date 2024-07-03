import { ParentingTip as TParentingTip } from "../api/parentingTip/ParentingTip";

export const PARENTINGTIP_TITLE_FIELD = "id";

export const ParentingTipTitle = (record: TParentingTip): string => {
  return record.id?.toString() || String(record.id);
};
