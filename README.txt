SOCIAL SECURITY SIMULATION (sssim.py)

Run (Python 3.9 or later, with requirements.txt installed in an appropriate
environment; do not modify repository-local environments without permission):
  python sssim.py sssim.cfg --output-dir output

Running without a config argument uses sssim.cfg beside the script.

Edit the [Input] section in sssim.cfg (INI format):
  P_PIA: primary insurance amount in monthly dollars (example: 4152.0)
  The model derives P67 = 1.00 * P_PIA and P70 = 1.24 * P_PIA.
  This assumes full retirement age 67 and claims exactly at ages 67 and 70.
  Do not specify independent P67/P70 inputs; old configs must be migrated.
  n67: number of payments for Equation 1 (276 = age 67 to 90)
  n70: number of payments for Equation 2 (240 = age 70 to 90)
  annual_rate: effective annual return as a decimal (0.10 = 10.00% annually)
  r_month is derived internally as expm1(log1p(annual_rate) / 12).
  Code uses r_month/r_annual; the report uses r_m/r_a.
  The old config key i is no longer used.

The example P_PIA of 4152 dollars uses SSA's published maximum monthly
benefit at full retirement age for 2026 as an illustrative PIA. This is not a
personalized entitlement or universal maximum for every birth cohort. P67 and
P70 are derived in the same dollar basis, retaining cents without SSA rounding.
Source: https://www.ssa.gov/news/en/cola/factsheets/2026.html
Age factors: https://www.ssa.gov/oact/progdata/ar_drc.html
The model excludes COLAs, additional earnings, earnings-test withholding, fees,
and volatility. Fixed tax assumptions apply only in the separate tax scenario.

All payments occur at the BEGINNING of the month. Values are measured at the
END of the final month: the first payment compounds for n67 (or n70) months and
the final payment compounds for one month.

Equation 1: FV67 = P67 * (1+r_month) * ((1+r_month)^n67 - 1) / r_month
Equation 2: FV70 = P70 * (1+r_month) * ((1+r_month)^n70 - 1) / r_month
Equation 3: Delta = FV67 - FV70
Equation 4: FV67 = FV70
At zero rate, FV equals payment times number of payments.

The configured annual_rate determines monthly r_month for FV67 and FV70; the solver
does NOT overwrite it.
The solver uses bisection in log(1+r_month), searches the real domain r_month > -1, and
reports the unique nonzero root if one exists. It can find negative rates and
rates outside the chart range. It also handles no solution, zero-only, and
identical-stream cases. Extreme values may exceed floating-point limits.

For n67 > n70 and positive payments, a positive root exists exactly when
P70/P67 > n67/n70. For these durations, n67/n70 = 1.15. If 1 < P70/P67 < 1.15,
the unique root is negative. At P70/P67 = 1.15, only the zero rate works.

Outputs:
  output/results.json: configured-rate values and the separate solved rate
  output/future_values.png: one linear chart showing
    FV67 and FV70 for effective annual returns from 3.5% to 20% inclusive.
    Each annual return r is converted to monthly r_month = (1+r)^(1/12) - 1
    before calculating future values. The horizontal axis is annual return.
    The configured annual_rate also determines the separate summary results.
    results.json records the annual input and derived_monthly_rate separately.

Tax comparison:
  output/future_values_after_tax.png uses the same 601 annual returns (3.5% to
  20%) and monthly conversion as the before-tax chart, with a linear scale.
  The report scenario invests 68.55% of benefits (85% federally taxable at
  37%; Maryland exempts benefits). At age 90 only, 35.6% tax on accumulated growth is paid from
  the portfolio. After-tax contributions form the untaxed cost basis. All gains are treated as long-term.
  Rates are fixed highest-rate assumptions, not a personalized tax calculation.
  results.json includes a separate tax_scenario with comparisons at 5%, 10%,
  15%, and 20% effective annual returns. See 20261021SocialSecurity.md for full assumptions.

Delta charts: `output/delta.png` and `output/delta_after_tax.png` plot
FV67 minus FV70 before and after taxes, respectively, over the same 601
investment rates (3.5%–20% effective annually). Include them after the
corresponding future-value charts in the report. Use linear scales, a zero
reference line, and the applicable break-even marker. Positive delta favors 67.

