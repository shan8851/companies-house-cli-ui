import type { LucideIcon } from "lucide-react"
import {
  Search,
  Building2,
  Users,
  FileText,
  Shield,
  UserSearch,
  Landmark,
  AlertTriangle,
} from "lucide-react"

type Command = {
  readonly name: string
  readonly fullCommand: string
  readonly description: string
  readonly icon: LucideIcon
  readonly example: string
}

export const COMMANDS: ReadonlyArray<Command> = [
  {
    name: "Company Search",
    fullCommand: "ch search <query>",
    description: "Find any UK registered company by name",
    icon: Search,
    example: 'ch search "Revolut"',
  },
  {
    name: "Company Profile",
    fullCommand: "ch info <number>",
    description: "Address, status, SIC codes, incorporation date",
    icon: Building2,
    example: "ch info 09215862",
  },
  {
    name: "Officers",
    fullCommand: "ch officers <number>",
    description: "Directors, secretaries, appointments, resignations",
    icon: Users,
    example: "ch officers 09215862",
  },
  {
    name: "Filing History",
    fullCommand: "ch filings <number>",
    description: "Annual accounts, confirmation statements, charges",
    icon: FileText,
    example: "ch filings 09215862",
  },
  {
    name: "Beneficial Owners",
    fullCommand: "ch psc <number>",
    description: "Persons with significant control (PSC register)",
    icon: Shield,
    example: "ch psc 09215862",
  },
  {
    name: "Person Search",
    fullCommand: "ch search-person <name>",
    description: "Find someone across all UK companies",
    icon: UserSearch,
    example: 'ch search-person "Nik Storonsky"',
  },
  {
    name: "Charges",
    fullCommand: "ch charges <number>",
    description: "Registered charges and mortgages",
    icon: Landmark,
    example: "ch charges 09215862",
  },
  {
    name: "Insolvency",
    fullCommand: "ch insolvency <number>",
    description: "Insolvency case history and practitioners",
    icon: AlertTriangle,
    example: "ch insolvency 09215862",
  },
] as const
