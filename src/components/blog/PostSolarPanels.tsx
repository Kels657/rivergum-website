const h2 = "font-serif font-light text-[#1b1b1b] text-2xl md:text-3xl mb-4 mt-12 leading-snug";
const h3 = "font-serif font-light text-[#1b1b1b] text-xl mb-3 mt-8";
const p = "font-sans text-gray-600 text-base leading-relaxed mb-5";
const ul = "font-sans text-gray-600 text-base space-y-2 mb-5 pl-6";
const a = "text-[#8da59b] underline underline-offset-2 hover:text-[#7d978d] transition-colors";

export default function PostSolarPanels() {
  return (
    <>
      <h2 className={h2}>Australia&apos;s Solar Paradox</h2>
      <p className={p}>
        Australia has more rooftop solar per capita than almost any other country in the world. We
        have the sunshine, the incentives, and the uptake to match. But there&apos;s a problem most
        households don&apos;t talk about: the panels go up, and they never come down. They
        certainly don&apos;t get cleaned.
      </p>
      <p className={p}>
        The assumption seems to be that rain takes care of it. It doesn&apos;t. Rain moves dust
        around and leaves behind mineral deposits as it dries. It doesn&apos;t remove bird
        droppings, hardened soot or the sticky organic residue from gum trees. Over time, a layer
        of contamination builds up across the panel surface &mdash; and every percentage point of
        obstruction costs you output.
      </p>
      <p className={p}>
        If your panels haven&apos;t been cleaned since they were installed, you&apos;re probably
        not getting what you paid for.
      </p>

      <h2 className={h2}>How Much Efficiency Can You Actually Lose?</h2>
      <p className={p}>
        Studies from solar research institutions have consistently found that dirty panels can lose
        between 15% and 25% of their rated efficiency under real-world conditions. Some research
        from arid or high-particulate environments puts that figure higher still.
      </p>
      <p className={p}>
        In practical terms: if your system is rated at 6.6kW and you&apos;re running at 80%
        efficiency due to contamination, you&apos;re generating the equivalent of a 5.3kW system.
        The electricity you&apos;re missing out on exporting or using is real money &mdash; lost
        quietly, day after day, without any obvious signal that something is wrong.
      </p>
      <p className={p}>
        The loss isn&apos;t uniform across the panel. A single bird dropping can disproportionately
        affect output due to the way panels are wired in series. One heavily soiled panel in a
        string can drag down the performance of the entire array &mdash; not just itself.
      </p>

      <h2 className={h2}>What Actually Builds Up on Sydney Panels</h2>
      <h3 className={h3}>Dust and Environmental Particulates</h3>
      <p className={p}>
        The most basic contamination source &mdash; fine dust settles onto horizontal or low-angle
        surfaces continuously. In Sydney, this includes road dust, pollen, and general atmospheric
        particulates. Rain washes some of it away but leaves a residue as water evaporates.
      </p>
      <h3 className={h3}>Bird Droppings</h3>
      <p className={p}>
        The most performance-damaging contaminant on most residential panels. Bird droppings are
        acidic, bond strongly to glass surfaces, and create opaque patches that block light
        transmission entirely in that area. They don&apos;t wash off with rain. Left long enough,
        they can etch into the glass coating.
      </p>
      <h3 className={h3}>Aircraft Soot</h3>
      <p className={p}>
        For properties near Sydney Airport &mdash; Alexandria, Mascot, Zetland, Waterloo, Botany,
        Marrickville &mdash; this is a significant and underappreciated problem. Aircraft emit
        fine carbon-based particulates that settle on every exposed horizontal surface under the
        flight path. On solar panels, soot creates a thin grey film that doesn&apos;t reflect like
        dust &mdash; it absorbs light without transmitting it. Panels near flight paths typically
        need cleaning more frequently than others.
      </p>
      <h3 className={h3}>Gum Tree Debris</h3>
      <p className={p}>
        Common across most Sydney suburbs, eucalyptus trees deposit pollen, fine bark particles and
        a sticky organic resin onto anything below them. This resin is particularly adhesive and
        doesn&apos;t respond to rain. If you have gum trees anywhere near your roof, your panels
        will accumulate this residue faster than properties without them.
      </p>
      <h3 className={h3}>Salt (Coastal Properties)</h3>
      <p className={p}>
        As with windows, salt from sea air deposits onto solar panels and, over time, creates a
        crystalline film that reduces light transmission. Coastal properties in Bondi, Coogee,
        Bronte and Vaucluse face this in addition to the standard contamination sources.
      </p>

      <h2 className={h2}>How Professional Solar Cleaning Works</h2>
      <p className={p}>
        The correct method for cleaning solar panels is pure water cleaning &mdash; deionised or
        reverse-osmosis filtered water delivered via a water-fed pole with a soft brush.
      </p>
      <p className={p}>
        Pure water is important for a specific reason: tap water contains dissolved minerals. When
        tap water dries on a panel surface, those minerals are left behind as white spots or a
        chalky film &mdash; potentially adding another layer of contamination rather than removing
        it. Pure water dries clean, leaving no residue.
      </p>
      <p className={p}>
        No cleaning chemicals are needed or appropriate. Panel warranties are generally void if
        harsh cleaning products are used. A soft brush and pure water, applied carefully to avoid
        thermal shock to hot panels, is the standard professional approach.
      </p>
      <p className={p}>
        The{" "}
        <a
          href="https://www.cleanenergycouncil.org.au"
          className={a}
          target="_blank"
          rel="noopener noreferrer"
        >
          Clean Energy Council
        </a>{" "}
        recommends professional cleaning as part of standard solar system maintenance.
      </p>

      <h2 className={h2}>How Often Should Sydney Panels Be Cleaned?</h2>
      <p className={p}>
        As a general guide for Sydney conditions:
      </p>
      <ul className={ul}>
        <li className="list-disc">
          <strong className="font-medium text-[#1b1b1b]">Most Sydney homes:</strong> once or twice
          a year
        </li>
        <li className="list-disc">
          <strong className="font-medium text-[#1b1b1b]">Coastal properties (within 1km of ocean):</strong>{" "}
          every 3&ndash;4 months
        </li>
        <li className="list-disc">
          <strong className="font-medium text-[#1b1b1b]">Near flight paths or heavy traffic:</strong>{" "}
          every 3&ndash;4 months
        </li>
        <li className="list-disc">
          <strong className="font-medium text-[#1b1b1b]">Properties with gum trees nearby:</strong>{" "}
          at least twice a year, inspect quarterly
        </li>
        <li className="list-disc">
          <strong className="font-medium text-[#1b1b1b]">Properties with heavy bird activity:</strong>{" "}
          inspect regularly and clean as needed
        </li>
      </ul>
      <p className={p}>
        The right frequency depends on your specific environment. The best signal is your
        monitoring data &mdash; most solar inverters provide output readings. If your system
        output has declined compared to historical performance in equivalent weather, that&apos;s
        a signal worth acting on.
      </p>

      <h2 className={h2}>Does a Clean Actually Pay for Itself?</h2>
      <p className={p}>
        Let&apos;s run a simple scenario. A professional solar panel clean for a typical Sydney
        home costs in the range of $150&ndash;$200 depending on panel count and access.
      </p>
      <p className={p}>
        If your 6.6kW system is generating approximately 24kWh per day in summer, and dirty panels
        are reducing that by 20%, you&apos;re losing around 4.8kWh per day. At Sydney&apos;s
        current average electricity rates, that&apos;s roughly $1.50&ndash;$2.00 per day in either
        reduced self-consumption or reduced feed-in. Over 3 months, the loss easily exceeds the
        cost of a clean.
      </p>
      <p className={p}>
        The calculation varies with system size, feed-in tariff, and actual contamination level. But
        for most households with any meaningful level of soiling, the clean pays for itself within
        weeks &mdash; not months.
      </p>

      <h2 className={h2}>A Note on DIY Cleaning</h2>
      <p className={p}>
        Cleaning your own panels from the ground with a garden hose is better than nothing for
        loose dust. But it has limitations: hose water leaves mineral deposits, you can&apos;t
        apply the mechanical action needed to remove hardened bird droppings or soot, and most
        homeowners can&apos;t safely access their roof to clean panels by hand.
      </p>
      <p className={p}>
        Professional cleaning uses the right water, the right brush pressure, and proper roof access
        equipment. For a relatively low cost, it&apos;s a straightforward investment in protecting
        an asset that typically costs $6,000&ndash;$12,000 to install.
      </p>
      <p className={p}>
        You can learn more about our approach on the{" "}
        <a href="/services/solar-panel-cleaning" className={a}>
          solar panel cleaning service page
        </a>
        , or use our{" "}
        <a href="/estimator" className={a}>
          free instant estimator
        </a>{" "}
        to get a price range for your property.
      </p>
    </>
  );
}
