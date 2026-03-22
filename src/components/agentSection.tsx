import { motion } from "motion/react"
import { Cpu, Braces, Terminal } from "lucide-react"
import { SectionHeading } from "@/components/sectionHeading.tsx"
import { TerminalWindow } from "@/components/terminalWindow.tsx"
import { JSON_EXAMPLE } from "@/data/terminalExamples.ts"

const AGENT_FEATURES = [
  {
    icon: Braces,
    title: "Stable JSON envelope",
    description: "Consistent structure across every command",
  },
  {
    icon: Terminal,
    title: "Every command supported",
    description: "Add --json to any command for machine output",
  },
  {
    icon: Cpu,
    title: "Pipe to jq or feed to LLMs",
    description: "Works with OpenClaw, Claude Desktop, any agent that can shell out",
  },
] as const

export const AgentSection = () => (
  <section className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading title="Built for AI agents" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-text-muted text-lg leading-relaxed mb-8">
            Every command supports a{" "}
            <code className="text-accent font-mono text-sm px-1.5 py-0.5 rounded bg-accent-glow">
              --json
            </code>{" "}
            flag that outputs a stable, normalized envelope. Pagination metadata,
            command context, and clean data — ready to pipe into{" "}
            <code className="text-terminal-output font-mono text-sm">jq</code>{" "}
            or feed directly to an LLM.
          </p>

          <div className="space-y-4">
            {AGENT_FEATURES.map((feature) => (
              <div key={feature.title} className="flex items-start gap-3">
                <div className="p-2 rounded-md bg-accent-glow text-accent shrink-0">
                  <feature.icon size={16} />
                </div>
                <div>
                  <h4 className="text-text font-medium text-sm">
                    {feature.title}
                  </h4>
                  <p className="text-text-muted text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <TerminalWindow lines={JSON_EXAMPLE} />
        </motion.div>
      </div>
    </div>
  </section>
)
