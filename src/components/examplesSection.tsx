import { motion } from "motion/react"
import { SectionHeading } from "@/components/sectionHeading.tsx"
import { TerminalWindow } from "@/components/terminalWindow.tsx"
import {
  SEARCH_EXAMPLE,
  OFFICERS_EXAMPLE,
  INFO_EXAMPLE,
} from "@/data/terminalExamples.ts"

const EXAMPLES = [
  { title: "Search companies", lines: SEARCH_EXAMPLE },
  { title: "Look up officers", lines: OFFICERS_EXAMPLE },
  { title: "Company profile", lines: INFO_EXAMPLE },
] as const

export const ExamplesSection = () => (
  <section className="py-24 px-6" id="examples">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading
          title="See it in action"
          subtitle="Real output from the CLI. What you see is what you get."
        />
      </motion.div>

      <div className="space-y-8">
        {EXAMPLES.map((example, index) => (
          <motion.div
            key={example.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <p className="text-text-muted text-sm font-medium mb-3">
              {example.title}
            </p>
            <TerminalWindow lines={example.lines} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)