Report and PDF:
  20261021SocialSecurity.md is the editable report. Preserve direct user edits.
  20261020SocialSecurity.pdf is generated from the current Markdown and chart
  images. Running sssim.py refreshes JSON/charts but does not rewrite the report
  or rebuild the PDF. After updating report content or charts, rebuild with:

    python3 pdf/render.py

  PDF rendering requires Pandoc, XeLaTeX (including titlesec and colortbl),
  and the DejaVu Serif font. It does not require additional Python packages.
  pdf/tables.lua controls table widths and bold column headers; pdf/header.tex
  provides colors and spacing. Tables use shaded headers, alternating row
  colors, and compact 8.5-point text. The Symbol definitions table is an appendix after Conclusion, starting on
  a new page. Symbols are also defined near the equations where used.
  The paper heading centers the title, subtitle, author, date, and email.
  Each <br> before Summary adds 12 points of PDF spacing. The disclaimer uses
  an 8-point font. Currency dollar signs must be escaped as \$ in Markdown;
  leave genuine LaTeX math delimiters intact.
  Review the rebuilt PDF for pagination, equations, currency, and chart layout.

Report notation and comparisons:
  FV67 and FV70 identify the starting ages. Delta = FV67 - FV70; positive
  values favor 67. The final after-tax symbol is FV_(net-tax).
  Equations 1-6 cover baseline values, delta, and monthly/annual break-even;
  equation 7 displays the break-even result; equations 8-13 cover net payments, principal, growth, and endpoint tax.
  The comparison table includes a 67:70 Ratio: after-tax FV67 / after-tax FV70.
  Equation 12 displays T = 0.356 G for the positive-growth scenarios shown.
  The numerical code still floors tax at zero for investment losses.

PIA-based example (P_PIA = 4152, annual_rate = 0.10):
  Derived P67 = 4152.00; P70 = 5148.48.
  Before-tax FV67 = 4,174,696.95; FV70 = 3,727,431.19; delta = 447,265.76.
  After-tax FV67 = 2,122,625.90; FV70 = 1,947,061.17; delta = 175,564.73.
  Annual break-even: 4.45% before taxes; 5.59% after taxes.
  PIA scales dollar results; break-even rates and 67:70 ratios are independent
  of positive PIA under the fixed tax assumptions and unrounded age factors.
  JSON inputs contain P_PIA; derived_benefits records P67/P70 and age factors.
  The example PIA is configurable; no hard-coded maximum is enforced.

Current comparison is age 67 versus 70, both at or after FRA 67. No
earnings-test withholding applies to either stream; monthly P67 equals P_PIA
and P70 equals 1.24 P_PIA. The example has 276 and 240 payments to age 90,
respectively. Preserve configurable n67/n70; do not force the 36-month gap.
Baseline JSON FV1/FV2 remain compatibility fields meaning FV67/FV70.
Derived benefits now use P67/factor_67. Before-tax break-even 4.45% and after-tax break-even 5.59% are both marked
within the chart range of 3.5%–20%.
The Monthly benefit background may still discuss age 64 as SSA context; it
is not a modeled strategy. Report symbols are P67, FV67, n67 with subscripts.

Payment-count inputs and JSON input fields are n67 and n70. Legacy n/m
configuration keys are rejected; migrate them to n67/n70 respectively.

BROWSER-ONLY CALCULATOR

Open web/index.html directly in a modern browser. No server, Python, package
installation, internet connection, or build step is required. Keep index.html,
app.js, and style.css together in the web directory when copying the page.
Calculations stay in the browser; there are no analytics. The sponsor logo
loads directly from thebrookhavengroup.com and requires internet access;
calculations work offline. External reference links use the internet when opened.

The form defaults to PIA $4,152, start age 67 versus age 70, end age 90,
and a 10.00% effective annual return. Start ages 67, 68, 69, and 70 are
supported, assuming FRA 67. Monthly benefits are PIA times
1 + 0.08 * (start age - 67). For 68/69 this constant-payment approximation
does not reproduce SSA's calendar-year timing of delayed-credit adjustments.
The end age is a whole-year birthday after 70 (up to 150).

Editable federal, state, and local tax inputs default to the report's fixed
highest-rate Maryland scenario. State/local benefit taxable share defaults
to zero. Combined benefit tax equals federal taxable share times federal
income tax plus state/local taxable share times the sum of state and local
income taxes. Investment-gains taxes add federal, NIIT, state, local, and
Maryland surtax rates. This is a scenario calculation, not a tax-return engine:
thresholds, brackets, deductions, and future changes are not calculated.

Click Calculate comparison after editing inputs. Results include a detailed
configured-rate table, comparisons at 5.00%, 10.00%, 15.00%, 20.00%, and the
selected rate, plus four charts (before/after-tax future values and deltas).
Charts use the existing 601 effective annual rates from 3.50% to 20.00%.
Crossings are searched within those bounds only; no crossing in that interval
does not establish that no solution exists elsewhere. All charts use dollar
values on a linear scale. If both starts are 70, the streams are identical.
The existing Python CLI, configuration, reports, and PDF are independent.

LICENSE

Licensed under the MIT License. See LICENSE for the full terms.

Copyright © 2026 The Brookhaven Group, LLC.
