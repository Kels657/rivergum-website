const h2 = "font-serif font-light text-[#1b1b1b] text-2xl md:text-3xl mb-4 mt-12 leading-snug";
const h3 = "font-serif font-light text-[#1b1b1b] text-xl mb-3 mt-8";
const p = "font-sans text-gray-600 text-base leading-relaxed mb-5";
const ul = "font-sans text-gray-600 text-base space-y-2 mb-5 pl-6";
const a = "text-[#8da59b] underline underline-offset-2 hover:text-[#7d978d] transition-colors";
const tdBase = "px-4 py-3 text-sm font-sans border-b border-gray-100";

export default function PostEasternSuburbs() {
  return (
    <>
      <h2 className={h2}>Beautiful, But Demanding</h2>
      <p className={p}>
        The Eastern Suburbs is one of the most coveted places to live in Australia. Ocean views,
        harbour access, heritage sandstone, leafy streets within walking distance of the beach.
        Properties here command prices that reflect all of that.
      </p>
      <p className={p}>
        But the same geography that makes the Eastern Suburbs beautiful also makes it one of the
        hardest environments in Australia for glass surfaces. Salt air from the coast, humidity
        from the harbour and ocean, aircraft soot from the flight paths above Mascot and Alexandria,
        and the biological load from proximity to parklands and water &mdash; all of it takes its
        toll. Faster than most homeowners realise.
      </p>
      <p className={p}>
        I&apos;ve been working in this part of Sydney for years. The conditions here are genuinely
        different from what you&apos;d encounter in the Hills District, the Lower North Shore, or
        even most of the Inner West. Understanding those differences is the whole point of this
        post.
      </p>

      <h2 className={h2}>Salt: The Permanent Threat</h2>
      <p className={p}>
        Salt from sea air is the defining environmental condition for coastal Eastern Suburbs
        properties. Bondi, Bronte, Coogee, Tamarama, Clovelly &mdash; all of these suburbs
        receive a constant load of salt aerosol from the ocean. You can&apos;t see it landing,
        but it lands continuously.
      </p>
      <p className={p}>
        Unlike dust, which sits on the glass surface and washes off with rain, salt bonds to glass
        at a molecular level. Left long enough, it begins to etch into the glass. The etching
        process is irreversible with standard cleaning. Once it has progressed sufficiently, the
        only options are specialist abrasive polishing &mdash; expensive, with uncertain results
        &mdash; or glass replacement.
      </p>
      <p className={p}>
        In Bondi and Coogee conditions, permanent salt etching can develop in as little as four to
        five months of neglect. That&apos;s why we say that coastal Eastern Suburbs properties need
        professional window cleaning every three months without exception.
      </p>

      <h2 className={h2}>A Client Story: The View Worth Protecting</h2>
      <p className={p}>
        A few years ago I worked on a property in Coogee &mdash; a waterfront home with
        extraordinary harbour and ocean views from the main living areas. The interior was
        immaculately maintained. The windows had not been professionally cleaned in years.
      </p>
      <p className={p}>
        The salt, grime and coastal contamination had accumulated to the point where those views
        &mdash; objectively the reason someone had paid what they did for that address &mdash; were
        being experienced through a filter. It took a particularly detailed clean to bring them
        back. When the client looked out afterwards, they were quiet for a moment.
      </p>
      <blockquote className="border-l-4 border-[#c9a35b] pl-6 py-1 my-8">
        <p className="font-serif italic text-[#1b1b1b] text-xl leading-relaxed">
          &ldquo;They&apos;d paid enough for that house &mdash; they deserved to properly enjoy
          the view.&rdquo;
        </p>
      </blockquote>
      <p className={p}>
        A view like that is worth protecting with a regular maintenance schedule. The alternative
        is eventually dealing with glass that can&apos;t be restored.
      </p>

      <h2 className={h2}>Humidity and Mould</h2>
      <p className={p}>
        Proximity to water means elevated ambient humidity for much of the year. This has two
        practical effects on windows.
      </p>
      <p className={p}>
        First, it accelerates the bonding of salt deposits. Salt in high humidity draws more
        moisture from the air and becomes more chemically active &mdash; etch progression is faster
        in humid conditions than in dry inland environments with similar salt loads.
      </p>
      <p className={p}>
        Second, it creates conditions for mould growth, particularly on interior window surfaces,
        in rubber seals, and in the corners of frames. South-facing and shaded windows see the
        least sun and the most mould. In a humid coastal environment, mould can develop in window
        corners within weeks if there is condensation or moisture present.
      </p>
      <p className={p}>
        Mould on glass is not just cosmetic &mdash; the biological matter etches glass over time
        and is considerably harder to remove once established than if treated early. Regular
        cleaning prevents the accumulation that turns a simple clean into a remediation job.
      </p>

      <h2 className={h2}>Aircraft Soot: The Southern Suburbs Problem</h2>
      <p className={p}>
        The southern end of the Eastern Suburbs &mdash; Mascot, Alexandria, Waterloo, Zetland,
        Botany, Rosebery &mdash; sit under Sydney Airport flight paths. Aircraft emit fine carbon
        particulates that settle on everything below. On windows, this creates a grey film that
        doesn&apos;t look like ordinary dust and doesn&apos;t respond to rain.
      </p>
      <p className={p}>
        Properties in these suburbs often have windows that appear clean from inside but are
        distinctly grey on the outside when examined in good light or from an angle. The soot
        particles also hold other contamination &mdash; once a film of soot is present, everything
        else sticks to it faster.
      </p>
      <p className={p}>
        If you live in Mascot or Alexandria and haven&apos;t thought about your windows recently,
        step outside on a bright day and look at your south-facing glass from an angle. The
        result is often surprising.
      </p>

      <h2 className={h2}>A Guide to Cleaning Frequency by Suburb</h2>
      <p className={p}>
        Not all Eastern Suburbs are the same. Here&apos;s a practical guide based on the
        conditions in each area:
      </p>
      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse border border-gray-200 font-sans text-sm">
          <thead>
            <tr className="bg-[#fafafa]">
              <th className="px-4 py-3 text-left font-medium text-[#1b1b1b] border-b border-gray-200">
                Suburb
              </th>
              <th className="px-4 py-3 text-left font-medium text-[#1b1b1b] border-b border-gray-200">
                Recommended Frequency
              </th>
              <th className="px-4 py-3 text-left font-medium text-[#1b1b1b] border-b border-gray-200">
                Primary Condition
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Bondi, Bondi Beach", "Every 3 months", "Heavy salt exposure"],
              ["Coogee, Clovelly", "Every 3 months", "Heavy salt exposure"],
              ["Bronte, Tamarama", "Every 3 months", "Heavy salt exposure"],
              ["Vaucluse, Watsons Bay", "Every 3–4 months", "Salt + harbour humidity"],
              ["Rose Bay, Double Bay", "Every 3–4 months", "Harbour salt + humidity"],
              ["Paddington, Woollahra", "Every 4–6 months", "Urban particulates + humidity"],
              ["Randwick, Kensington", "Every 4–6 months", "Moderate salt + particulates"],
              ["Mascot, Alexandria", "Every 3–4 months", "Aircraft soot"],
              ["Zetland, Waterloo", "Every 3–4 months", "Aircraft soot + urban density"],
              ["Surry Hills, Darlinghurst", "Every 4–6 months", "Urban particulates"],
            ].map(([suburb, freq, condition]) => (
              <tr key={suburb} className="hover:bg-[#fafafa] transition-colors">
                <td className={`${tdBase} font-medium text-[#1b1b1b]`}>{suburb}</td>
                <td className={tdBase}>{freq}</td>
                <td className={`${tdBase} text-gray-500`}>{condition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={p}>
        These are guidelines rather than rules. A property on the beachfront in Bondi has
        different exposure than a shielded courtyard apartment a few streets back. If you&apos;re
        not sure how your specific property is affected, the easiest test is to look at your glass
        in good light from outside &mdash; what you see on the exterior is a reasonable guide to
        how often you need cleaning.
      </p>

      <h2 className={h2}>Why Local Knowledge Matters</h2>
      <p className={p}>
        A window cleaner who regularly works in Bondi, Coogee and Vaucluse understands the salt
        problem in a way that a general Sydney cleaner doesn&apos;t. They know what frequency is
        appropriate, what equipment handles the conditions, and what the early warning signs of
        etching look like. They&apos;re not guessing based on general principles &mdash; they&apos;ve
        seen it on hundreds of windows.
      </p>
      <p className={p}>
        That local understanding is part of why the service is different here. You can read more
        about{" "}
        <a href="/blog/how-often-should-you-clean-your-windows-sydney" className={a}>
          how often Sydney windows need cleaning
        </a>{" "}
        for a broader picture, or explore our coverage across the{" "}
        <a href="/areas/bondi" className={a}>Bondi</a>,{" "}
        <a href="/areas/coogee" className={a}>Coogee</a> and{" "}
        <a href="/areas/vaucluse" className={a}>Vaucluse</a> area pages for suburb-specific
        information.
      </p>
      <p className={p}>
        If you&apos;d like to discuss your property specifically,{" "}
        <a href="/estimator" className={a}>use our free estimator</a> for a quick price range,
        or get in touch directly.
      </p>
    </>
  );
}
