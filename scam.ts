const RULES: [RegExp, string][] = [
  [/(registration|security|training|processing)\s*(fee|deposit|charge)|pay\s*₹|send money|refundable/i, "Asks for money from the candidate"],
  [/whatsapp|telegram/i, "Contact only through a messaging app"],
  [/gmail\.com|yahoo\.com|outlook\.com/i, "Uses a free email address instead of a company domain"],
  [/no (interview|experience)|instant (offer|joining)|guaranteed (job|placement)/i, "Promises a job without a real selection process"],
  [/earn.{0,20}(per day|daily)|work from home.{0,30}(₹|rs)/i, "Unrealistic earnings claim"],
];
export const scanText = (t: string) => RULES.filter(([r]) => r.test(t)).map(([, m]) => m);
