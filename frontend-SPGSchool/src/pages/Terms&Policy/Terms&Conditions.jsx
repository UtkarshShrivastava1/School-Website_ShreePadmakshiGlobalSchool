import React, { useState } from 'react';

const AttendanceMatters = () => {
    const [activeTab, setActiveTab] = useState('general');

  return (
    <>
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
        Terms Of Use
        </span>
        <div className="flex items-center justify-center mb-10">
            <div className="w-1/4 h-px bg-gray-300"></div>
            <h2 className="text-3xl md:text-4xl font-serif text-orange-700 px-6">
            Security Rules
            </h2>
            <div className="w-1/4 h-px bg-gray-300"></div>
          </div>
       
        <p className="text-gray-600 max-w-full mx-auto">
        Visitors are prohibited from violating or attempting to violate the security of the Web site, including, without limitation, (1) accessing data not intended for such user or logging into a server or account which the user is not authorized to access, (2) attempting to probe, scan or test the vulnerability of a system or network or to breach security or authentication measures without proper authorization, (3) attempting to interfere with service to any user, host or network, including, without limitation, via means of submitting a virus or "Trojan horse" to the Web site, overloading, "flooding", "mail bombing" or "crashing", or (4) sending unsolicited electronic mail, including promotions and/or advertising of products or services. Violations of system or network security may result in civil or criminal liability. SPGS-Bilaspur and / or its associate entities will have the right to investigate occurrences that they suspect as involving such violations and will have the right to involve, and cooperate with, law enforcement authorities in prosecuting users who are involved in such violations.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        
        <div className="flex items-center justify-center mb-10">
            <div className="w-1/4 h-px bg-gray-300"></div>
            <h2 className="text-3xl md:text-4xl font-serif text-orange-700 px-6">
            Prohibited User Content:
            </h2>
            <div className="w-1/4 h-px bg-gray-300"></div>
          </div>
          </div>
       
        <p className="text-gray-600 max-w-full mx-auto">
        The following is a partial list of the kind of User Content that is illegal or prohibited on “www.mountliteragzb.com”. SPGS-Bilaspur reserves the right to investigate and take appropriate legal action in its sole discretion against anyone who violates this provision, including without limitation, removing the offending User Content from the website and terminating the accounts of such violators. Prohibited User Content includes content that you should not host, display, upload, modify, publish, transmit, update or share including information that:
        </p>
      </div>
      
        
      
      <div className="w-full mx-auto">
        <div className="border border-blue-200 rounded-lg bg-white shadow-sm">
          <div className="bg-blue-50 p-4 flex items-center space-x-3 border-b border-blue-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <h2 className="text-lg font-semibold text-blue-800"></h2>
          </div>
          
          <div className="p-4 space-y-4">
            {[
            " Relates to personal or sensitive personal information about yourself or any third party;",
             "Is obscene, patently offensive, or promotes racism, bigotry, hatred or physical harm of any kind against any group or individual;",
             "Harasses or advocates harassment of another person;",
             "Contains nudity, violence, or offensive subject matter;",
            " Involves the transmission of 'junk mail' or 'chain letters' or unsolicited mass mailing;",
            " Promotes information that you know is false or misleading or promotes illegal ctivities or conduct that is abusive, threatening, obscene, defamatory or libelous;",
            " Exploits people in a sexual or violent manner;",
            " Provides any telephone numbers, street addresses, last names, URLs or email addresses, including in your Account profile;",
           "  Violates the copyright, trademark or other intellectual property rights of any other person;",
          "   Furthers or promotes any criminal activity or enterprise or provides instructional information about illegal activities such as making or buying illegal weapons, violating someone's privacy, or providing or creating computer viruses;",
            " Solicits passwords or personal identifying information for commercial or unlawful purposes from other Users;",
            " Involves commercial activities and/or sales without our prior written consent such as contests, sweepstakes, solicitation of donations, barter, advertising, or pyramid schemes;",
            " Belongs to another person and to which the user does not have any right to;",
            " Is grossly harmful, harassing, blasphemous defamatory, obscene, pornographic, pedophilic, libelous, invasive of another's privacy, hateful, or racially, ethnically objectionable, disparaging, relating or encouraging money laundering or gambling, or otherwise unlawful in any manner whatever;",
           "  Harm minors in any way;",
            " Infringes any patent, trademark, copyright or other proprietary rights;",
           "  Violates any law for the time being in force;",
            " Deceives or misleads the addressee about the origin of such messages or communicates any information which is grossly offensive or menacing in nature;",
            " Impersonate another person;",
            " Contains software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer resource;",
             "Threatens the unity, integrity, defence, security or sovereignty of India, friendly relations with foreign states, or public order or causes incitement to the commission of any cognizable offence or prevents investigation of any offence or is insulting any other nation."
            ].map((rule, index) => (
              <div key={index} className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 text-base">{rule}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
       
    

    </>
  );
};


export default AttendanceMatters;