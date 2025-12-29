
export enum SecurityType {
  CULTURAL = "文化安全",
  FOOD = "糧食安全",
  MILITARY = "軍事安全",
  TERRITORIAL = "國土安全",
  POLITICAL = "政治安全",
  ECOLOGICAL = "生態安全",
  TECHNOLOGICAL = "科技安全",
  SOCIAL = "社會安全",
  PUBLIC = "公共安全",
  LEGAL = "法治安全"
}

export interface Festival {
  id: string;
  month: number;
  day: number;
  name: string;
  lunarDate: string;
  intro: string;
  securityPoint: string;
  securityType: SecurityType;
  imageUrl: string;
  color: string;
  icon: string;
}
