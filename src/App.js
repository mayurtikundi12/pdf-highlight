import * as React from 'react';
import Highlight from './Highlight';






const App = () => {
    let highlight_sections = [
        {
            "page_no": 2,
            "content": "(a) after clause (e), the following clause shall be inserted, namely:—\n'(ea) \"commitment\" means the commitment referred to in section 48B;';\n(b) in clause (h), for the portion beginning with the words \"a person or a\ndepartment of the Government\" and ending with the words \"defence and space\", the\nfollowing words shall be substituted, namely:—\n\"a person or a department of the Government, including units, divisions,\nsubsidiaries, who or which is, or has been, engaged in any economic activity,\nrelating to the production, storage, supply, distribution, acquisition or control of\narticles or goods, or the provision of services, of any kind, or in investment, or in\nthe business of acquiring, holding, underwriting or dealing with shares,\ndebentures or other securities of any other body corporate, either directly or\nthrough one or more of its units or divisions or subsidiaries, but does not\ninclude any activity of the Government relatable to the sovereign functions of\nthe Government including all activities carried on by the departments of the\nCentral Government dealing with atomic energy, currency, defence and space;\";\n(c) after clause (k), the following clause shall be inserted, namely:—\n'(ka) \"party\" includes a consumer or an enterprise or a person or an\ninformation provider, or a consumer association or a trade association, or the\nCentral Government or any State Government or any statutory authority, as the\ncase may be, and shall include an enterprise or a person against whom any\ninquiry or proceeding is instituted; and any enterprise or person impleaded by\nthe Commission to join the proceedings;';\n(d) in clause (l), in sub-clause (vi), for the words and figures \"section 617 of the\nCompanies Act, 1956\", the words, brackets and figures \"clause (45) of section 2 of the 1 of 1956.\nCompanies Act, 2013\" shall be substituted; 18 of 2013.\n(e) for clause (p), the following clause shall be substituted, namely:—\n'(p) \"public financial institution\" means public financial institution as\ndefined in clause (72) of section 2 of the Companies Act, 2013 and includes a 18 of 2013.\n"
        },
        {
            "page_no": 6,
            "content": "(7) Notwithstanding anything contained in this section and section 43A,\nupon fulfilment of such criteria as may be prescribed, certain categories\nof combinations shall be exempted from the requirement to comply with\nsub-sections (2), (2A) and (4).\n(8) Notwithstanding anything contained in sub-sections (4), (5), (6)\nand (7)—\n(i) the rules and regulations made under this Act on the matters\nreferred to in these sub-sections as they stood immediately before the\ncommencement of the Competition (Amendment) Act, 2023 and in force at\nsuch commencement, shall continue to be in force, till such time as the\nrules or regulations, as the case may be, made under this Act; and\n(ii) any order passed or any fee imposed or combination\nconsummated or resolution passed or direction given or instrument\nexecuted or issued or thing done under or in pursuance of any rules and\nregulations made under this Act shall, if in force at the commencement of\nthe Competition (Amendment) Act, 2023, continue to be in force, and shall\nhave effect as if such order passed or such fee imposed or such combination\nconsummated or such resolution passed or such direction given or such\ninstrument executed or issued or done under or in pursuance of this Act.\n"
        },
        {
            "page_no": 9,
            "content": "\";\n(c) in sub-section (4), for the word, brackets and figure \"sub-section (3)\",\nat both the places where they occur, the words, brackets, figures and letter\n\"sub-sections (3) and (3B)\" shall be substituted;\n(d) in sub-section (5), for the word, brackets and figure \"sub-section (3)\", the\nwords, brackets, figures and letter \"sub-sections (3) and (3B)\" shall be substituted;\n(e) in sub-section (8), for the word, brackets and figure \"sub-section (3)\", the\nwords, brackets, figures and letter \"sub-sections (3) and (3B)\" shall be substituted;\n(f) after sub-section (8), the following sub-section shall be inserted, namely:—\n\"(9) Upon completion of the investigation or inquiry under\nsub-section (7) or sub-section (8), as the case may be, the Commission may pass\nan order closing the matter or pass an order under section 27, and send a copy of\nits order to the Central Government or the State Government or the statutory\nauthority or the parties concerned, as the case may be:\nProvided that before passing such order, the Commission shall issue a\nshow-cause notice indicating the contraventions alleged to have been committed\nand such other details as may be specified by regulations and give a reasonable\nopportunity of being heard to the parties concerned.\".\n20. In section 27 of the principal Act, for clause (b), the following clause shall be Amendment\nsubstituted, namely:— of section 27.\n"
        },
        {
            "page_no": 6,
            "content": "(a) any enterprise which is or has been a party to a proceeding before the\nCommission under this Act; or\n(b) any person who appears or has appeared before the Commission under\nsection 35.\n(2) Notwithstanding anything contained in section 35, the Chairperson or any\nother Member after retirement or otherwise ceasing to be in service for any reason\nshall not represent for any person or enterprise before the Commission:\nProvided that nothing contained in this section shall apply to any employment\nunder the Central Government or a State Government or local authority or in any\nstatutory authority or any corporation established by or under any Central, State or\nProvincial Act or a Government company as defined in clause (45) of section 2 of the\n18 of 2013. Companies Act, 2013.\".\n12. In section 16 of the principal Act, in sub-section (1), for the words \"Central Amendment\nGovernment may, by notification\", the words \"Commission may, with the prior approval of of section 16.\nthe Central Government\" shall be substituted.\n13. For section 18 of the principal Act, the following section shall be substituted, Substitution\nnamely:— of new\nsection for\nsection 18.\n\"18. "
        },
        {
            "page_no": 11,
            "content": "In section 32 of the principal Act, for the figures and word \"29 and 30\", the figures,\nof section 32. letter and word \"29, 29A and 30\" shall be substituted.\nAmendment 25. Section 35 of the principal Act shall be numbered as sub-section (1) thereof,—\nof section 35.\n(a) in sub-section (1) as so numbered, for the words \"A person or an enterprise\",\nthe words \"A party'' shall be substituted;\n(b) after sub-section (1) as so numbered, the following sub-section shall be\ninserted, namely:—\n\"(2) Without prejudice to sub-section (1), a party may call upon experts\nfrom the fields of economics, commerce, international trade or from any other\ndiscipline to provide an expert opinion in connection with any matter related to\na case.\".\nAmendment 26. In section 41 of the principal Act,—\nof section 41.\n"
        }
    ]
    return(<>
    <Highlight highlight_sections={highlight_sections} ></Highlight>
    </>)
};

export default App;