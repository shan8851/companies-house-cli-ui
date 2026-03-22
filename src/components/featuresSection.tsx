import { motion } from "motion/react"
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
          subtitle="Eight commands covering every public endpoint on the Companies House API."
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
    </div>
  </section>
)
