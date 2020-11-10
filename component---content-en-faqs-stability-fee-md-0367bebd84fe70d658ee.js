(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{SSpU:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return u}));var o=a("zLVn"),n=(a("q1tI"),a("7ljp")),i=a("z1h2"),s={},r=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},c=r("StatusBanner"),l=r("Button"),h={_frontmatter:s},b=i.a;function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(n.b)(b,Object.assign({},h,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(c,{sticky:!0,mdxType:"StatusBanner"},Object(n.b)("p",null,"These are legacy guides and will not be maintened. You may be looking for the page on ",Object(n.b)(l,{secondary:!0,inline:!0,to:"/learn/vaults/stability-fees/",mdxType:"Button"},"Stability Fees"))),Object(n.b)("h1",null,"Stability Fee"),Object(n.b)("h2",null,"What is the Stability Fee?"),Object(n.b)("p",null,"The Maker Protocol collects a Stability Fee on Dai that is generated from ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/learn/vaults/"}),"Maker Vaults"),". It is a variable-rate fee that changes when Maker’s governing body votes on proposals put forth by Risk Teams."),Object(n.b)("h2",null,"What is the purpose of the Stability Fee?"),Object(n.b)("p",null,"The Stability Fee is a Risk Parameter designed to address the inherent risk in generating Dai against collateral in ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/learn/vaults/"}),"Maker Vaults"),". A part of the Stability Fee is also set aside for the purpose of sustaining operations of the Maker Protocol which include the ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"dsr.md"}),"DSR"),", Risk Teams, and other costs inherent to the protocol."),Object(n.b)("h2",null,"When do I have to pay the Stability Fee?"),Object(n.b)("p",null,"The Stability Fee continuously accrues to the generated Dai Balance of a user’s ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/learn/vaults/"}),"Vault"),". Vault owners are free to pay back Dai at any time they wish. Vaults have no standards around repayment, instead, they require the owner of the Vault to keep its ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/learn/vaults/#what-is-the-collateralization-ratio"}),"Collateralization Ratio")," above the ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/learn/liquidation.mdx#what-is-the-liquidation-ratio"}),"Liquidation Ratio"),"."),Object(n.b)("h2",null,"Do I have to pay the new fees on old debt in the case of a Stability Fee change?"),Object(n.b)("p",null,"No. Stability Fees are never applied retroactively. After a fee change, users will accrue a Stability Fee at the new rate from that point forward."),Object(n.b)("h2",null,"Why does the Stability Fee Change?"),Object(n.b)("p",null,"The Stability Fee for each ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/learn/vaults/"}),"Vault")," type changes as a result of the decisions of MKR token holders who govern the protocol. These decisions are based on the recommendation of Risk Teams who perform risk assessments on Collateral used in the system. The Risk Teams may update their proposed Stability Fee when something fundamental changes about the underlying asset or the system as a whole."),Object(n.b)("h2",null,"How is the Stability Fee calculated?"),Object(n.b)("p",null,"The Stability Fee is continuously compounding interest at a growth rate of x% per second. When the Stability Fee is set to 2%, for example, it will be accumulating at 1.0000000006279371924910298109948‬% per second, meaning that at the end of year one the user will owe exactly 2% on the principal. Assuming the user put in 100 Dai, at the end of year one they would have 102.00, and at the end of year two, they would have 104.04."),Object(n.b)("p",null,"Technical documentation about how Rates work in the Maker Protocol can be found in the ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/smart-contract-modules/rates-module"}),"Rates Module")," section of our Documentation Portal."),Object(n.b)("h2",null,"What does the system do with the collected fees?"),Object(n.b)("p",null,"The Stability Fees are collected inside the Maker Protocol’s ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/smart-contract-modules/core-module/vat-detailed-documentation"}),"internal balance sheet"),". Once the maximum level of surplus is reached, the system will automatically send Dai to a ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/auctions/the-auctions-of-the-maker-protocol#surplus-auction"}),"Surplus Auction"),". During this auction, keepers bid in MKR for DAI. At the end of the auction, the Dai is released to the winning bidder, while the MKR that was paid gets burned."),Object(n.b)("h2",null,"Where can I see my currently accrued Stability Fee?"),Object(n.b)("p",null,"Since the Maker Protocol can be integrated by anyone, many different front-ends may be used for interacting with it. One can usually find the amount of accrued fees on these user-interfaces."),Object(n.b)("p",null,"There are also a number of third-party tools for tracking Vaults, like ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://mkr.tools/cdps"}),"mkr.tools"),", which allows a user to see the Stability Fees owed on any Vault. More of these tools can be found in the ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://awesome.makerdao.com/#watch-dai"}),"Watch your Dai")," section of the ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://awesome.makerdao.com/"}),"Awesome-MakerDAO")," resource repository."),Object(n.b)("h2",null,"How can I calculate my potential Stability Fee?"),Object(n.b)("p",null,"There are a number of online calculators that can be found on the ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://awesome.makerdao.com/#monitor-vaults"}),"Monitor Vaults")," section of the Awesome-MakerDAO resource repository."),Object(n.b)("h2",null,"Where can I learn more about Risk Teams and how Stability Fees are determined?"),Object(n.b)("p",null,"Please visit our Risk Management FAQ(",Object(n.b)("em",{parentName:"p"},"coming soon"),") to learn more about Risk Teams and the work that they do. Additionally, documentation about their models for determining Stability Fees can be found in our ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://forum.makerdao.com/"}),"Governance Forum"),", under the ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://forum.makerdao.com/c/risk/"}),"Risk")," section."),Object(n.b)("h2",null,"Is there a limit to how much a Stability Fee can change?"),Object(n.b)("p",null,"Yes, there is a weekly limit to how much a given Stability Fee can change, defined by the range of options available for MKR governors to vote on. It is a range that is subject to change. The Stability Fee adjustment votes that were going on in October 2019, for example, offered a range of -4% to 4%. To find out the current range on a given Stability Fee adjustment, visit ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://mkrgov.science/polls"}),"mkrgov.science/polls")," and look at the most recent relevant Governance Poll."),Object(n.b)("h2",null,"How often do Stability Fees change?"),Object(n.b)("p",null,"Stability Fee changes don’t happen on a regular schedule. They happen in response to changing market dynamics and risks. It is not possible to give an exact answer to how often Stability Fees change. Risk Teams approach any adjustments on a case-by-case basis."),Object(n.b)("h2",null,"Where can I find more technical information about Stability Fees?"),Object(n.b)("p",null,"Visit our ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/"}),"Documentation Portal")," for all technical documentation of the Maker Protocol. Technical documentation about the Stability Fee can be found in the ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/smart-contract-modules/rates-module/jug-detailed-documentation"}),"Jug - Detailed Documentation")," subsection of our Documentation Portal. Documentation about how Rates work in the Maker Protocol can be found in the ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/smart-contract-modules/rates-module"}),"Rates Module")," section of our Documentation Portal."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-en-faqs-stability-fee-md-0367bebd84fe70d658ee.js.map