import { motion } from "motion/react"
import { CheckCircle2, FileSearch, Mail, PoundSterling } from "lucide-react"
import { SectionHeading } from "@/components/sectionHeading.tsx"

const DELIVERABLES = [
  "One clear search brief: niche, geography, and what you're trying to find",
  "25-50 cleaned Companies House matches with status, location, SIC codes, officers, and obvious red flags",
  "A CSV plus a short Markdown note with the filters used, caveats, and the next checks I'd run",
] as const

const FITS = [
  "micro-acquisition search",
  "local service-business prospecting",
  "competitor mapping",
  "UK market scans",
] as const

export const ResearchOfferSection = () => (
  <section className="py-24 px-6" id="research-offer">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading
          title="Want the useful bit without wrestling Companies House?"
          subtitle="Give me a UK niche, region, or acquisition idea. I'll turn the public data into a shortlist you can actually work from."
        />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-6 items-stretch"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.1 }}
      >
        <div className="rounded-2xl border border-border-bright bg-surface p-6 sm:p-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-border-bright bg-accent-glow px-3 py-1.5 text-xs font-mono text-accent mb-6">
            <PoundSterling size={14} />
            £99 first-pass research sprint
          </div>

          <h3 className="font-heading text-3xl text-text mb-4">
            A small, focused company shortlist. No giant PDF. No consultancy fog.
          </h3>

          <p className="text-text-muted leading-relaxed mb-6 max-w-2xl">
            The CLI is free if you want to run the searches yourself. The paid bit is
            the judgement: choosing sensible filters, cutting out the obvious rubbish,
            and handing back something you can use for diligence, outreach, or a better
            second pass.
          </p>

          <div className="space-y-3 mb-8">
            {DELIVERABLES.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={18} />
                <p className="text-text-muted text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <a
            href="https://x.com/shan8851"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-bg font-medium text-sm hover:brightness-110 transition-all duration-200"
          >
            <Mail size={16} />
            DM @shan8851 about a £99 research sprint
          </a>
        </div>

        <div className="rounded-2xl border border-border bg-terminal-bg p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="p-2 rounded-md bg-accent-glow text-accent inline-flex mb-5">
              <FileSearch size={20} />
            </div>
            <h4 className="text-text font-medium mb-4">Good fit for</h4>
            <div className="flex flex-wrap gap-2 mb-8">
              {FITS.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border px-3 py-1.5 text-xs text-text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <p className="text-text-dim text-xs leading-relaxed">
              Public Companies House data only. This is a first-pass research workflow,
              not legal, financial, or investment advice. Basically: less spreadsheet
              swamp, more useful starting point.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
)
