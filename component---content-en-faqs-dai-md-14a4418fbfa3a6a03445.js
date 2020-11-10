(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"+Bgf":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return s})),t.d(a,"default",(function(){return p}));var n=t("zLVn"),i=(t("q1tI"),t("7ljp")),r=t("z1h2"),s={},o=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",a)}},c=o("StatusBanner"),l=o("Button"),b={_frontmatter:s},h=r.a;function p(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(i.b)(h,Object.assign({},b,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)(c,{sticky:!0,mdxType:"StatusBanner"},Object(i.b)("p",null,"These are legacy guides and will not be maintened. You may be looking for the Dai pages here ",Object(i.b)(l,{secondary:!0,inline:!0,to:"/learn/Dai/",mdxType:"Button"},"The Dai Section"))),Object(i.b)("h1",null,"Dai"),Object(i.b)("h2",null,"What is Dai?"),Object(i.b)("p",null,"Dai is collateral-backed money whose value is pegged to the US Dollar and kept stable through a framework of aligned financial incentives."),Object(i.b)("p",null,"The Dai token lives on the Ethereum blockchain; its stability is unmediated by any central party, and its solvency does not rely on any trusted counterparties. All circulating Dai are generated from ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"/learn/vaults/"}),"Maker Vaults")," and are backed by a surplus of collateral assets."),Object(i.b)("p",null,"Dai is used in the same manner as any other cryptocurrency: It can be freely sent to others, used as payments for goods and services, be held as a hedge against market volatility, and ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://awesome.makerdao.com/#use-dai"}),"much more"),"."),Object(i.b)("h2",null,"Why would I want to use Dai?"),Object(i.b)("p",null,"Dai is a price-stable asset that can be used as money. It works well as a medium of exchange, store of value, and unit of account. A decentralized digital economy needs stable money in order to function. Dai solves this problem and enables a wide range of financial activities and applications that have previously been untenable due to the volatility of legacy cryptocurrencies like Bitcoin."),Object(i.b)("p",null,"Additionally, the ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"/learn/Dai/dsr/"}),"Dai Savings Rate")," enables Dai users to earn accruals on the Dai they save. Here is a non-exhaustive list of some of the things Dai can be used for:"),Object(i.b)("p",null,"Hedging: During periods of high market volatility, Dai offers a safe harbor to store value without having to exit the crypto ecosystem."),Object(i.b)("p",null,"Exchange pairs: Crypto-to-crypto trading can be a complicated proposition. It is difficult to track earnings when both sides of a trading pair are rising and falling in value. Creating markets that pair with DAI creates lower risk markets for market makers, and gives regular traders a stable asset to trade against."),Object(i.b)("p",null,"Financial products: Dai can be used as collateral for various types of financial instruments, and can also be accepted for repayment of debt."),Object(i.b)("p",null,"Merchant receipts, cross-border transactions, and remittances: Dai transactions are borderless and settle in minutes compared to legacy cross-border transaction solutions, which often take days or weeks and charge high fees."),Object(i.b)("p",null,"Prediction markets and gambling: Long term betting becomes infeasible if users also have to gamble on the future price of the asset they are wagering. A cryptocurrency with price stability like Dai can be the natural choice for prediction markets or gambling applications."),Object(i.b)("p",null,"Retail and Consumer Use of Cryptocurrency: Use of cryptocurrency in regular day-to-day economic activity can only scale with a stable asset as a medium of exchange. Dai fills this role perfectly."),Object(i.b)("h2",null,"Is one Dai always worth exactly one USD?"),Object(i.b)("p",null,"No, though it stays pretty close. Dai is not a hard-pegged currency, so it does not perfectly track the value of an existing fiat currency. Rather, it maintains a free-floating peg that experiences extremely low volatility against the US dollar. Notably, in the event of an ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"/learn/governance/emergency-shutdown/"}),"Emergency Shutdown"),", each Dai is redeemable for \\$1 worth of collateral."),Object(i.b)("h2",null,"How is the price of Dai kept stable?"),Object(i.b)("p",null,"Dai is not a hard-pegged currency, so it does not perfectly track the value of an existing fiat currency. Rather, it maintains a free-floating peg that experiences extremely low volatility against the US dollar."),Object(i.b)("p",null,"It achieves this stability through a combination of external market forces, complementary internal economic incentives, and policy tools controlled by MKR token holders. Many different market actors behaving in their own self-interest, yet working in concert, contribute to its stability. These actors include MKR holders, arbitrageurs, Vault owners, Keepers, and market makers."),Object(i.b)("p",null,"If Dai demand consistently exceeds Dai supply, or vice-versa, it creates a signal that MKR holders need to adjust the ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"/learn/Dai/dsr/"}),"Dai Savings Rate"),", which is the primary tool for influencing Dai demand and steering the monetary policy of Dai. Raising the Dai Savings Rate increases the demand for holding Dai; lowering the rate decreases the demand for holding Dai. This ultimately translates to a stable Dai peg."),Object(i.b)("p",null,Object(i.b)("a",Object.assign({parentName:"p"},{href:"/learn/vaults/stability-fees/"}),"Stability Fees")," for various Vault types are another policy tool that can be used to help Dai stability but are primarily used for covering the ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://www.investopedia.com/terms/r/riskpremium.asp"}),"risk premium")," of different Vault types. Decreases in a Stability Fee, reflecting the cost of borrowing, can incentivize the additional creation of Dai. Similarly, increasing Stability Fees can reduce the rate of Dai generation."),Object(i.b)("p",null,"Arbitrageurs also contribute to the short term stability of the peg by taking advantage of price differences across various Dai markets."),Object(i.b)("p",null,"Vault owners are able to participate in maintaining the peg by taking advantage of opportunities when spikes in demand push the Dai price higher than \\$1. This allows a Vault owner to issue Dai that can be used to purchase assets with an additional variable amount of purchasing power. Inversely, when Dai is trading below a dollar, Vault owners are incentivized to purchase Dai and pay down their Dai balances at a discount."),Object(i.b)("h2",null,"How can I generate Dai?"),Object(i.b)("p",null,"Dai generation only happens through the use of ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"/learn/vaults/"}),"Maker Vaults"),". The Maker Foundation offers a comfortable user interface for interacting with the Maker Protocol on ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://oasis.app/"}),"Oasis.app"),". Users may open and interact with their Vaults on ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://oasis.app/borrow"}),"oasis.app/borrow.")," There are a number of other apps that give people access to Maker Vaults; a shortlist can be found in the ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://awesome.makerdao.com/#generate-dai"}),"Generate Dai")," section of the Awesome MakerDAO resource library."),Object(i.b)("h2",null,"Where can I buy Dai?"),Object(i.b)("p",null,"Dai is available on a wide range of centralized and decentralized exchanges. A list of these exchanges can be found in the ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://awesome.makerdao.com/#trade-dai"}),"Trade Dai")," section of the Awesome-MakerDAO resource repository. Use these exchanges at your own risk, always do your own research and due diligence before interacting with these platforms."),Object(i.b)("h2",null,"Where can I see the amount of collateral that is backing Dai?"),Object(i.b)("p",null,"Because the Maker Protocol runs publicly on the Ethereum blockchain, users can view real-time data about the system. A rich ecosystem of analytic tools has emerged to make the viewing experience easier for casual observers. The ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://awesome.makerdao.com/#watch-dai"}),"Watch Dai")," section in the Awesome-MakerDAO resource repository contains a list of sites that provide stats and analytics for MakerDAO and Dai."),Object(i.b)("h2",null,"What organizations are using Dai?"),Object(i.b)("p",null,"Visit our ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://makerdao.com/en/ecosystem"}),"ecosystem page")," to see some of the ways Dai is being used."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-en-faqs-dai-md-14a4418fbfa3a6a03445.js.map