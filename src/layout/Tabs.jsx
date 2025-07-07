



//           onClick={() => setActiveTab(tab.id)}
//           className={`flex-1 py-3 font-medium transition-colors duration-200 ${
//             activeTab === tab.id
//               ? 'bg-white text-black'
//               : 'text-gray-500 hover:bg-gray-200'
//           }`}
//         >
//           {tab.label}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default Tabs;

import React from 'react';

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'ask', label: 'Ask AI' },
    { id: 'results', label: 'Results' },
    { id: 'history', label: 'History' },
  ];

  return (
    <div className="flex w-full max-w-6xl mx-auto rounded-md overflow-hidden bg-gray-100 text-sm">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex-1 py-3 font-medium transition-colors duration-200 ${
            activeTab === tab.id ? 'bg-white text-black' : 'text-gray-500 hover:bg-gray-200'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};
export default Tabs
