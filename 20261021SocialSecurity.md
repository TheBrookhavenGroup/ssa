# Social Security Investment

*Should I wait until age 70 to start taking Social Security payments?*

**Marc Schwarzschild**  
October 21, 2026  
[ms@TheBrookhavenGroup.com](mailto:ms@TheBrookhavenGroup.com)


<br>

## Introduction

Social Security monthly benefits can start when eligible participants reach age 62, however the monthly benefit increases by delaying the start of payments as late as age 70.

I have two questions: 1. Is it better to start taking Social Secutity payments at age 67 or age 70?; and 2. What investment interest rate makes it beneficial to start payments early?

To answer these questions I simulated investing all monthly Social Security payments until age 90. The future value was calculated with payments started at age 67 compared to waiting until age 70. The analysis derives both monthly payments from an illustrative **primary insurance amount (PIA)** of ![\\$4,152](output/report_math/equation-001.svg), then tabulates both strategies at a 10.00% annual investment return. Charts illustrate future values over a range of annual returns from 3.50% to 20.00%, and identifies the break-even return at which their final balances are equal. The analysis is repeated using federal and Maryland tax assumptions for net tax results.

One does not have to retire in order to claim benefits.  Monthly payments made before age 67, for particpants born in 1960 or later, are reduced based on earned income.  For a PIA of ![\\$4,152](output/report_math/equation-002.svg) at age 67 an income of ![\\$117,485](output/report_math/equation-003.svg) would result in zero benefit in years earlier than age 67.  After age 67 the full benefit is paid regardless of employment status.  

Symbols used in formulas are defined throughout this document and summarized in the appendix.

---

**Disclaimer:** All inputs in this report are used for illustration purposes only. The assumptions made may not apply to any particular individual. The author is not a professional investment advisor and accepts no responsibility for decisions made based on this report. The accuracy of the report and the applicability of its conclusions must be independently assessed in light of each individual’s circumstances.

---

<div style="break-after: page;"></div>

## Monthly benefit

### How the Social Securities Administration (SSA)  calculates the monthly benefit

SSA bases a worker’s retirement benefit on their earnings record. Monthly benefits shown below illustrate a worker **born in 1960 or later**, whose full retirement age is **67**. 

The SSA calculates an individual's **primary insurance amount (PIA)** based on historical earnings.  Details of this calculation are available at ssa.gov.  The PIA is the monthly benefit if an individual elects to start taking benefits at full retirement age of 67 years old.    

The table below lists monthly benefits based on the age benefits begin.  They could be reduced based on employment income if starting before age 67.  One can delay starting benefits until age 70 for an increased benefit. Our analysis assumes no employment income past age 62.


#### PIA adjustments
| Age benefits start | Adjustment relative to age 67 | Monthly benefit as a share of PIA |
| --- | --- | ---: |
| 62 | 60 months early; 30.00% reduction | 70.00% |
| 63 | 48 months early; 25.00% reduction | 75.00% |
| 64 | 36 months early; 20.00% reduction | 80.00% |
| 65 | 24 months early; 13.33% reduction | 86.67% |
| 66 | 12 months early; 6.67% reduction | 93.33% |
| 67 | Full retirement age; no age adjustment | 100.00% |
| 68 | 12 months delayed; 8.00% increase | 108.00% |
| 69 | 24 months delayed; 16.00% increase | 116.00% |
| 70 | 36 months delayed; 24.00% increase | 124.00% |

### Cost of Living Adjustment (COLA)

Monthly benefits can be increased by COLA adjustments.  These are unpredictable and not considered in simulations used for this analysis.  This table lists example COLA adjustments.

#### Five most recent COLA values

| First payment reflecting COLA | Increase |
| --- | ---: |
| January 2026 | 2.80% |
| January 2025 | 2.50% |
| January 2024 | 3.20% |
| January 2023 | 8.70% |
| January 2022 | 5.90% |

SSA has also announced a **3.60% COLA for payments beginning January 2027**.

<div style="break-after: page;"></div>

## Calculations

The future value is how much money there would be if all monthly benefits were invested from distribution until age 90.

This is an investment cash-flow model, not an SSA benefit calculator. It assumes constant monthly payments and a constant monthly investment return without COLAs.

