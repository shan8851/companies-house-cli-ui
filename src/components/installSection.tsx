import { motion } from "motion/react"
import { SectionHeading } from "@/components/sectionHeading.tsx"
import { CodeBlock } from "@/components/codeBlock.tsx"

const INSTALL_METHODS = [
  {
    label: "npm (recommended)",
    code: "npm install -g @shan8851/companies-house-cli",
    highlighted: true,
  },
  {
    label: "From source",
    code: "git clone https://github.com/shan8851/companies-house-cli && cd companies-house-cli && npm install && npm run build && npm link",
    highlighted: false,
  },
  {
    label: "Set your API key",
    code: 'export COMPANIES_HOUSE_API_KEY="your-key-here"',
    highlighted: false,
  },
] as const

export const InstallSection = () => (
  <section className="py-24 px-6" id="install">
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading
          title="Get started"
          subtitle="Install globally via npm. You'll need a free API key from Companies House."
        />
      </motion.div>

      <div className="space-y-4">
        {INSTALL_METHODS.map((method, index) => (
          <motion.div
            key={method.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <p className="text-text-muted text-sm mb-2 font-medium">
              {method.label}
            </p>
            <CodeBlock code={method.code} highlighted={method.highlighted} />
          </motion.div>
        ))}
      </div>

      <motion.p
        className="text-text-dim text-sm mt-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        Free API key — takes 30 seconds at{" "}
        <a
          href="https://developer.company-information.service.gov.uk/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          developer.company-information.service.gov.uk
        </a>
      </motion.p>
    </div>
  </section>
)
