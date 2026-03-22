export type TerminalLine = {
  readonly type: "prompt" | "output" | "blank"
  readonly text: string
}

export const HERO_EXAMPLE: ReadonlyArray<TerminalLine> = [
  { type: "prompt", text: 'ch search "Revolut"' },
  { type: "blank", text: "" },
  { type: "output", text: "Showing 5 of 12 results." },
  { type: "blank", text: "" },
  { type: "output", text: "1. Revolut Ltd (09215862)" },
  { type: "output", text: "   Status: Active" },
  { type: "output", text: "   Type: Private limited company" },
  { type: "output", text: "   Created: 2014-08-22" },
  { type: "output", text: "   Address: 7 Westferry Circus, London, E14 4HD" },
  { type: "blank", text: "" },
  { type: "output", text: "2. Revolut Payments UK Ltd (10690343)" },
  { type: "output", text: "   Status: Active" },
  { type: "output", text: "   Type: Private limited company" },
  { type: "output", text: "   Created: 2017-03-22" },
  { type: "output", text: "   Address: 7 Westferry Circus, London, E14 4HD" },
]

export const SEARCH_EXAMPLE: ReadonlyArray<TerminalLine> = [
  { type: "prompt", text: 'ch search "Monzo"' },
  { type: "blank", text: "" },
  { type: "output", text: "Showing 5 of 8 results." },
  { type: "blank", text: "" },
  { type: "output", text: "1. Monzo Bank Limited (07446590)" },
  { type: "output", text: "   Status: Active" },
  { type: "output", text: "   Type: Private limited company" },
  { type: "output", text: "   Created: 2010-11-17" },
  { type: "output", text: "   Address: Broadwalk House, 5 Appold Street, London, EC2A 2AG" },
  { type: "blank", text: "" },
  { type: "output", text: "2. Monzo Group Limited (15277984)" },
  { type: "output", text: "   Status: Active" },
  { type: "output", text: "   Type: Private limited company" },
  { type: "output", text: "   Created: 2024-03-01" },
  { type: "output", text: "   Address: Broadwalk House, 5 Appold Street, London, EC2A 2AG" },
]

export const OFFICERS_EXAMPLE: ReadonlyArray<TerminalLine> = [
  { type: "prompt", text: "ch officers 09215862" },
  { type: "blank", text: "" },
  { type: "output", text: "Officers for Revolut Ltd (09215862)" },
  { type: "output", text: "Showing 5 of 12 officers (7 active, 5 resigned)." },
  { type: "blank", text: "" },
  { type: "output", text: "1. STORONSKY, Nikolay (Director)" },
  { type: "output", text: "   Appointed: 2015-07-01" },
  { type: "output", text: "   Nationality: British" },
  { type: "blank", text: "" },
  { type: "output", text: "2. YATSENKO, Vladyslav (Director)" },
  { type: "output", text: "   Appointed: 2015-07-01" },
  { type: "output", text: "   Nationality: Ukrainian" },
  { type: "blank", text: "" },
  { type: "output", text: "3. SHERIDAN, Martin (Director)" },
  { type: "output", text: "   Appointed: 2023-06-15" },
  { type: "output", text: "   Nationality: Irish" },
]

export const INFO_EXAMPLE: ReadonlyArray<TerminalLine> = [
  { type: "prompt", text: "ch info 09215862" },
  { type: "blank", text: "" },
  { type: "output", text: "Revolut Ltd" },
  { type: "output", text: "Company Number:  09215862" },
  { type: "output", text: "Status:          Active" },
  { type: "output", text: "Type:            Private limited company" },
  { type: "output", text: "Incorporated:    2014-08-22" },
  { type: "output", text: "Address:         7 Westferry Circus, Canary Wharf" },
  { type: "output", text: "                 London, E14 4HD" },
  { type: "output", text: 'SIC Codes:       64999 - "Financial intermediation n.e.c."' },
  { type: "output", text: "Has Charges:     Yes" },
  { type: "output", text: "Has Insolvency:  No" },
]

export const JSON_EXAMPLE: ReadonlyArray<TerminalLine> = [
  { type: "prompt", text: 'ch search "Revolut" --json | jq .pagination' },
  { type: "blank", text: "" },
  { type: "output", text: "{" },
  { type: "output", text: '  "startIndex": 0,' },
  { type: "output", text: '  "itemsPerPage": 5,' },
  { type: "output", text: '  "totalResults": 12,' },
  { type: "output", text: '  "returnedCount": 5,' },
  { type: "output", text: '  "fetchedAll": false' },
  { type: "output", text: "}" },
]