#### Example values used in simulations
| Input | Age-67 strategy | Age-70 strategy |
| --- | ---: | ---: |
| PIA input (![P_{\\mathrm{PIA}}](output/report_math/equation-004.svg)) | \$4,152.00 | \$4,152.00 |
| Derived monthly payment (![P_{67}](output/report_math/equation-005.svg), ![P_{70}](output/report_math/equation-006.svg)) | \$4,152.00 | \$5,148.48 |
| Number of monthly payments (![n_{67}](output/report_math/equation-007.svg), ![n_{70}](output/report_math/equation-008.svg)) | 276 | 240 |
| Annual investment return (![r_a](output/report_math/equation-009.svg)) | 10.00% | 10.00% |
| Common valuation endpoint | 90th birthday | 90th birthday |

Payments are invested at the **beginning of each month**, and future values are measured at the **end of the final month**. The first payment earns interest for the full investment period; the last earns one month of interest.

The example uses ![P_{\\mathrm{PIA}}=4{,}152](output/report_math/equation-010.svg) dollars per month. SSA publishes **\$4,152** as the maximum monthly benefit for a worker retiring at full retirement age in **2026**. Here it is used as an illustrative PIA.  The PIA depends on historical earnings.

The monthly benefit starting at ages 67 and 70 respectively are:

![P_{67}=P_{\\mathrm{PIA}}=4{,}152.00](output/report_math/equation-011.svg)

![\\qquad P_{70}=1.24P_{\\mathrm{PIA}}=5{,}148.48.](output/report_math/equation-012.svg)

Let ![r_a](output/report_math/equation-013.svg) denote the annual investment return and ![r_m](output/report_math/equation-014.svg) the equivalent monthly return. For a ![10\\%](output/report_math/equation-015.svg) annual return ![r_a=0.10](output/report_math/equation-016.svg). The monthly rate, in decimal form, used for compounding is:

![r_m=(1+0.10)^{1/12}-1\\approx0.007974140429.](output/report_math/equation-017.svg)


### Finding delta

Delta is the difference between the future values starting benefits at age 67 and age 70.

Let ![P_{67}](output/report_math/equation-018.svg) and ![P_{70}](output/report_math/equation-019.svg) be the gross monthly payments starting at ages 67 and 70 respectively. Let ![n_{67}](output/report_math/equation-020.svg) and ![n_{70}](output/report_math/equation-021.svg) be the respective payment counts. The corresponding before-tax future values at age 90 are ![\\mathrm{FV}_{67}](output/report_math/equation-022.svg) and ![\\mathrm{FV}_{70}](output/report_math/equation-023.svg).

![\\mathrm{FV}_{67} = P_{67}(1+r_m)\\frac{(1+r_m)^{n_{67}}-1}{r_m} \\tag{1}](output/report_math/equation-024.svg)

![\\mathrm{FV}_{70} = P_{70}(1+r_m)\\frac{(1+r_m)^{n_{70}}-1}{r_m} \\tag{2}](output/report_math/equation-025.svg)

The difference ![\\Delta](output/report_math/equation-026.svg) is the age-67 future value minus the age-70 future value:

![\\Delta = \\mathrm{FV}_{67} - \\mathrm{FV}_{70} \\tag{3}](output/report_math/equation-027.svg)

Therefore, ![\\Delta](output/report_math/equation-028.svg) is how much more value is gained by starting payments early.


#### Results at 10.00% effective annual return

| Measure | Result |
| --- | ---: |
| Annual investment return (![r_a](output/report_math/equation-029.svg)) | 10% |
| Payments starting at 67 (![FV_{67}](output/report_math/equation-030.svg)) | \$4,174,697|
| Payments starting at 70 ![FV_{70}](output/report_math/equation-031.svg)) | \$3,727,431 |
| FV67 - FV70 (![\\Delta](output/report_math/equation-032.svg))| \$447,266 |

The positive delta means that starting at age 67 yields a larger final investment balance under these inputs. The earlier payments have more time to compound.

### Finding the nonzero break-even return

Find the break-even monthly return ![r_{mb}\\ne0](output/report_math/equation-033.svg) at which the two future values are equal:

![\\mathrm{FV}_{67} = \\mathrm{FV}_{70} \\tag{4}](output/report_math/equation-034.svg)

![P_{67}(1+r_{mb})\\frac{(1+r_{mb})^{n_{67}}-1}{r_{mb}} = P_{70}(1+r_{mb})\\frac{(1+r_{mb})^{n_{70}}-1}{r_{mb}} \\tag{5}](output/report_math/equation-035.svg)

Solve Equation 5 numerically for a nonzero ![r_{mb}](output/report_math/equation-036.svg).

Let ![r_{ab}](output/report_math/equation-037.svg) denote the effective annual break-even return corresponding to the monthly solution ![r_{mb}](output/report_math/equation-038.svg):

![r_{ab}=(1+r_{mb})^{12}-1. \\tag{6}](output/report_math/equation-039.svg)

