import { motion } from "motion/react"
import { Braces } from "lucide-react"
import { SectionHeading } from "@/components/sectionHeading.tsx"
import { FeatureCard } from "@/components/featureCard.tsx"
import { COMMANDS } from "@/data/commands.ts"

export const FeaturesSection = () => (
  <section className="py-24 px-6" id="features">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading
          title="What you can query"
          subtitle="Eight commands covering the public Companies House API, with a stable JSON contract when you need machine output."
        />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {COMMANDS.map((cmd, index) => (
          <motion.div
            key={cmd.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <FeatureCard
              name={cmd.name}
              description={cmd.description}
              icon={cmd.icon}
              command={cmd.fullCommand}
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-8 rounded-xl border border-border-bright bg-surface p-5 sm:p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.2 }}
      >
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-md bg-accent-glow text-accent shrink-0">
            <Braces size={18} />
          </div>
          <div>
            <h3 className="text-text font-medium text-sm mb-2">
              Stable output contract for agents
            </h3>
            <p className="text-text-muted text-sm leading-relaxed mb-4 max-w-3xl">
              Use subcommand-local <code className="text-accent">--json</code>{" "}
              or <code className="text-accent">--text</code> when you want to
              force a mode. JSON responses keep the same top-level shape and
              move request metadata into <code className="text-accent">data.input</code>{" "}
              and <code className="text-accent">data.pagination</code>.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 rounded-md border border-border bg-terminal-bg text-terminal-output">
                ok • schemaVersion • command • requestedAt • data
              </span>
              <span className="px-2.5 py-1 rounded-md border border-border bg-terminal-bg text-terminal-output">
                ch search "Monzo" --json
              </span>
              <span className="px-2.5 py-1 rounded-md border border-border bg-terminal-bg text-terminal-output">
                ch info 09215862 --text
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
)