![r_{ab} = 4.45\\% \\tag{7}](output/report_math/equation-040.svg)



***For these payment amounts and durations, effective annual returns below ![4.45\\%](output/report_math/equation-041.svg) favor the age-70 strategy; returns above it favor the age-67 strategy.***


## Results before taxes

The following charts show the future values of each strategy and the delta versus constant invesment returns.  The before-tax break-even return of 4.45% is marked on these charts, within the plotted 3.50%–20.00% range.

![Future values by effective annual return](output/future_values.png)

![Before-tax delta versus investment rate](output/delta.png)

Delta is ![\\mathrm{FV}_{67}-\\mathrm{FV}_{70}](output/report_math/equation-042.svg). Positive values favor starting at 67; negative values favor starting at 70.

<div style="break-after: page;"></div>

## Consider Taxes

### Tax assumptions

The benefit tax is income tax applied to the monthly social security payments.  The investment tax is capital gains tax paid on investment gains.

- **Benefit tax:** 37.00% federal tax on 85.00% of each Social Security payment; no Maryland or local tax.


This illustration uses 2026 top marginal rates for married filing jointly, held constant throughout the simulation. It assumes other household income is sufficient to place all modeled taxable benefits and investment gains at those rates. It does not account for tax brackets, deductions, credits, or future tax-law changes.

Social Security has special treatment: at most **85.00% of benefits** are federally taxable, and Maryland excludes Social Security benefits from state and local taxable income. Applying the highest federal ordinary income rate of **37.00%** to that taxable portion produces a tax of **31.45% of each gross payment**. The amount invested each month is therefore **68.55% of the gross payment**.

- **Investment tax:** 35.60% captial gains tax on accumulated investment gains at age 90.

For investment gains, use this combined top marginal rate:

| Tax Rates | Rate on covered gains |
| --- | ---: |
| Federal long-term capital gains | ![20.00\\%](output/report_math/equation-043.svg) |
| Federal net investment income tax | ![3.80\\%](output/report_math/equation-044.svg) |
| Maryland state income tax | ![6.50\\%](output/report_math/equation-045.svg) |
| Maryland local income tax, highest county rate | ![3.30\\%](output/report_math/equation-046.svg) |
| Maryland additional tax on covered net capital gains | ![2.00\\%](output/report_math/equation-047.svg) |
| **Combined assumption** | ![\\bf35.60\\%](output/report_math/equation-048.svg) |

The federal net investment income tax (NIIT) is an additional ![3.80\\%](output/report_math/equation-049.svg) tax. For married couples filing jointly, it applies to the smaller of net investment income or the amount by which modified adjusted gross income exceeds ![\\$250,000](output/report_math/equation-050.svg). Maryland also imposes an additional ![2.00\\%](output/report_math/equation-051.svg) tax on covered net capital gains when federal adjusted gross income exceeds ![\\$350,000](output/report_math/equation-052.svg); specified exclusions apply. The assumed local income tax rate is ![3.30\\%](output/report_math/equation-053.svg).

Income tax is deducted from each Social Security payment when it is received, and only the remaining amount is invested. Investments then compound without interim capital-gains tax deductions. At age 90, the portfolio is liquidated and the 35.60% investment-tax assumption applies only to the gain above total invested after-tax contributions.

### Calculation

For either strategy, let ![P](output/report_math/equation-054.svg) be the gross monthly benefit, ![N](output/report_math/equation-055.svg) the payment count, ![P_{\\mathrm{net}}](output/report_math/equation-056.svg) the monthly amount invested after income tax, and ![B](output/report_math/equation-057.svg) the total invested principal:

![P_{\\mathrm{net}}=P(1-0.85\\times0.37)=0.6855P \\tag{8}](output/report_math/equation-058.svg)

![B=NP_{\\mathrm{net}} \\tag{9}](output/report_math/equation-059.svg)

Let ![V](output/report_math/equation-060.svg) be the portfolio balance at age 90 before capital-gains tax:

![V=P_{\\mathrm{net}}(1+r_m)\\frac{(1+r_m)^N-1}{r_m} \\tag{10}](output/report_math/equation-061.svg)

Investment growth ![G](output/report_math/equation-062.svg) excludes the invested principal:

![G=V-B \\tag{11}](output/report_math/equation-063.svg)

Let ![T](output/report_math/equation-064.svg) be the one-time capital-gains tax on that growth:

![T=0.356G \\tag{12}](output/report_math/equation-065.svg)

The after tax future value, ![\\mathrm{FV}_{\\text{net-tax}}](output/report_math/equation-066.svg), is:

![\\mathrm{FV}_{\\text{net-tax}}=V-T \\tag{13}](output/report_math/equation-067.svg)

Here ![V](output/report_math/equation-068.svg) is the balance before capital-gains tax at age 90, ![G](output/report_math/equation-069.svg) is accumulated investment growth, ![T](output/report_math/equation-070.svg) is the one-time capital-gains tax, and ![\\mathrm{FV}_{\\text{net-tax}}](output/report_math/equation-071.svg) is the after tax future value.

<br>

### After tax results


#### After tax results given a ![10\\%](output/report_math/equation-072.svg) investment return.

| ![10.00\\%](output/report_math/equation-073.svg) annual investment return | Age 62 | Age 63 | Age 64 | Age 65 | Age 66 | Age 67 | Age 68 | Age 69 | Age 70 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Gross monthly benefit | \$2,906 | \$3,114 | \$3,322 | \$3,598 | \$3,875 | \$4,152 | \$4,484 | \$4,816 | \$5,148 |
| Monthly amount invested after benefit tax | \$1,992 | \$2,135 | \$2,277 | \$2,467 | \$2,656 | \$2,846 | \$3,074 | \$3,302 | \$3,529 |
| Total invested principal | \$669K | \$692K | \$710K | \$740K | \$765K | \$786K | \$812K | \$832K | \$847K |
| Portfolio before capital-gains tax | \$3.38M | \$3.27M | \$3.14M | \$3.07M | \$2.97M | \$2.86M | \$2.77M | \$2.67M | \$2.56M |
| Investment growth | \$2.71M | \$2.58M | \$2.43M | \$2.33M | \$2.21M | \$2.08M | \$1.96M | \$1.84M | \$1.71M |
| Capital-gains tax paid at age 90 | \$965K | \$917K | \$866K | \$828K | \$786K | \$739K | \$699K | \$655K | \$608K |
| **Break-even return** | 6.15% | 6.11% | 6.20% | 5.85% | 5.62% | 5.59% | 4.96% | 4.31% | All returns |
| **Future value** | \$2.42M | \$2.35M | \$2.28M | \$2.24M | \$2.19M | \$2.12M | \$2.08M | \$2.02M | \$1.95M |
| **![\\Delta](output/report_math/equation-074.svg)** | \$468K | \$404K | \$330K | \$291K | \$239K | \$176K | \$129K | \$69,300 | \$0 |



#### After tax results given a ![12\\%](output/report_math/equation-075.svg) investment return.

| ![12.00\\%](output/report_math/equation-076.svg) annual investment return | Age 62 | Age 63 | Age 64 | Age 65 | Age 66 | Age 67 | Age 68 | Age 69 | Age 70 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Gross monthly benefit | \$2,906 | \$3,114 | \$3,322 | \$3,598 | \$3,875 | \$4,152 | \$4,484 | \$4,816 | \$5,148 |
| Monthly amount invested after benefit tax | \$1,992 | \$2,135 | \$2,277 | \$2,467 | \$2,656 | \$2,846 | \$3,074 | \$3,302 | \$3,529 |
| Total invested principal | \$669K | \$692K | \$710K | \$740K | \$765K | \$786K | \$812K | \$832K | \$847K |
| Portfolio before capital-gains tax | \$4.85M | \$4.62M | \$4.37M | \$4.20M | \$4.01M | \$3.80M | \$3.63M | \$3.44M | \$3.25M |
| Investment growth | \$4.18M | \$3.92M | \$3.66M | \$3.46M | \$3.24M | \$3.02M | \$2.82M | \$2.61M | \$2.40M |
| Capital-gains tax paid at age 90 | \$1.49M | \$1.40M | \$1.30M | \$1.23M | \$1.15M | \$1.07M | \$1.00M | \$930K | \$854K |
| **Break-even return** | 6.15% | 6.11% | 6.20% | 5.85% | 5.62% | 5.59% | 4.96% | 4.31% | All returns |
| **Future value** | \$3.36M | \$3.22M | \$3.07M | \$2.97M | \$2.85M | \$2.73M | \$2.63M | \$2.51M | \$2.39M |
| **![\\Delta](output/report_math/equation-077.svg)** | \$970K | \$827K | \$675K | \$575K | \$461K | \$335K | \$234K | \$122K | \$0 |



#### Compare before and after taxes at the same annual returns


<table>
<thead>
<tr><th rowspan="2">Annual return</th><th colspan="3">Before-tax</th><th colspan="4">After-tax</th></tr>
<tr><th>Start at 67</th><th>Start at 70</th><th>Delta</th><th>Start at 67</th><th>Start at 70</th><th>Delta</th><th>67:70 Ratio</th></tr>
</thead>
<tbody>
<tr><td align="right">5.00%</td><td align="right">&#36;2,119,722</td><td align="right">&#36;2,097,788</td><td align="right">&#36;21,933</td><td align="right">&#36;1,215,432</td><td align="right">&#36;1,227,636</td><td align="right">-&#36;12,203</td><td align="right">0.99</td></tr>
<tr><td align="right">10.00%</td><td align="right">&#36;4,174,697</td><td align="right">&#36;3,727,431</td><td align="right">&#36;447,266</td><td align="right">&#36;2,122,626</td><td align="right">&#36;1,947,061</td><td align="right">&#36;175,565</td><td align="right">1.09</td></tr>
<tr><td align="right">15.00%</td><td align="right">&#36;8,566,806</td><td align="right">&#36;6,832,411</td><td align="right">&#36;1,734,395</td><td align="right">&#36;4,061,575</td><td align="right">&#36;3,317,792</td><td align="right">&#36;743,783</td><td align="right">1.22</td></tr>
<tr><td align="right">20.00%</td><td align="right">&#36;17,966,300</td><td align="right">&#36;12,748,635</td><td align="right">&#36;5,217,664</td><td align="right">&#36;8,211,094</td><td align="right">&#36;5,929,580</td><td align="right">&#36;2,281,514</td><td align="right">1.38</td></tr>
</tbody>
</table>

<br>

![After-tax future values at the same annual returns](output/future_values_after_tax.png)

![After-tax delta versus investment rate](output/delta_after_tax.png)

The before-tax break-even is **4.45% annually**; the after-tax break-even is **5.59% annually**.

## Conclusion


Under this model’s assumptions, if you do not need the Social Security payments for living expenses and expect to earn more than the break-even return on invested payments, starting benefits at age 67 produces a larger final investment balance at age 90 than waiting until age 70. The break-even effective annual return is **4.45% before taxes** and **5.59% under the report’s tax assumptions**.


## Appendix: Symbol definitions


| Symbol | Definition |
| --- | --- |
| ![r_m](output/report_math/equation-078.svg) | Monthly investment return in decimal form derived from the configured annual return. |
| ![r_a](output/report_math/equation-079.svg) | Annual investment return in decimal form. |
| ![r_{mb}](output/report_math/equation-080.svg) | Monthly effective break-even investment return in decimal form. |
| ![r_{ab}](output/report_math/equation-081.svg) | Annual effective break-even investment return in decimal form. |
| ![P_{\\mathrm{PIA}}](output/report_math/equation-082.svg) | Illustrative primary insurance amount, the monthly benefit basis at full retirement age 67. |
| ![P_{67}](output/report_math/equation-083.svg), ![P_{70}](output/report_math/equation-084.svg) | Gross monthly Social Security payments when starting at ages 67 and 70. |
| ![n_{67}](output/report_math/equation-085.svg) | Number of monthly payments from age 67 to age 90. |
| ![n_{70}](output/report_math/equation-086.svg) | Number of monthly payments from age 70 to age 90. |
| ![\\mathrm{FV}_{67}](output/report_math/equation-087.svg) | Before-tax future value at the common endpoint for the age-67  strategy. |
| ![\\mathrm{FV}_{70}](output/report_math/equation-088.svg) | Before-tax future value at the common endpoint for the age-70 strategy. |
| ![\\Delta](output/report_math/equation-089.svg) | Difference ![\\mathrm{FV}_{67}-\\mathrm{FV}_{70}](output/report_math/equation-090.svg). |
| ![P](output/report_math/equation-091.svg) | Gross monthly benefit for either strategy in the tax calculation. |
| ![N](output/report_math/equation-092.svg) | Payment count for that strategy: ![n_{67}](output/report_math/equation-093.svg) or ![n_{70}](output/report_math/equation-094.svg). |
| ![P_{\\mathrm{net}}](output/report_math/equation-095.svg) | Monthly benefit remaining after benefit taxes, available to invest. |
| ![B](output/report_math/equation-096.svg) | Total invested after-tax principal. |
| ![V](output/report_math/equation-097.svg) | Portfolio balance before capital gains tax at age 90. |
| ![G](output/report_math/equation-098.svg) | Accumulated investment growth, excluding contributions. |
| ![T](output/report_math/equation-099.svg) | One-time capital gains tax paid at age 90. |
| ![\\mathrm{FV}_{\\text{net-tax}}](output/report_math/equation-100.svg) | After tax future value. |

Copyright © 2026 The Brookhaven Group, LLC.
